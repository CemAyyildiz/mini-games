// LocalStorage helper utilities

const STORAGE_PREFIX = 'mini-games';

export const StorageKeys = {
  USER_DATA: `${STORAGE_PREFIX}_user`,
  GAME_STATE: `${STORAGE_PREFIX}_game_state`,
  HIGH_SCORES: `${STORAGE_PREFIX}_high_scores`,
  SETTINGS: `${STORAGE_PREFIX}_settings`,
} as const;

export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}

export function setToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
}

export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
}

export function clearAllStorage(): void {
  try {
    Object.values(StorageKeys).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}
