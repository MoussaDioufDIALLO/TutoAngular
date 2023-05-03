import { Component } from '@angular/core';
import { ApprenantService } from '../apprenant.service';
import { Apprenant } from '../apprenant';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  nom = 'JS Dev';
  students:any = this.apprenantService.getAll().subscribe(data=>this.students=data);
   
   deleteStudent(student: Apprenant) { 
    this.students = this.students.filter((elt: Apprenant) => (elt !== student));
   }

   addStudent(student: Apprenant) { 
    this.apprenantService.addApprenant(student).subscribe(
      res => {
        console.log(res);
        this.apprenantService.getAll().subscribe(
          data => this.students =data 
        );
      },
      err => console.log(err)

    )
   }

   constructor(private apprenantService: ApprenantService) {}
}
