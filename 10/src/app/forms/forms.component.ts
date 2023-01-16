import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent implements OnInit {
  selectionModeRadio = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.selectionModeRadio.setValue('custom');
  }
}
