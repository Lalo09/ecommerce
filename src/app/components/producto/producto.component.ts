import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() nombre: any;
  @Input() precio: any;
  @Input() id: any;
  @Input() imagen: any;

  constructor() {

  }
}
