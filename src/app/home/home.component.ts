import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header = {
    heading: 'SWITCHMOON',
    headingtext: "SWITCHMOON NIGERIA LIMITED is an Information and Communication Technology consulting firm and technology solution provider. We recognize the Impact of ICT in business operations and service delivery through digital transformation. Poised to be a positive change agent in service delivery and overall business efficiency in any organization.",
   };

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }

} 
