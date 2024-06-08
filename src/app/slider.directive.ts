import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';

@Directive({
  standalone: true,
  selector: '[images-slider-directive]',
})
export class SliderDirective implements OnInit {
  @Input('images-slider-directive') imagesFromDirective!: string[];
  @Input() heightInPx!: number;
  @Input() widthInPx!: number;
  @Input() loop = true;
  @Input() loopInterval = 10;

  private componentRef!: ComponentRef<SliderComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(SliderComponent);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.images = this.imagesFromDirective;
    this.componentRef.instance.heightInPx = this.heightInPx;
    this.componentRef.instance.widthInPx = this.widthInPx;
    this.componentRef.instance.loop = this.loop;
    this.componentRef.instance.loopInterval = this.loopInterval;

    this.renderer.removeChild(
      this.renderer.parentNode(this.el.nativeElement),
      this.el.nativeElement
    );
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
