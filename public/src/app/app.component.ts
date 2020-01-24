import { HttpService } from './http.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @Input() newCake: any;  
  // @Input() newComment: any;  

  title = 'public';
  constructor(private _http: HttpService){}
  ngOnInit(){
  }
  
}