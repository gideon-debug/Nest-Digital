import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Accordion],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
