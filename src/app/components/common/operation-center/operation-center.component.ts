import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-operation-center',
    templateUrl: './operation-center.component.html',
    styleUrls: ['./operation-center.component.scss']
})
export class OperationCenterComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}