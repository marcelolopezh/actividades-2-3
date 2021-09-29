import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';

  user: User = {
    nombre: '',
    email: '',
    telefono: '',
  };

  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  isEmail(email: string) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  isTelefono(num: string) {
    var regex = /^([0-9]{10})$/;

    return regex.test(num);
  }

  registrar(): void {
    this.registered = false;
    this.errorRegister = false;
    this.errores = [];
    /* Aqui agregar validaciones */
    if (this.nombre.length < 3 || this.nombre == null) {
      console.log('El Nombre debe tener mínimo 4 caracteres');
      // alert('El Nombre debe tener mínimo 4 caracteres');
      this.errores.push('El Nombre debe tener mínimo 4 caracteres');
      this.errorRegister = true;
    }

    if (!this.isEmail(this.email)) {
      console.log('El Correo debe cumplir con un formato válido');
      // alert('El Correo debe cumplir con un formato válido');
      this.errores.push('El Correo debe cumplir con un formato válido');

      this.errorRegister = true;
    }

    if (!this.isTelefono(this.telefono)) {
      console.log('El teléfono');
      // alert('El Correo debe cumplir con un formato válido');
      this.errores.push(
        'El Teléfono debe cumplir con un formato válido ###-###-#### '
      );

      this.errorRegister = true;
    }

    if (!this.errorRegister) {
      this.registered = true;

      this.user = {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
      };
    }
  }
}
