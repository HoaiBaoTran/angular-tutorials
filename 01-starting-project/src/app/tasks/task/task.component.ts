import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.module';
import { CardComponent } from "../../shared/card/card.component";

// type Task = {
//   id: string,
//   userId: string,
//   title: string,
//   summary: string,
//   dueDate: string,
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
