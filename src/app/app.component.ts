import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }
}
