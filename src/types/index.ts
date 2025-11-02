// Global type definitions
declare global {
  interface Window {
    _DEBUG?: boolean;
  }
}

// Component Props Types
export interface ParallaxProps {
  speed?: number;
  easing?: number;
  disabled?: boolean;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ErrorType = {
  message: string;
  code?: string;
  stack?: string;
};

// Theme Types
export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

// Animation Types
export type AnimationState = {
  isAnimating: boolean;
  progress: number;
  error: ErrorType | null;
};

// Validation Types
export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

// Debug Types
export type DebugInfo = {
  component: string;
  props: Record<string, unknown>;
  state: Record<string, unknown>;
  timestamp: number;
};

export {};