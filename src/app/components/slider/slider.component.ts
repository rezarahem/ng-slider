import {
  NgClass,
  NgOptimizedImage,
  NgStyle,
  isPlatformBrowser,
} from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgStyle, NgClass, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input({
    required: true,
  })
  images!: string[];
  @Input() heightInPx!: number;
  @Input() widthInPx!: number;
  @Input() loop = true;
  @Input() loopInterval = 10;

  currentIndex!: number;

  private intervalId: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.currentIndex = this.images.length - 1;

    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.previousSlide();
        // console.log('Interval triggered');
      }, 1000 * this.loopInterval);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // if currentIndex = 3
  // (case) increment => currnetIndex * 100 = 400 =>
  // // 400 is greater than 300 so the slider goes right
  // (case) decrement => currnetIndex * 100 = 200
  // // 200 is smaller than 300 so the slider goes left
  // how this works 👆
  get translationValue() {
    return `translateX(${this.currentIndex * 100}%)`;
  }

  get calHeightValue() {
    if (!this.heightInPx) {
      return '100%';
    } else {
      return `${this.heightInPx}px`;
    }
  }

  get calWidthValue() {
    return `${this.widthInPx}px`;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  previousSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }
}
