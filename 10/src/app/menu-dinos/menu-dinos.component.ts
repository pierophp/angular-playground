import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dinos',
  templateUrl: './menu-dinos.component.html',
  styleUrls: ['./menu-dinos.component.scss'],
})
export class MenuDinosComponent implements OnInit {
  @Input() menu: any;

  constructor() {}

  ngOnInit(): void {}
}
