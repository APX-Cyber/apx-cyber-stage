import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-services-style-three',
    templateUrl: './services-style-three.component.html',
    styleUrls: ['./services-style-three.component.scss']
})
export class ServicesStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    servicesSlides: OwlOptions = {
		nav: false,
		margin: 25,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
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