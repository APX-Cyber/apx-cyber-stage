import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-our-approach',
    templateUrl: './our-approach.component.html',
    styleUrls: ['./our-approach.component.scss']
})
export class OurApproachComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    approachSlides: OwlOptions = {
        items: 1,
		nav: false,
		margin: 25,
		dots: true,
		loop: true,
		autoplay: true,
        smartSpeed: 1000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		]
    }

}