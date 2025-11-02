import type { DebugInfo } from '@/types';

class Debug {
  private static instance: Debug;
  private isEnabled: boolean = false;
  private logs: DebugInfo[] = [];
  private maxLogs: number = 1000;

  private constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development' || window._DEBUG === true;
  }

  public static getInstance(): Debug {
    if (!Debug.instance) {
      Debug.instance = new Debug();
    }
    return Debug.instance;
  }

  public log(info: Omit<DebugInfo, 'timestamp'>) {
    if (!this.isEnabled) return;

    const debugInfo: DebugInfo = {
      ...info,
      timestamp: Date.now()
    };

    this.logs.push(debugInfo);
    
    // Keep log size manageable
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    console.debug(
      `[${debugInfo.component}]`,
      {
        props: debugInfo.props,
        state: debugInfo.state,
        timestamp: new Date(debugInfo.timestamp).toISOString()
      }
    );
  }

  public getLog(component?: string): DebugInfo[] {
    if (component) {
      return this.logs.filter(log => log.component === component);
    }
    return this.logs;
  }

  public clearLogs(): void {
    this.logs = [];
  }

  public enable(): void {
    this.isEnabled = true;
    window._DEBUG = true;
  }

  public disable(): void {
    this.isEnabled = false;
    window._DEBUG = false;
  }
}

export const debug = Debug.getInstance();

import { useEffect } from 'react';

export function withDebug<T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<T>,
  componentName: string
) {
  return function DebuggedComponent(props: T) {
    useEffect(() => {
      debug.log({
        component: componentName,
        props: props as Record<string, unknown>,
        state: {}
      });
    }, [props]);

    return <WrappedComponent {...props} />;
  };
}