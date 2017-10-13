import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  // quote = {
  //   quote: null,
  //   author: null,
  // }
  quote = new Quote();
  quotes = []
  items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  onSubmit() {
    console.log(this.quote)
    this.quotes.push(this.quote)
    console.log(this.quotes)
    this.quote = new Quote()
  }

  onSort(arr){
    const newarr = arr.sort(function(a, b) {
      if (a.number < b.number)
      return 1
    })
    return newarr

  }

  constructor() { }

  ngOnInit() {
    console.log(this.onSort(this.quotes))
  }

}
