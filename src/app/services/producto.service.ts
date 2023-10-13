import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {
  private dataUrl = '/assets/data.json'; //Consulta de datos desde json

  constructor(private http: HttpClient) {}

  //Obtener todos los productos
  getData() {
    return this.http.get(this.dataUrl);
  }

  //Obtener productos por id
  getDataById(id: number): Observable<Product | undefined> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((response: any) => {
        if (response && response.productos) {
          const product = response.productos.find((item: any) => item.id === id);
          return product;
        } else {
          return undefined;
        }
      })
    );
  }

  //Obtener productos por categoria
  getDataByCategory(category: string): Observable<Product[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((response: any) => {
        if (response && response.productos) {
          const productsInCategory = response.productos.filter((item: any) => item.categoria === category);
          return productsInCategory;
        } else {
          return [];
        }
      })
    );
  }

  //Obtener productos por nombre
  getDatasByName(name: string): Observable<Product[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((response: any) => {
        if (response && response.productos) {
          const productsByName = response.productos.filter((item: any) => item.nombre.toLowerCase().includes(name.toLowerCase()));
          return productsByName;
        } else {
          return [];
        }
      })
    );
  }
}