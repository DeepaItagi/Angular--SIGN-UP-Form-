import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  hide=true;
 

  constructor(
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {    
    this.registerForm = this.formbuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      dateofbirth: ["", Validators.required],
      gender : ["", Validators.required],
      phonenumber : ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["",Validators.required],
      confirmpassword: ["", Validators.required],
      acceptTandC: [false, Validators.requiredTrue],
    });

  }

  onSubmit(){
    if(this.registerForm.invalid)
    {
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Success Signup\n" +JSON.stringify( this.registerForm.value));
  }

  onReset()
  {
    this.registerForm.reset();
  }

  

}
