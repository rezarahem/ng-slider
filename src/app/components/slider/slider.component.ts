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

    if (isPlatformBrowser(this.platformId) && this.loop) {
      this.intervalId = setInterval(() => {
        this.previousSlide();
      }, 1000 * this.loopInterval);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

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
