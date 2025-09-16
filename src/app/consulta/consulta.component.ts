import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';


@Component({
  selector: 'app-consulta',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss',
})
export class ConsultaComponent implements OnInit {
  listaClientes: Cliente[] = [];
  displayedColumns: string[] = ["id", "nome", "email", "dataNascimento", "cpf"];

  constructor(private service: ClienteService) {}

  ngOnInit() {
    console.log('Passamos por aqui');
    this.listaClientes = this.service.pesquisarCliente('');
  }

}
