import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typesafety',
  templateUrl: './typesafety.component.html',
  styleUrls: ['./typesafety.component.scss']
})
export class TypesafetyComponent implements OnInit {

  items = [{ name: "John" }, { name: "Mark" }]
  constructor() { }

  ngOnInit(): void {

  }

}
