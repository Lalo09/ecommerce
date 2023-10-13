import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public page_title = ""
  items: any[] = [];
  public page:number=0;
  public busqueda:string = "";
  public categoria:string = "";

  constructor(private productoService:ProductoService,
              private route: ActivatedRoute){
    this.page_title = "Todos los productos";
  }
    
  ngOnInit() {
    
    const routeName = this.route.snapshot.routeConfig?.path; 
    console.log('Nombre de la ruta:', routeName);

    if (routeName == 'busqueda/:nombre') {

      this.route.params.subscribe(params => {
        this.busqueda = params['nombre'];
      });
      this.page_title = "Resultados de busqueda: "+this.busqueda;

      this.productoService.getDatasByName(this.busqueda).subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
      });
    
    }
    else if(routeName == 'categoria/:categoria'){

      this.route.params.subscribe(params => {
        this.categoria = params['categoria'];
      });
      this.page_title = "Productos de categoria: "+this.categoria;
      
      this.productoService.getDataByCategory(this.categoria).subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
      });

    } else {
      this.productoService.getData().subscribe((data: any) => {
        this.items = data.productos;
      });
    }
    
  }

}