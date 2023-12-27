import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homesix-banner',
    templateUrl: './homesix-banner.component.html',
    styleUrls: ['./homesix-banner.component.scss']
})
export class HomesixBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
		items: 1,
        margin: 0,
		loop: true,
		nav: true,
		dots: false,
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