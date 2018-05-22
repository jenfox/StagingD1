import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./^_@.css']
})

export class ListItemComponent implements OnInit {

    @Input() name: string;

    crossedOut = true;

    constructor() {
        this.crossedOut = Math.floor((Math.random() * 2)) === 0;
    }

    ngOnInit() {}

    toggle() {
        this.crossedOut = !this.crossedOut;
    }
}
