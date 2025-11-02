type PerformanceMetric = {
  component: string;
  operation: string;
  duration: number;
  timestamp: number;
};

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private isEnabled: boolean = false;

  private constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startMeasure(component: string, operation: string): () => void {
    if (!this.isEnabled) return () => {};

    const start = window.performance.now();
    
    return () => {
      const duration = window.performance.now() - start;
      this.metrics.push({
        component,
        operation,
        duration,
        timestamp: Date.now()
      });

      // Log slow operations
      if (duration > 16.67) { // More than one frame (60fps)
        console.warn(
          `Slow operation detected: ${component} - ${operation} took ${duration.toFixed(2)}ms`
        );
      }
    };
  }

  public getMetrics(component?: string): PerformanceMetric[] {
    if (component) {
      return this.metrics.filter(metric => metric.component === component);
    }
    return this.metrics;
  }

  public getAverageMetrics(): Record<string, number> {
    const averages: Record<string, { total: number; count: number }> = {};

    this.metrics.forEach(metric => {
      const key = `${metric.component}-${metric.operation}`;
      if (!averages[key]) {
        averages[key] = { total: 0, count: 0 };
      }
      averages[key].total += metric.duration;
      averages[key].count += 1;
    });

    return Object.entries(averages).reduce((acc, [key, { total, count }]) => {
      acc[key] = total / count;
      return acc;
    }, {} as Record<string, number>);
  }

  public clearMetrics(): void {
    this.metrics = [];
  }
}

export const performance = PerformanceMonitor.getInstance();