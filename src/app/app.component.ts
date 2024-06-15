import {
  Component,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  OnDestroy,
  OnInit,
  effect,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderDirective } from './slider.directive';
import { SliderComponent } from './components/slider/slider.component';
import { SliderV2Directive } from './slider-v2.directive';
import { SwiperSliderComponent } from './components/swiper-slider/swiper-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SliderDirective,
    SliderComponent,
    SliderV2Directive,
    SwiperSliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  images = [
    'https://www.usnews.com/dims4/USNEWS/fe07e13/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F73%2F3c%2Ff3e29de34bc5aff570b53a9b540c%2F28-2023-acura-integra.jpg',
    'https://fuelcarmagazine.com/wp-content/uploads/2023/04/Ford-Mustang-Raptor-rumor.jpg',
    'https://www.usnews.com/dims4/USNEWS/fe07e13/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F73%2F3c%2Ff3e29de34bc5aff570b53a9b540c%2F28-2023-acura-integra.jpg',
    'https://yenikoymotors.com/uploads/2023/4/66b3635-2023-04-03-152626.jpg',
    'https://fuelcarmagazine.com/wp-content/uploads/2023/04/Ford-Mustang-Raptor-rumor.jpg',
  ];
}
