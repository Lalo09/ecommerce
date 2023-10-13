import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  categorias = ['Camisetas','Leggings','Zapatillas','Accesorios','Calzado','Chaquetas','Pantalones Cortos']
  busqueda: string = '';

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {}
  
  navegarACategoria(categoria: string) {
    this.router.navigateByUrl('/categoria', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/categoria', categoria]);
    });
  }

  buscar(valorBusqueda: string) {
    this.router.navigateByUrl('/busqueda', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/busqueda', valorBusqueda]);
    });
  }

}
