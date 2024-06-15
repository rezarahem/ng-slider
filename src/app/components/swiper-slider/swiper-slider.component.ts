import {
  Component,
  // CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [NgClass],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
      speed: 300,
      spaceBetween: 5,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules: [Navigation, Pagination],
    });
  }
}
