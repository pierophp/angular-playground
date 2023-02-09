import { Component, OnInit } from '@angular/core';
import { IGridCreatedEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor() {}

  public localData: any[] = [
    {
      Name: 'Piero',
      LastName: 'Giusti',
      Age: 33,
      // childRows: [
      //   {
      //     Name: 'Luca',
      //     LastName: 'Giusti',
      //     Age: 3,
      //   },
      // ],
    },
    {
      Name: 'Joseph',
      LastName: 'Silva',
      Age: 47,
      childRows: [],
    },
  ];

  ngOnInit(): void {}

  onGridCreated(e: IGridCreatedEventArgs) {
    e.grid.isLoading = true;
    e.grid.data = [
      {
        Name: 'Luca',
        LastName: 'Giusti',
        Age: 3,
      },
    ];
    e.grid.cdr.detectChanges();
    e.grid.isLoading = false;
  }
}
