import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-services-style-four',
    templateUrl: './services-style-four.component.html',
    styleUrls: ['./services-style-four.component.scss']
})
export class ServicesStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    saferWorldSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		center: true,
		autoplay: true,
        smartSpeed: 1000,
		stagePadding: 100,
		autoplayHoverPause: true,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 10
			},
			576: {
				items: 2,
				stagePadding: 10
			},
			768: {
				items: 2,
				stagePadding: 10
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
    }

}