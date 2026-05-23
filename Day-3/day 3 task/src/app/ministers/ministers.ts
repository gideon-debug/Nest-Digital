import { Component } from '@angular/core';
import { Card } from "../component/card/card";
import { ministersData } from '../ministerData';

@Component({
  selector: 'app-ministers',
  imports: [Card],
  templateUrl: './ministers.html',
  styleUrl: './ministers.css',
})
export class Ministers {
  items = ministersData;
}
