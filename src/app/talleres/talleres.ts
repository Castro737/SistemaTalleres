import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TallerService } from '../services/taller';

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './talleres.html'
})
export class TalleresComponent implements OnInit {

  nombre = '';
  descripcion = '';
  fecha = '';
  ubicacion = '';

  talleres: any[] = [];

  constructor(private tallerService: TallerService) {}

  ngOnInit() {
    this.cargarTalleres();
  }

  cargarTalleres() {
    this.tallerService.obtenerTalleres()
      .subscribe(data => {
        this.talleres = data;
      });
  }

  agregarTaller() {
    const nuevo = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      fecha: this.fecha,
      ubicacion: this.ubicacion
    };

    this.tallerService.crearTaller(nuevo)
      .subscribe(() => {
        this.cargarTalleres();
      });

    this.nombre = '';
    this.descripcion = '';
    this.fecha = '';
    this.ubicacion = '';
  }
}