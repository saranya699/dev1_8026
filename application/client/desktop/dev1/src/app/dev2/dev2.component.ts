import { Component, OnInit } from '@angular/core';
import { Dev2Service } from './dev2.service';

@Component({
  selector: 'app-dev2',
  templateUrl: './dev2.component.html',
  styleUrls: ['./dev2.component.scss'],
})

export class Dev2Component implements OnInit {

    constructor (
        private dev2Service: Dev2Service,
    ) { }

    ngOnInit() {
    }
}