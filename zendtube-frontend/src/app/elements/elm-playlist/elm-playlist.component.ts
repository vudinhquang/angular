import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zvn-elm-playlist',
  templateUrl: './elm-playlist.component.html',
})
export class ElmPlaylistComponent implements OnInit {
  @Input('title') title: string;
  constructor() {
  }
  ngOnInit() {
  }
}
