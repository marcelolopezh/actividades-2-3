import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  codigo: string = '';
  nombre: string = '';
  precio: number = 0;
  stock: number = 0;
  correcto: boolean = true;
  codigoError: string = '';
  nombreError: string = '';
  stockError: string = '';
  precioError: string = '';

  productList: Product[] = [];
  errores: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  resetVars() {
    this.codigoError = '';
    this.nombreError = '';
    this.stockError = '';
    this.precioError = '';
  }
  agregarProducto() {
    let temporal: Product = {
      codigo: '',
      nombre: '',
      precio: 0,
      stock: 0,
    };
    this.resetVars();
    this.correcto = true;
    if (this.codigo.length < 5 || this.codigo.length > 10) {
      this.correcto = false;
      this.codigoError =
        'El código debe tener una longitud entre 5 y 10 caracteres';
    } else {
      temporal.codigo = this.codigo;
      console.log(temporal.codigo);
    }
    if (this.nombre.length < 5 || this.nombre.length > 15) {
      this.correcto = false;
      this.nombreError =
        'El nombre debe tener una longitud entre 5 y 15 caracteres';
    } else {
      temporal.nombre = this.nombre;
      console.log(temporal.nombre);
    }
    if (this.stock <= 0) {
      this.correcto = false;
      this.stockError = 'El stock debe ser mayor a 0';
    } else {
      temporal.stock = this.stock;
      console.log(temporal.stock);
    }
    if (this.precio <= 10) {
      this.correcto = false;
      this.precioError = 'El precio debe ser mayor a $10';
    } else {
      temporal.precio = this.precio;
      console.log(temporal.precio);
    }

    if (this.correcto) {
      console.log('correcto', temporal);
      this.productList.push(temporal);
      this.codigo = '';
      this.nombre = '';
      this.precio = 0;
      this.stock = 0;
    }
  }
}
