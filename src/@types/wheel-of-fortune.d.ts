// Wheel of Fortune specific type definitions

declare interface WheelSegment {
  id: string;
  label: string;
  color: string;
  probability: number;
  prizeValue: number;
  angle: number;
}

declare interface WheelConfig {
  segments: WheelSegment[];
  spinDuration: number;
  minSpins: number;
  maxSpins: number;
}

declare interface WheelSpinResult {
  segment: WheelSegment;
  finalAngle: number;
  spinDuration: number;
  timestamp: number;
}

declare interface WheelState {
  isSpinning: boolean;
  currentAngle: number;
  selectedSegment: WheelSegment | null;
  spinCount: number;
  totalWinnings: number;
}
