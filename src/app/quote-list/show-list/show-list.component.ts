import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input() quotes;
  constructor() { }

  ngOnInit() {
    console.log(this.quotes.sort())
  }

}
