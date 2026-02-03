import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRooms } from '../irooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rooms } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
})
export class RoomsList {
  /*
    Binding data from component to other :
    - @Input
    - @Output
  */

  // @Input :
  // The @Input decorator bind data from mother comp to shild one, in this exemple :
  // we have a list of rooms who can be used in defferents pages, so automaticly you are going
  // to think about use this list as reutilisable component, but the probleme is hwo we can bind
  // data from the comp to this comp ?
  // The solution is using @Input so we create the used object and we call the selector of this
  // comp in the targeted comp and we pass the name of this object : see the rooms comp
  @Input()
  rooms: IRooms[] = [];

  // @Output :
  // The @output decorator bind data from shild comp to mother one, in this exemple :
  // we have the list of rooms and against each room we have a button that call selectedRoom function
  // in each click event that send the room object to the mother comp
  @Output()
  selected = new EventEmitter<IRooms>(); // This ang class have an emit() method that send data
  // from shild to mother comp

  selectedRoom(room: IRooms) {
    this.selected.emit(room); // Here we send the data
  }

}
