import { Component, ElementRef, signal, ViewChild, ViewContainerRef } from '@angular/core';
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

  // ViewContainerRef: an Angular container used to dynamically insert or remove views (ng-template) or components
  // In this example, we have an ng-template in the HTML with the reference #user. This template contains HTML
  // (and can include components like Rooms), but it is NOT displayed automatically
  // ng-template: an HTML template that is not rendered by default It is rendered only when Angular
  // is instructed to do
  // N.B : ng-template defines WHAT to render ViewContainerRef defines WHERE and WHEN to render
  @ViewChild("user", {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    let instRef = this.vcr.createComponent(Rooms); //Here we insert Rooms comp to the container
    let ob = instRef.instance;
    console.log(ob.hotelName);
  }

  // In this exemple we access to an element html by reference #name, and we add innerText to this element
  @ViewChild('name', {static: true}) name!: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hello from view child";
  }
}
