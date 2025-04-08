import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { SharedComponent } from "../task/shared/shared.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}  