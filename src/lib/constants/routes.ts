// Route constants

export const ROUTES = {
  HOME: '/',
  WHEEL_OF_FORTUNE: '/wheel-of-fortune',
  TIME_ATTACK: '/time-attack',
  LEADERBOARD: '/leaderboard',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
