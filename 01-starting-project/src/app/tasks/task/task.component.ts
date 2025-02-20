import { TasksService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.module';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
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
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
