import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {


    SkillsList:{


    }

 

  }

userFormGroup: FormGroup;


constructor(public navCtrl: NavController,private FB:FormBuilder) {

  this.userFormGroup = new FormGroup({
  
    name: new FormControl('maria'),
    username: new FormControl('maria23'),
    password: new FormControl('454523'),
    SkillsList: new FormGroup({
      SkillsName: new FormControl('ggg'),
      SkillsLevel: new FormControl('4')
    })
   
  })



  this.userFormGroup= this.FB.group({
  //name
    name:['',[Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]],
      
  //username

    username:['',[Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z]*[0-9]*')
    ]],

    //password
    password:['',[Validators.required,
    Validators.minLength(6)
    ]],


    AddingSkillsList:this.FB.array([
      this.AddSkillsFields()
    ])
  
  })



}

SingUp() {
  console.log(this.user);
}

formSubmit({value,valid}:{value:User,valid:boolean}) {
  console.log(value);
  console.log(valid);
 
}


AddSkillsFields() : FormGroup
{
   return this.FB.group({
   SkillsName : ['',Validators.compose([Validators.required])],
  
   SkillsLevel: ['',Validators.compose([Validators.required])],    
});
}


InputNewField(): void
{
const con = <FormArray>this.userFormGroup.controls.AddingSkillsList;
 con.push(this.AddSkillsFields());
}

RemoveField(x : number) : void
{
const con= <FormArray>this.userFormGroup.controls.AddingSkillsList;
con.removeAt(x);
}
manage(val : any) : void
{
console.dir(val);
}

getSkill(){

this.AddSkillsFields();
this.InputNewField();

}


}
export interface User{

name:string;
username:string;
password:string;

SkillsList:{
  skillsName:string;
  SkillsLevel:number;

}
}