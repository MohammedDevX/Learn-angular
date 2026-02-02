import { Component } from '@angular/core';
import { IRooms } from './irooms';
import { CommonModule } from '@angular/common';
import { RoomsList } from './rooms-list/rooms-list';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {
  // If you want to display this variable in the html, you must work with (interpolation), see the html file
  hotelName:string = "Saada";

  // There is also property binding : bind some data from class to html properties like name, innerHtml, src etc ...
  roomsNumber: number = 10;
  defaultValue: string = "Default";

  // Create events :
  availableRoom:boolean = false;
  // Here we create the a function, it will be called every time the user click on the button and change the value
  // of availableRoom
  toggleAvailableRoom(this: any):void {
    this.availableRoom = !this.availableRoom;
    this.rooms.availableRoom = !this.rooms.availableRoom;
  }

  // Structured directives : are methodes to change the behavior of the dom, for ex if the var is false hide the
  // element defenitifly from the DOM, we have 3 methodes => *NgIf for conditions, *NgFor for loops
  // N.B : In the last version ng we have new syntax @if, @for
  rooms: IRooms = {
    id: 1,
    totalRooms: 20,
    availableRoom: true,
    bookedRomms: 5
  }

  roomList: IRooms[] = [
    {id:1, totalRooms: 12, availableRoom: true, bookedRomms: 4},
    {id:2, totalRooms: 56, availableRoom: false, bookedRomms: 14},
    {id:3, totalRooms: 40, availableRoom: false, bookedRomms: 30}
  ]

  role: string = "client";

  // Pipes : methodes to transforme the objects
}
