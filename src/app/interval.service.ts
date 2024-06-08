import { Injectable, Inject, PLATFORM_ID, Signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntervalService {
  private intervalId: any;
  private _intervalSignal: BehaviorSubject<number> = new BehaviorSubject(0);
  intervalSignal$ = this._intervalSignal.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  startInterval(interval: number): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        const currentValue = this._intervalSignal.value;
        this._intervalSignal.next(currentValue + 1);
      }, interval);
    }
  }

  stopInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
