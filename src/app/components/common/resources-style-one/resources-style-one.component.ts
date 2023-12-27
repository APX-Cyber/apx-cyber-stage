import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-resources-style-one',
    templateUrl: './resources-style-one.component.html',
    styleUrls: ['./resources-style-one.component.scss']
})
export class ResourcesStyleOneComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}