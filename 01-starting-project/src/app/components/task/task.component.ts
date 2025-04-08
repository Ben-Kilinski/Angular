import { Component, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { SharedComponent } from "./shared/shared.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SharedComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
