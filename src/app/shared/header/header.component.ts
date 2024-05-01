import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menuBar') menuResponsive!: ElementRef;
  @ViewChild('btnMenuOpen') btnMenuOpen!: ElementRef;
  @ViewChild('btnMenuClose') btnMenuClose!: ElementRef;
  @ViewChild('enlaces') enlaces!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.btnMenuOpen.nativeElement.addEventListener("click", () => {
      this.menuResponsive.nativeElement.classList.add("active");
    });

    this.btnMenuClose.nativeElement.addEventListener("click", () => {
      this.menuResponsive.nativeElement.classList.remove("active");
    });

    this.enlaces.nativeElement.addEventListener("click", () => {
      setTimeout(() => {
        this.menuResponsive.nativeElement.style.transitionDelay = "0.5s";
        this.menuResponsive.nativeElement.classList.remove("active");
      }, 0);
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //behavio es animaciones (opcional)
  }

}
