import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { IRequestSettings } from '../data/from-request';

@Component({
  selector: 'pm-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.css']
})
export class FormRequestComponent implements OnInit {
  public pageTitle = 'Request Form';
  originaliRequest : IRequestSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here is a note.'
};

irequestrSetting : IRequestSettings = { ... this.originaliRequest};

constructor(private dataService:DataService){}

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
console.log('in onSubmit ', form.valid)
this.dataService.postiRequestSettingsForm(this.irequestrSetting).subscribe(
  (  result: any)=> console.log('success: ', result),
  (  error: any) => console.log('error: ', error)
)
  }
}
