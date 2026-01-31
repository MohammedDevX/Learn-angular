import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';

// @Component : is a decodator that give the element an behavior in run time, for ex here we said this
// class must be as component, like annotations in .net
@Component({
  // This object is a meta data : meta data is a data that describe the structrel behavior of the element
  // for ex this class going to be displayed in app-root by adding selector
  // An exemple of metadata => file is the element and type, size, name are meta data of the file
  selector: 'app-root',
  imports: [RouterOutlet, Rooms], // Here we can import other components by add theme in this imports array
  templateUrl: './app.html', // This is the used html in this component
  styleUrl: './app.css' // This is the used css in this component
  // N.B : This method is used when we are working with standalone comp, but if you want to work with
  // ngModule the process is different
  // First you have a module class that contain components classes, and in the metadata you can
  // mension components that other modules can use, after that for ex dashboard-module call
  // user-module and use components in this module
})
export class App {
  protected readonly title = signal('learn_angular2');
}
