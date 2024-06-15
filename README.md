
# angular x siwper

## نصب پکیج Swiper

برای نصب پکیج Swiper از npm، دستور زیر را در ترمینال اجرا کنید:

```sh
npm i swiper
```

## ایجاد کمپوننت Swiper Slider

۱. ابتدا پوشه `swiper-slider` را در پروژه‌تان ایجاد کنید (اگر وجود ندارد).

۲. فایل‌های موجود در این آدرس را دانود و به پوشه swiper-slider انتقال دهید.
[https://github.com/rezarahem/ng-slider/tree/main/src/app/components/swiper-slider](https://github.com/rezarahem/ng-slider/tree/main/src/app/components/swiper-slider)

## اضافه کردن استایل‌های گلوبال به فایل styles.scss

۱. در ابتدا، فایل `styles.scss` را از مسیر `src/styles.scss` پروژه‌ی خود باز کنید.

۲. استایل‌ مورد نیاز را انپورت کنید.

```styles.scss
@import "./app/components/swiper-slider/swiper-style.scss";
```

// اطمینان حاصل کنید که انپورت از مسیر درست انجام شود

## نحوه استفاده از کامپوننت SwiperSliderComponent در کامپوننت‌های دیگر

```html
<div class="swiper-container">
  <app-swiper-slider [images]="images"></app-swiper-slider>
</div>
```

حتما کامپوننت SwiperSlider را در یک `<div>` با ارتفاع تعیین شده قرار دهید.
<br>
می‌توانید ارتفاع را به شکل px یا % تنظیم کنید.
<br>
کامپوننت SwiperSlider برای نمایش تصاویر به یک آرایه images از آدرسهای تصاویر نیاز دارد.
