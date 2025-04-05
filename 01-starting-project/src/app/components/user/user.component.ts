import { Component, Input, Output, EventEmitter } from '@angular/core';
type User = { id: number; name: string; avatar: string; };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter(); 

  get imagePath() {	
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}  