import type { ValidationResult } from '@/types';

export class Validator {
  static validateSpeed(speed: number): ValidationResult {
    const errors: string[] = [];
    
    if (typeof speed !== 'number') {
      errors.push('Speed must be a number');
    }
    
    if (speed < 0 || speed > 1) {
      errors.push('Speed must be between 0 and 1');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateEasing(easing: number): ValidationResult {
    const errors: string[] = [];
    
    if (typeof easing !== 'number') {
      errors.push('Easing must be a number');
    }
    
    if (easing < 0 || easing > 1) {
      errors.push('Easing must be between 0 and 1');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateScrollPosition(position: number): ValidationResult {
    const errors: string[] = [];
    
    if (typeof position !== 'number') {
      errors.push('Scroll position must be a number');
    }
    
    if (position < 0) {
      errors.push('Scroll position cannot be negative');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateTransform(transform: string): ValidationResult {
    const errors: string[] = [];
    
    if (typeof transform !== 'string') {
      errors.push('Transform must be a string');
    }
    
    if (!transform.includes('translate3d') && !transform.includes('matrix3d')) {
      errors.push('Transform must use 3D transforms for better performance');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}