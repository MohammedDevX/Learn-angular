import { IRooms } from './../irooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  // to think about use this list as reutilisable component, but the probleme is how we can bind
  // data from mother comp to this comp ?
  // The solution is using @Input so we create the used object and we call the selector of this
  // comp in the targeted comp and we pass the name of this object : see the rooms comp
  @Input()
  rooms: IRooms[] = [];

  @Input()
  hotelName!: string;

  // @Output :
  // The @output decorator bind data from shild comp to mother one, in this exemple :
  // we have the list of rooms and against each room we have a button that call selectedRoom function
  // in each click event that send the room object to the mother comp
  @Output()
  selected = new EventEmitter<IRooms>(); // This ang class have an emit() method that send data
  // from shild to mother comp

  selectedRoom(room: IRooms) {
    this.selected.emit(room); // Here we send the data
    // this.copy.push(4);
    // this.newCopy.push(4);
    // console.log("tab : " + this.tab);
    // console.log("copy : " + this.copy);
    // console.log("newTab : " + this.newTab);
    // console.log("newCopy : " + this.newCopy);
    // this.rooms.push(this.newRoom);
  }

  newRoom: IRooms = {
    id: 5,
    totalRooms: 0,
    availableRoom: false,
    bookedRomms: 0
  };

  // N.B : Whene we have a table and we affect the table to other, the other made a reference on
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
    check all components even if nothing in other comps is not changed, so by adding
    changeDetection in mode onPush, angular check only comp that undergoes change, but pay attention,
    if the change is maded in the same reference, you must use spread operators.
    -- Exemple :
    For ex we have an event in parent comp that push a room in roomList object, but we push on the same reference
    in this case child comp not going to detecte the change because its made on parent comp,
    but we have @Input ? even if @Input going to receive the new element but because we made the change only
    with ref, so the changeDetection not going to detecte the changement, so the solution is work wiht
    spread operators
    N.B : If the click event was in child comp the change going to be detected even if you work with
    reference because, the event is detected
  */

  // ngOnChanges si declared by default the first time the comp is rendered before constructor, after that every
  // time @Input undergoes a change
  ngOnChanges(changes: SimpleChanges) {
    // SimpleChanges is an object who contain one or multiple SimpleChange objects, eache one hase 3
    // properties :
    // - currentValue
    // - previousValue
    // - firstChange
    console.log(changes);
    console.log(changes["rooms"].currentValue[0]); // This is how you can access to
    // console.log(changes["hotelName"].currentValue);
  }

  // This method is called each time there is an event in mother or shild comp
  ngDoCheck() {
    console.log("checked ");
  }
}
