import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-alunos-proway';
  listaAluno=[
 {
  nome:'Guilherme',
  curso:'Angular',
   matricula:234,
   email:'gulherme@proway.com',
   status:true,



 },
 {
  nome:'Joao',
  curso:'Angular',
   matricula:235,
   email:'joao@proway.com',
   status:true,



 }

  ]    
  
}


