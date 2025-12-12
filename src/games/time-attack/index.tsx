import { useState, useEffect, useCallback } from 'react';
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

  const handleStart = useCallback(() => {
    setLastResult(null);
    setScoreSaved(false);
    start();
  }, [start]);

  const handleStop = useCallback(() => {
    const stoppedTime = stop();
    const result = checkAccuracy(stoppedTime);
    setLastResult(result);
  }, [stop, checkAccuracy]);

  // Keyboard shortcuts for Space and Enter
  useEffect(() => {
    if (!hasStarted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input field
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      // Space or Enter to start/stop
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        
        if (isRunning) {
          // Stop the game
          handleStop();
        } else if (results.length === 0) {
          // Start the game (only if no results yet, meaning it's a fresh start)
          handleStart();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [hasStarted, isRunning, results.length, handleStart, handleStop]);

  const handleStartGame = () => {
    setHasStarted(true);
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
