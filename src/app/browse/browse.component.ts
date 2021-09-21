import {AfterViewInit, Component, OnInit} from '@angular/core'
import {ActivityIndicator, Page} from "@nativescript/core";
import {timeout} from "rxjs";

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

}
