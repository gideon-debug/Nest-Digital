import { Component } from '@angular/core';
import { Carousel } from '../../component/carousel/carousel';
import { Accordion } from '../../component/accordion/accordion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
