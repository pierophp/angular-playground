import { Component } from '@angular/core';

export interface Item { name: string };

@Component({
  selector: 'app-typesafety',
  templateUrl: './typesafety.component.html',
  styleUrls: ['./typesafety.component.scss']
})
export class TypesafetyComponent {
  ngAs!: { items: Item[] };
  items: Item[] = [{ name: "John" }, { name: "Mark" }]
}
