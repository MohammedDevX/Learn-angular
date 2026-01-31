import { Component } from '@angular/core';
import { IRooms } from './irooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
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
  public rooms: IRooms = {
    totalRooms: 20,
    availableRoom: true,
    bookedRomms: 5
  }
}
