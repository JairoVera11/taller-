import { Component, OnInit } from '@angular/core';
import { carro } from '../carro';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

	coche: carro ={
		placa:"coso123";
		modelo: "moha2018";
	}

  public carros = [

  { placa: 11, modelo: 'Mr. Nice' },
  { placa: 12, modelo: 'Narco' },
  { placa: 13, modelo: 'Bombasto' },
  { placa: 14, modelo: 'Celeritas' },
  { placa: 15, modelo: 'Magneta' },
  { placa: 16, modelo: 'RubberMan' },
  { placa: 17, modelo: 'Dynama' },
  { placa: 18, modelo: 'Dr IQ' },
  { placa: 19, modelo: 'Magma' },
  { placa: 20, modelo: 'Tornado' }

  ];

  constructor() { 
    
   }

  ngOnInit() {
  }

}
