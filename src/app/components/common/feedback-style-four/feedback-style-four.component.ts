import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-four',
    templateUrl: './feedback-style-four.component.html',
    styleUrls: ['./feedback-style-four.component.scss']
})
export class FeedbackStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		margin: 25,
		autoplay: true,
        smartSpeed: 1000,
		autoplayHoverPause: true
    }

}