import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  certificados: { url: string, nombre: string }[] = [
    { url: '../../../assets/img/tecnologo.jpg', nombre: 'ITM' },
    { url: '../../../assets/img/certificado seguridad.jpg', nombre: 'Udemy' },
    { url: '../../../assets/img/certificado-angular.jpg', nombre: 'Udemy' },
    { url: '../../../assets/img/certificado-azure.jpg', nombre: 'Udemy' }
  ];
    
  openModal(imgSrc: string) {
    
    const modal = document.getElementById('modal');
    const imgElement = document.getElementById('img01') as HTMLImageElement | null;

    if (modal && imgElement) {
      modal.style.display = 'block';
      imgElement.src = imgSrc;
    }
  }

  closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
