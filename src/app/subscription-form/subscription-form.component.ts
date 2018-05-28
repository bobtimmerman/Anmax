import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  subscribeForm: FormGroup;
   // forbiddenNames = ['john doe', 'Jezus Christ'];

  constructor() { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.subscribeForm);
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
   // if (this.forbiddenNames.indexOf(control.value) !== -1) {
   //   return {'nameIsForbidden': true};
   // }
   // return null;

}
