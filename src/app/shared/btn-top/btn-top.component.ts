import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-btn-top',
  templateUrl: './btn-top.component.html',
  styleUrl: './btn-top.component.css'
})
export class BtnTopComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const btnTop = document.getElementById("btn-top");
    if (btnTop) {
      if (window.pageYOffset > 100) { //si el scroll bajo a 100
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //behavio es animaciones (opcional)
  }
}
