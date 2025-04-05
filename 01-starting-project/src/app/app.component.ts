import { Component } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { HeaderComponent } from "./components/header/header.component";
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./components/task/task.component";
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId )!
  }
  onSelectUser(id: string) {
    this.selectedUserId = id
}
}
