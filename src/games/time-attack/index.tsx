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
  const [lastSavedAccuracy, setLastSavedAccuracy] = useState(0);
  
  const { isRunning, currentTime, start, stop, reset } = useChronometer();
  const { results, bestAccuracy, checkAccuracy, resetResults } = useAccuracyCheck();

  // Save score when accuracy is achieved
  useEffect(() => {
    if (lastResult && lastResult.accuracy > 0 && lastResult.accuracy !== lastSavedAccuracy) {
      const username = getUsername();
      if (username) {
        // Convert accuracy percentage to score (0-100 scale to 0-10000 scale)
        const score = Math.round(lastResult.accuracy * 100);
        saveScore(GAME_IDS.TIME_ATTACK, score, username, {
          stoppedTime: lastResult.stoppedTime,
          accuracy: lastResult.accuracy,
        });
        setLastSavedAccuracy(lastResult.accuracy);
      }
    }
  }, [lastResult, lastSavedAccuracy]);

  const handleStartGame = () => {
    setHasStarted(true);
  };

  const handleStart = () => {
    setLastResult(null);
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
    setLastSavedAccuracy(0);
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

      <ResultPanel
        result={lastResult}
        bestAccuracy={bestAccuracy}
        attempts={results.length}
      />

      <GameLeaderboard gameId={GAME_IDS.TIME_ATTACK} currentScore={lastResult?.accuracy ? Math.round(lastResult.accuracy * 100) : undefined} />
    </div>
  );
}
