import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Accordion } from "../accordion/accordion";
import { About } from "../about/about";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
