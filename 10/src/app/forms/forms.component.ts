import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';

export class MyForm {
  name: string;
  presentationType: boolean;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent implements OnInit {
  selectionModeRadio = new FormControl();
  form: IFormGroup<MyForm>;
  fb: IFormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  ngOnInit(): void {
    this.selectionModeRadio.setValue('custom');
    this.form = this.fb.group<MyForm>({
      name: ['John', Validators.required],
      presentationType: [true, Validators.required],
    });

    console.log(this.form);
  }

  save(): void {
    console.log('save');
  }
}
