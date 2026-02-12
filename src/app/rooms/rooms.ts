import { Component, ContentChild, ViewChild, ViewContainerRef } from '@angular/core';
import { IRooms } from './irooms';
import { CommonModule } from '@angular/common';
import { RoomsList } from './rooms-list/rooms-list';
import { Header } from '../header/header';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsList, Header],
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
  // Here we create a function, it will be called every time the user click on the button and change the value
  // of availableRoom
  toggleAvailableRoom():void {
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
    {id:2, totalRooms: 56, availableRoom: false, bookedRomms: 14},
    {id:1, totalRooms: 12, availableRoom: true, bookedRomms: 4},
    {id:3, totalRooms: 40, availableRoom: false, bookedRomms: 30}
  ]

  role: string = "client";

  // Pipes : methodes to transforme the objects, see the template page

  // Here this function get the room object from shild comp called every time the child comp emit a data
  onSelectRoom(room: IRooms) { // The param here get the data from child comp
    console.log("The room is : ", room);
    this.selectedRoom = room;
  }

  // This is is the method that is called after constructor and before rendering the comp
  ngOnInit(): void {
    // console.log("init value");
    // this.increase();
    // console.log(this.header);
  }

  selectedRoom!: IRooms; // N.B : Whene you want to initialize an attribut you must to pass
  // explicitly the default value, or use the (?) mark that say the attr can be null
  // or use the (!) mark that say we are going to affect a value to the attr before run time

  // How to create an anonymous object :
  // 1) Weak type :
  ob = {id: 1, nom: "mohammed"};

  // 2) Strong type :
  ob2: {id: number, nom: string} = {
    id: 1,
    nom: "mohammed"
  };

  // Using inteface or class :
  ob3: IRooms = {id: 1, totalRooms: 12, availableRoom: false, bookedRomms: 2};

  /*
    Component life cycle : stages a component goes through from building to destruction
    - Constructor : The one who define how the object is building
    - ngOnInit() : In this stage we define what the comp should have before rendering the comp
    - ngOnChanges() : This fucntion is authorized only in comps that have @Input
    N.B : ngOnChanges is called before ngOnInit, after that its called every time there is a change
    - ngDoCheck() : This method is called each time there is an event in mother or shild comp
    N.B : In the most cases we dont use it
    N.B : Never implement ngOnChanges and ngDoCheck in the same comp
    - @ViewChild, @ViewChildren, ngAfterViewInit() and ngAfterViewChecked() :
      -- @ViewChild => Access to internal template of mother comp
      -- @ViewChildren => Like @ViewChild, but this one can access to multiple inctances by QueryList
      -- ngAfterViewInit() => We have ngOnInit stage came before rendering the view so if we display the
        instanciated object in this stage, the value of object is undefined, so that why we have
        ngAfterViewInit() stage, called after rendering the view, so in this stage we can handl te object
      - ngAfterViewChecked() : Like the previous one, but this is called in every detected event
    - @ContentChild and ngAfterContentInit() :
      -- @ContentChild: Access to ng-content children comps
      - ngAfterContentInit() : Function called after rendering the content
    - @ngOnDestroy() : Called before the destruction of component
  */

    // ChangeDetection.onPush exemple :
    click(): void {
      this.roomList = [...this.roomList]; // Here if we dont change the reference with spread operator, the
      // change not going to be detected in child comp
      this.roomList.push(this.rooms);
      // Or
      // this.roomList = [...this.roomList, this.rooms];
      console.log(this.roomList);
    }

    // ViewChild() : Can access to other comp instance, by adding the selector of child comp in mother one, and
    // access to that instanc by @ViewChild
    // N.B : He have an other use case whene we want to diplay the child comp after spesefic behavior, we add
    // an ng-template with a reference for ex #header, and in @ViewChild we get the template and add
    // read: ViewContainerRef, its a container who can insert and remove an comp or html attribut and work
    // with it in the template, see exemple in app.ts
    @ViewChild(Header/*, {static: true}*/) header!: Header; // If we made this option : {static: true}, the object
    // is ready to be used in ngOnInit, by default its false

    ngAfterViewInit() {
      this.header.title = "Saada";
      // console.log(this.header);
    }

    ngAfterViewChecked() {
      // this.header.title = "Saada";
      // console.log(this.header)
    }
  }
