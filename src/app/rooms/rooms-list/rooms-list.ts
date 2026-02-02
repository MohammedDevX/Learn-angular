import { Component, Input } from '@angular/core';
import { IRooms } from '../irooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
})
export class RoomsList {
  // Binding data from component to other :
  // The @Input decorator bind data from comp to other, in this exemple :
  // we have a list of rooms who can be used in defferents pages, so automaticly you are going
  // to think about use this list as reutilisable component, but the probleme is hwo we can bind
  // data from the comp to this comp ?
  // The solution is using @Input so we create the used object and we call the selector of this
  // comp in the targeted comp and we pass the name of this object : see the rooms comp

  @Input()
  rooms: IRooms[] = [];
}
