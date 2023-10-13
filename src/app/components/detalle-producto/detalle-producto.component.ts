import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  productoId: number = 0;
  producto: any;

  constructor(private route: ActivatedRoute,private productoService:ProductoService) {}

  ngOnInit(): void {
    // Obtener el valor del parámetro "id" de la URL
    this.route.params.subscribe(params => {
      this.productoId = +params['id'];
    });

    this.productoService.getDataById(this.productoId).subscribe((data: any) => {
      //console.log("La data es"+data)
      this.producto = data;
      console.log(this.producto);
    });    
  }
}