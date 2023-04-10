import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { IFormControl } from '@rxweb/types';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {
  @ViewChild(MatSelect) toolbarMatSelect: MatSelect;

  constructor() { }

  options = [
    { value: 0, label: "Piero", hidden: false },
    { value: 1, label: "Giovanni", hidden: false },
    { value: 2, label: "Giuseppe", hidden: false },
    { value: 3, label: "Antonio", hidden: false },
    { value: 4, label: "Luigi", hidden: false },
  ]

  toolbarSelectControl: IFormControl<number>;

  ngOnInit(): void {
    this.toolbarSelectControl = new FormControl({ value: '', disabled: false });
    this.toolbarSelectControl.setValue(1);
  }


  getRandomNumber = () => Math.floor(Math.random() * 5);

  change() {
    // this.toolbarSelectControl.setValue(this.getRandomNumber());
    this.toolbarMatSelect.writeValue(this.getRandomNumber())
  }

}
