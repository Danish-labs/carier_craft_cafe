import { useEffect, useState, useCallback, useRef } from 'react';
import { debug } from '@/utils/debug';
import { Validator } from '@/utils/validator';
import { performance } from '@/utils/performance';
import type { ParallaxProps } from '@/types';

export const useParallax = ({ 
  speed = 0.5, 
  easing = 0.1,
  disabled = false 
}: ParallaxProps = {}) => {
  // Validate inputs
  const speedValidation = Validator.validateSpeed(speed);
  const easingValidation = Validator.validateEasing(easing);

  if (!speedValidation.isValid || !easingValidation.isValid) {
    console.error('Parallax validation errors:', [
      ...speedValidation.errors,
      ...easingValidation.errors
    ]);
    return { transform: 'none' };
  }

  const [offset, setOffset] = useState(0);
  const [target, setTarget] = useState(0);
  const animationFrame = useRef<number>();
  const isAnimating = useRef(false);

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    if (disabled) return;
    
    const scrollY = window.scrollY;
    const scrollValidation = Validator.validateScrollPosition(scrollY);
    
    if (!scrollValidation.isValid) {
      console.error('Invalid scroll position:', scrollValidation.errors);
      return;
    }

    try {
      setTarget(scrollY * speed);
    } catch (error) {
      console.error('Error updating scroll target:', error);
      debug.log({
        component: 'useParallax',
        props: { speed, easing, disabled },
        state: { error }
      });
    }
  }, [speed, disabled]);

  // Animation loop with error handling
  const animate = useCallback(() => {
    try {
      if (disabled || !isAnimating.current) return;

      const endMeasure = performance.startMeasure('useParallax', 'animation-frame');
      
      const diff = target - offset;
      const newOffset = offset + diff * easing;
      
      setOffset(newOffset);
      animationFrame.current = requestAnimationFrame(animate);
      
      endMeasure();
    } catch (error) {
      console.error('Animation error:', error);
      isAnimating.current = false;
      debug.log({
        component: 'useParallax',
        props: { speed, easing, disabled },
        state: { error }
      });
    }
  }, [target, offset, easing, disabled]);

  // Setup scroll listener
  useEffect(() => {
    if (disabled) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, disabled]);

  // Handle animation
  useEffect(() => {
    if (disabled) return;

    isAnimating.current = true;
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      isAnimating.current = false;
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animate, disabled]);

  // Validate transform
  const transform = `translate3d(0, ${-offset}px, 0)`;
  const transformValidation = Validator.validateTransform(transform);

  if (!transformValidation.isValid) {
    console.error('Transform validation errors:', transformValidation.errors);
    return { transform: 'none' };
  }

  return { transform };
};