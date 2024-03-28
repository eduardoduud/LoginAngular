import { Injectable } from '@angular/core';

export interface SingleStateObservable {
  reset(): void;
}

export enum SingleStateType {
  FloatElement = 'floatElement'
}

@Injectable({ providedIn: 'root' })
export class SingleStateMediator {
  private static singleStateMap = new Map<
    SingleStateType,
    SingleStateObservable
  >();

  capture(key: SingleStateType, observable: SingleStateObservable): void {
    this.releaseAndReset(key);
    SingleStateMediator.singleStateMap.set(key, observable);
  }

  releaseAndReset(key: SingleStateType): void {
    this.release(key, true);
  }

  release(key: SingleStateType, reset = false): void {
    const existingObservable = SingleStateMediator.singleStateMap.get(key);
    if (existingObservable) {
      if (reset) {
        existingObservable.reset();
      }
      SingleStateMediator.singleStateMap.delete(key);
    }
  }
}
