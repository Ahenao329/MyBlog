import { Component } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
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
