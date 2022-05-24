import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: String = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com.br/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  getValor(): number {
    return 1;
  }

  botaoClickado(): void {
    alert('Botão clicado!');
  }
  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any): void {
    this.valorSalvo = valor.value;
  }
  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
