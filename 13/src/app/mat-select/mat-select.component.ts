import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFormControl } from '@rxweb/types';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  constructor() { }

  options = [
    { value: 0, label: "Piero", hidden: false },
    { value: 1, label: "Giovanni", hidden: false },
    { value: 2, label: "Giuseppe", hidden: false },
    { value: 3, label: "Antonio", hidden: false },
    { value: 4, label: "Luigi", hidden: false },
  ]

  toolbarSelectControl: IFormControl<number> = new FormControl({ value: '', disabled: false });

  ngOnInit(): void {
    this.toolbarSelectControl.setValue(1);
  }


  getRandomNumber = () => Math.floor(Math.random() * 5);

  change() {
    this.toolbarSelectControl.setValue(this.getRandomNumber());
  }

}
