import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onToDataForm() {
    this.router.navigate(['/addinfo']);
  }

}
