import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
@Input() student :any; 
@Output()studentToDelete:EventEmitter<any> = new EventEmitter(); 
handleDelete(){this.studentToDelete.emit();}

}
