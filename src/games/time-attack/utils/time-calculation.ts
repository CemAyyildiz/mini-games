// Time calculation utilities

import { TIME_ATTACK_CONFIG, TIME_ATTACK_ACCURACY_LEVELS } from '@/lib/constants/game-constants';

export function calculateAccuracy(stoppedTime: number): number {
  const difference = Math.abs(stoppedTime - TIME_ATTACK_CONFIG.TARGET_TIME);
  const maxDifference = TIME_ATTACK_CONFIG.TARGET_TIME;
  const accuracy = Math.max(0, 100 - (difference / maxDifference) * 100);
  return Number(accuracy.toFixed(2));
}

export function calculateDifference(stoppedTime: number): number {
  return Math.abs(stoppedTime - TIME_ATTACK_CONFIG.TARGET_TIME);
}

export function isSuccess(stoppedTime: number): boolean {
  const difference = calculateDifference(stoppedTime);
  return difference <= TIME_ATTACK_CONFIG.TOLERANCE;
}

export function getAccuracyLevel(difference: number) {
  for (const [key, level] of Object.entries(TIME_ATTACK_ACCURACY_LEVELS)) {
    if (difference <= level.threshold) {
      return level;
    }
  }
  return TIME_ATTACK_ACCURACY_LEVELS.POOR;
}
