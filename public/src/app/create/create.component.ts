import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newCake:any;
  error:any;
  uniqueerror:any;
  submitted:any;
  
  constructor(private _http: HttpService,    
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newCake= {name:"", type:"",description:"",skills:{skillOne:"",skillTwo:"",skillThree:""}}
    this.submitted=false;
}

  cakeSubmit(cake){
    let obs = this._http.createACake(cake);
    obs.subscribe((data:any) => {
      if(data.message=="success"){
        this._router.navigate(['/pets']);
      }
      else{
        if(data.results.errmsg=`E11000 duplicate key error collection: MeanExamDB.cakes index: name_1 dup key: { name: "${data.results.keyValue.name}" }`){
          this.uniqueerror="name must be unique"
        }
        this.error=data.results;
        this.submitted=true;
        console.log(data.results.keyValue.name)
      }
      console.log(data);
      })
  }
 
}
