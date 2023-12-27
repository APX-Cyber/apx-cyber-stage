import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homefive-banner',
    templateUrl: './homefive-banner.component.html',
    styleUrls: ['./homefive-banner.component.scss']
})
export class HomefiveBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
		items: 1,
        margin: 0,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
        smartSpeed: 1000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true
    }

}