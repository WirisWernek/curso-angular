import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: String = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com.br/400/200/nature/';
  constructor() {}

  ngOnInit(): void {}

  getValor(): number {
    return 1;
  }
}
