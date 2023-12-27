import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cyber-defense',
    templateUrl: './cyber-defense.component.html',
    styleUrls: ['./cyber-defense.component.scss']
})
export class CyberDefenseComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}