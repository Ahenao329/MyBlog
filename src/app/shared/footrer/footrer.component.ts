import { Component } from '@angular/core';

@Component({
  selector: 'app-footrer',
  templateUrl: './footrer.component.html',
  styleUrls: ['./footrer.component.css']
})
export class FootrerComponent {

  anio: number = new Date().getFullYear();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
