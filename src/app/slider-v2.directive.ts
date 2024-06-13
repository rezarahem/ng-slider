import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  OnInit,
} from '@angular/core';

interface ISlider {
  images: string[];
}

@Directive({
  selector: '[appCarousel]',
  standalone: true,
})
export class SliderV2Directive implements OnInit {
  context: ISlider | null = null;
  index: number = 0;

  constructor(
    private templateRef: TemplateRef<ISlider>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appCarouselFrom') images!: string[];

  public ngOnInit(): void {
    this.context = {
      images: this.images,
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
}
