import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './component/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('amazon');
}
