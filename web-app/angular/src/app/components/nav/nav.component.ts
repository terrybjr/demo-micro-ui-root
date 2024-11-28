import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {initFlowbite} from 'flowbite';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  devUrl?: string;
  constructor() { }

  ngOnInit(): void {
    if(environment.production) {
      this.devUrl = 'https://' + environment.brianTheDeveloperLink
    } else {
      this.devUrl = 'http://' + environment.brianTheDeveloperLink;
    }
    initFlowbite();
  }

}
