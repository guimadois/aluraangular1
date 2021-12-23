import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "../modules/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() onTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){

  }

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitir).subscribe(result => {
      console.log(result);
      this.limparCampos();
    },
    (error) => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
