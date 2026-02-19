import { RoomsHandler } from './../Services/rooms-handler';
import { Component, Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [RoomsHandler]
})
export class Header {
  title: string = '';

  // Here aangular going to skip the injector of this comp and pass to the next injector, who is parent cop injector
  constructor(@SkipSelf() private handler: RoomsHandler) {
    console.log("New instance header component");
  }
}
