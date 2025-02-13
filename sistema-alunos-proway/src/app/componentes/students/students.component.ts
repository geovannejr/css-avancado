import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

@Input[]
aluno:any=[];



   
}
