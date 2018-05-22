import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Array<string> = new Array<string>();
  personName: string;

  constructor() {
    this.list.push('John T');
    this.list.push('George Dubya');
    this.list.push('Barrak Obama');
    this.list.push('Donald Tee');
    this.list.push('Tee Swizzy');
    this.list.push('JR');
    this.list.push('Matt the Warlock');
    this.list.push('Cousin Brother Seth');
    this.list.push('Johnny Whip');
    this.list.push('Next Jen');
    this.list.push('Nicole the Meat Eater');
    this.list.push('Thanks Kevin');
    this.list.push('Big Bang Gabe');
    this.list.push('Trevor SQKWAAdmate');
    this.list.push('Just[n]');
    this.list.push('I ran out of ideas');
  }

  ngOnInit() {
  }

  onAddName() {
    this.list.push(this.personName);
    this.personName = '';
  }


  // lifecycle hooks - 8 exist
  // OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewInit

}
