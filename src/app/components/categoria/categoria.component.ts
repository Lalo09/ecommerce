import { Component } from '@angular/core';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
    public page_title = ""

    constructor(){
      this.page_title = "Categoria de"
    }
    
}
