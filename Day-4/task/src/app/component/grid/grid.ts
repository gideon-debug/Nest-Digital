import { Component } from '@angular/core';
import { Product } from "../../pages/product/product";

@Component({
  selector: 'app-grid',
  imports: [Product],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {}
