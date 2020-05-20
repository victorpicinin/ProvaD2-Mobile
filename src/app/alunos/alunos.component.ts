import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = new Aluno()

  constructor(private service:AlunoService) { }

  ngOnInit(): void {
    this.aluno = this.service.getAluno()
  }

}
