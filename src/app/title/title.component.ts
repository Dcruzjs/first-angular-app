import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  content = "hardcoded"
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(newContent:string):void{
    this.content = newContent
  }
}
