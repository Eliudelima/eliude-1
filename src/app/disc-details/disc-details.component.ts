import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { discos } from '../discos';

@Component({
  selector: 'app-disc-details',
  templateUrl: './disc-details.component.html',
  styleUrls: ['./disc-details.component.css']
})
export class DiscDetailsComponent implements 
OnInit {
  disc;
  constructor(
    private route: ActivatedRoute,) 
  { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disc = discos[+params.get('discosId')];
    });
  }
  

}