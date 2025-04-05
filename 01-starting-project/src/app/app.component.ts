import { Component } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { HeaderComponent } from "./components/header/header.component";
import { DUMMY_USERS } from '../dummy-users';
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
  selectedUserId: string | undefined;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId )!
  }
  onSelectUser(id: string) {
    this.selectedUserId = id
}
}
