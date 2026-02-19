import { Injectable } from '@angular/core';
import { IRooms } from '../rooms/irooms';

@Injectable({
  // This attribut able angular to injecte only one instance of this service in entire application => singleton
  // pattern
  // If you want to instance multiple instance, add the service in providers attribut in @Component decodator of
  // component
  providedIn: 'root',
})
// This is the injectable service
export class RoomsHandler {
  constructor() {
    console.log("New service instance");
  }

  roomList: IRooms[] = [
    {id:2, totalRooms: 56, availableRoom: false, bookedRomms: 14},
    {id:1, totalRooms: 12, availableRoom: true, bookedRomms: 4},
    {id:3, totalRooms: 40, availableRoom: false, bookedRomms: 30}
  ]

  getRooms(): IRooms[] {
    return this.roomList;
  }
}
