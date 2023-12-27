import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
		items: 1,
		margin: 0,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		]
    }

}