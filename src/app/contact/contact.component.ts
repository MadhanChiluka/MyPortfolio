import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/madhan.chiluka.71',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/MadhanChiluka',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/madhan_chiluka/',
        iconUrl: './assets/icons/instagram.svg'
      },
      
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/MadhanChiluka',
        iconUrl: './assets/icons/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://www.hackerrank.com/madhan_chiluka',
        iconUrl: './assets/icons/hackerrank.svg'
      },
      // {
      //   name: 'Stackoverflow',
      //   url: '#',
      //   iconUrl: './assets/icons/stackoverflow.svg'
      // },
      // {
      //   name: 'Pluralsight',
      //   url: '#',
      //   iconUrl: './assets/icons/pluralsight.svg'
      // }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:madhan.chiluka@outlook.com',
    iconUrl: './assets/icons/email.svg'
  };

  linkedIn = {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/madhan-chiluka-4ba58a91/',
      iconUrl: './assets/icons/linkedin.svg'
    };
  
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
