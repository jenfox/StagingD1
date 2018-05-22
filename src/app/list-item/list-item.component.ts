import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./^_@.css']
})

export class ListItemComponent implements OnInit {

    @Input() name: string;

    constructor() { }

    ngOnInit() {}
}
