// Format utilities

export function formatTime(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const ms = milliseconds % 1000;
  return `${seconds}.${ms.toString().padStart(3, '0').slice(0, 2)}`;
}

export function formatScore(score: number): string {
  return new Intl.NumberFormat('tr-TR').format(score);
}

export function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
}

export function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} gün önce`;
  if (hours > 0) return `${hours} saat önce`;
  if (minutes > 0) return `${minutes} dakika önce`;
  return `${seconds} saniye önce`;
}

export function formatPercentage(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}
