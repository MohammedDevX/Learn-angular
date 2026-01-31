import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component : is a decodator that give the element an behavior in run time, for ex here we said this
// class must be as component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn_angular2');
}
