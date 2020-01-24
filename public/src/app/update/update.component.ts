import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  newCake:any;
  id:any;
  error:any;
  submitted:any;
  constructor(private _http:HttpService,private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.getCakeInfo()
    this.submitted=false;
  }
  cakeSubmit(author){
    let obs=this._http.updateCake(this.id,author);
    obs.subscribe((data:any)=>{
      if(data.message=="success"){
        this._router.navigate(['/pets']);
      }
      else{
        this.error=data.results
        this.submitted=true;
      }
  });
  }
  getCakeInfo(){
    this._route.params.subscribe(params=>{this.id=params.id,console.log(params)});
    let obs=this._http.getOneCake(this.id);
    obs.subscribe((data:any)=>{
      this.newCake=data.results;
    })


  }



}