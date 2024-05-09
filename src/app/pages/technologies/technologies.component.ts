import { Component, OnInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  
  screenWidth: number = 0;
  intervalo: any;
  startAutoScroll!: () => void;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;

      const slider = this.elementRef.nativeElement.querySelector(".slider");
      const slideWidth = slider.offsetWidth;
      let canScroll = true;

      setTimeout(() => {
        this.startAutoScroll();
      }, 1000);

      const enableScroll = () => {
        canScroll = true;
      };

      const scrollLeft = () => {
        if (canScroll) {
          if (slider.scrollLeft === 0) {
            slider.scrollTo({ left: slider.scrollWidth, behavior: 'instant' });
          } else {
            slider.scrollLeft -= slideWidth * 1;
          }
          canScroll = false;
          const delay = (this.screenWidth > 800) ? 800 : 500;
          setTimeout(enableScroll, delay);
          this.resetAutoScrollTimer();
        }
      };
      
      const scrollRight = () => {
        if (canScroll) {
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'instant' });
          } else {
            slider.scrollLeft += slideWidth * 1;
          }
          canScroll = false;
          const delay = (this.screenWidth > 800) ? 800 : 500;
          setTimeout(enableScroll, delay);
          this.resetAutoScrollTimer();
        }
      };
      
      const startAutoScroll = () => {
        this.intervalo = setInterval(() => {
          scrollRight();
        }, 5000);
      };

      const resetAutoScrollTimer = () => {
        clearInterval(this.intervalo);
        startAutoScroll();
      };

      this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
        clearInterval(this.intervalo);
      });

      this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
        startAutoScroll();
      });

      this.renderer.listen(this.elementRef.nativeElement.querySelector("#btnizquierda"), 'click', () => {
        scrollLeft();
        this.resetAutoScrollTimer();
      });

      this.renderer.listen(this.elementRef.nativeElement.querySelector("#btnderecha"), 'click', () => {
        scrollRight();
        this.resetAutoScrollTimer();
      });

      this.startAutoScroll = startAutoScroll;
    }
  }

  resetAutoScrollTimer() {
    clearInterval(this.intervalo);
    this.startAutoScroll();
  }
}
