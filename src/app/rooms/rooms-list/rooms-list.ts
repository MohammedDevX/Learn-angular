import { IRooms } from './../irooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.copy.push(4);
    this.newCopy.push(4);
    console.log("tab : " + this.tab);
    console.log("copy : " + this.copy);
    console.log("newTab : " + this.newTab);
    console.log("newCopy : " + this.newCopy);
    this.rooms.push(this.newRoom);
  }

  newRoom: IRooms = {
    id: 5,
    totalRooms: 0,
    availableRoom: false,
    bookedRomms: 0
  };

  // N.B : Whene we have a tabe and we affecte the table to other, the other made a reference in
  // the first table, so thats meen both made reference in the same table, so if we made changes
  // in the second table, the first one also going to be affected, so the solution is work
  // with spread operators, the same in objects
  // Ex :
  tab: number[] = [1, 2, 3];
  copy: number[] = this.tab; // Here we just copy the reference of tab
  newTab: number[] = [1, 2, 3];
  newCopy: number[] = [...this.newTab];

  /*
    - changeDetection : The default behavior of angular that in every change detection, he
    check all components even if an element in the comp is not changed, so by adding
    changeDetection, angular check only changed elemnts, but pay attention, if the change
    is maded in the same reference
  */
}
