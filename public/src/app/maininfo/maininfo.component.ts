import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-maininfo',
  templateUrl: './maininfo.component.html',
  styleUrls: ['./maininfo.component.css']
})
export class MaininfoComponent implements OnInit {

  pets:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService) { }

  ngOnInit() {
    this.startup();
  }
  goAdd() {
    this._router.navigate['/pets/new']
  }
  startup(){
    let obs=this._http.getCakes();
    obs.subscribe((data:any)=>{
      this.pets=data.results;
    });
  }
  

}
