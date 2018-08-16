import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivev-reg-form',
  templateUrl: './reactivev-reg-form.component.html',
  styleUrls: ['./reactivev-reg-form.component.css']
})
export class ReactivevRegFormComponent implements OnInit {
  rform:FormGroup;
  qualification:string[]=['BE','ME','Bsc','MTech','Bca'];
  locations:string[]=['Bangalore','Mysore','Hydrabad','Delhi','Kochin'];
  hobbies:string[]=['Playing Cricket','reading Novel','Art collecting','Stamp collecting'];
  constructor() {
    this.rform = new FormGroup({
      'name':new FormControl('',[Validators.minLength(3),Validators.maxLength(10)]),
      'age':new FormControl(),
      // 'email':new FormControl(),
      // 'Qualification':new FormControl(),
      // 'hobbies':new FormControl(),
      // 'location':new FormControl(),
      // 'description':new FormControl(),
    });
   }

   ngOnInit() {
  }

  
  

  save(formOb){
    console.log(formOb);
  }
}
