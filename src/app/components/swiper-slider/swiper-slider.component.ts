import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.scss',
})
export class SwiperSliderComponent implements OnInit {
  @Input({
    required: true,
  })
  images!: string[];

  swiper!: Swiper;

  ngOnInit(): void {
    this.swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      speed: 600,
      loop: true,
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      modules: [Navigation],
    });
  }
}
