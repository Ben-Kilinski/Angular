import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 1,
      userId: 'u1',
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false,
      dueDate: '2025-10-01'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      completed: true
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      completed: false
    }
  ]

    get selectedUserTasks() {
      return this.tasks.filter((task) => task.userId === this.userId);
    }
}
