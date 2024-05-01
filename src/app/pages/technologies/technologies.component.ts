import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements AfterViewInit {
  @ViewChild('slider') contenedor!: ElementRef;
  @ViewChild('btnizquierda') btnIzquierdo!: ElementRef;
  @ViewChild('btnderecha') btnDerecho!: ElementRef;
  
  ngAfterViewInit(): void {
    // Iniciar el intervalo para cambiar las imágenes cada 15 segundos
    // this.iniciarIntervalo();

    // Detener el intervalo cuando el mouse entra al área del slider
    this.contenedor.nativeElement.addEventListener('mouseenter', () => {
      clearInterval(this.intervalo);
    });

    // Reanudar el intervalo cuando el mouse sale del área del slider
    this.contenedor.nativeElement.addEventListener('mouseleave', () => {
      this.iniciarIntervalo();
    });

    // EVENTO PARA EL BOTON DERECHO
    this.btnDerecho.nativeElement.addEventListener("click", () => {
      this.scrollRight();
    });

    // EVENTO PARA EL BOTON IZQUIERDO
    this.btnIzquierdo.nativeElement.addEventListener("click", () => {
      this.scrollLeft();
    });
  }

  intervalo: any; // Variable para almacenar el intervalo

  iniciarIntervalo() {
    this.intervalo = setInterval(() => {
      this.scrollRight();
    }, 5000); // 3 segundos
  }

  scrollRight() {
    if (this.contenedor.nativeElement instanceof HTMLElement) {
      const scrollWidth = this.contenedor.nativeElement.scrollWidth;
      const scrollLeft = this.contenedor.nativeElement.scrollLeft;
      const clientWidth = this.contenedor.nativeElement.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const scrollAmount = clientWidth; // Cantidad a desplazar
  
      if (scrollLeft >= maxScrollLeft) {
        // Si hemos llegado al final, volvemos al inicio
        this.contenedor.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
                this.contenedor.nativeElement.scrollLeft += scrollAmount;

      } else {
        // Si no hemos llegado al final, desplazamos a la siguiente posición
        this.contenedor.nativeElement.scrollLeft += scrollAmount;
      }
    }
  }

  scrollLeft() {
    if (this.contenedor.nativeElement instanceof HTMLElement) {
      this.contenedor.nativeElement.scrollLeft -= this.contenedor.nativeElement.clientWidth;
    }
  }
}
