import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
    providedIn: 'root'
})

export class AlunoService {
    getAluno(): Aluno {
        var aluno = new Aluno()
        aluno.RA = 11714686
        aluno.idade = 24
        aluno.nome = "Victor Picinin Veloso Senna"
        return aluno
    }
}