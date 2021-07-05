import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = {
    tagline: 'About Us',
    subheading: 'SWITCHMOON NIGERIA LIMITED',
    heading: 'SWITCHMOON NIGERIA LIMITED is a diverse information technology professional Services Company founded on the vision of providing our clients with a competitive edge. This is accomplished by delivering cost effective IT solutions, based on Open Systems and Open Source technologies, which are tailored to their strategic business considerations. Our aim is to develop strong, ongoing relationships with our clients and long-term partnerships, based on mutual growth and respect.',
    headingtext: 'Our focus is in the following industries; Financial Services, FCMG, Healthcare, Manufacturing and Trade related entities. We cater to provide solutions to small, medium and large-scale organizations, providing solution varied but not limited to Linux systems administration and network management, productivity solutions based on web and client/server technology and platform integration via TCP/IP.'
  };

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.about = this.getAbout();
  }

  getAbout() {
    return this.config.getConfig().about;
  }

}
