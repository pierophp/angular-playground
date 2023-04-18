import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typesafety',
  templateUrl: './typesafety.component.html',
  styleUrls: ['./typesafety.component.scss']
})
export class TypesafetyComponent implements OnInit {

  items = [{ name: "John" }, { name: "Mark" }]
  items$: Observable<{ name: string }[]>;
  constructor() { }

  ngOnInit(): void {
    this.items$ = new Observable<{ name: string }[]>((observer) => {
      observer.next(this.items);
    });
  }

}
