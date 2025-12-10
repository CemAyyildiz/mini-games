import { useState, useEffect } from 'react';
import ChronometerDisplay from './components/chronometer-display';
import StopButton from './components/stop-button';
import ResultPanel from './components/result-panel';
import UsernameDialog from '@/components/common/username-dialog';
import GameLeaderboard from '@/components/common/game-leaderboard';
import { useChronometer } from './hooks/use-chronometer';
import { useAccuracyCheck } from './hooks/use-accuracy-check';
import { GAME_IDS } from '@/lib/constants/game-constants';
import { getUsername, saveScore } from '@/lib/utils/storage';

export default function TimeAttack() {
  const [lastResult, setLastResult] = useState<TimeAttackResult | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);
  
  const { isRunning, currentTime, start, stop, reset } = useChronometer();
  const { results, checkAccuracy, resetResults } = useAccuracyCheck();

  // Save score when game stops
  useEffect(() => {
    if (lastResult && !scoreSaved) {
      const username = getUsername();
      if (username) {
        // Save difference as score IN SECONDS (smaller difference = better score)
        const scoreDifference = Math.abs(lastResult.difference) / 1000;
        saveScore(GAME_IDS.TIME_ATTACK, scoreDifference, username, {
          stoppedTime: lastResult.stoppedTime,
          difference: lastResult.difference,
        });
        setScoreSaved(true);
      }
    }
  }, [lastResult, scoreSaved]);

  const handleStartGame = () => {
    setHasStarted(true);
  };

  const handleStart = () => {
    setLastResult(null);
    setScoreSaved(false);
    start();
  };

  const handleStop = () => {
    const stoppedTime = stop();
    const result = checkAccuracy(stoppedTime);
    setLastResult(result);
  };

  const handleReset = () => {
    reset();
    resetResults();
    setLastResult(null);
    setHasStarted(false);
    setScoreSaved(false);
  };

  if (!hasStarted) {
    return (
      <div className="space-y-8">
        <UsernameDialog onStart={handleStartGame} />
        <GameLeaderboard gameId={GAME_IDS.TIME_ATTACK} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ChronometerDisplay currentTime={currentTime} isRunning={isRunning} />

      <StopButton
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        canReset={results.length > 0}
      />

      <ResultPanel result={lastResult} />

      <GameLeaderboard gameId={GAME_IDS.TIME_ATTACK} currentScore={lastResult?.difference} />
    </div>
  );
}
