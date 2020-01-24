import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-petinfo',
  templateUrl: './petinfo.component.html',
  styleUrls: ['./petinfo.component.css']
})
export class PetinfoComponent implements OnInit {
  pet:any;
  clicked:any;
  id:any;
  constructor(  private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService) { }

  ngOnInit() {
    this.getCakeInfo()
    this.clicked=false;
  }
  getCakeInfo(){
    this._route.params.subscribe(params=>{this.id=params.id,console.log(params)});
    let obs=this._http.getOneCake(this.id);
    obs.subscribe((data:any)=>{
      // console.log(data.results);
      this.pet=data.results;
      // console.log(this.pet);
    })
  }
  incQuote(id,quote){
    console.log(quote)
    let obs=this._http.quoteUp(id,quote);
    obs.subscribe((data:any)=>{
      this.getCakeInfo()
      this.clicked=true;
    })
  }
  Delete(id){
    let obs=this._http.deleteACake(id);
    obs.subscribe(data=>{
      console.log(data);
      this._router.navigate['/pets'];
    })
  }

}
