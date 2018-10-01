import { Component } from '@angular/core';
// import { ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHeaderOpaque = false;
  isHeaderHidden = false;
  age = 26.5;
  constructor( ) {
    const ageInMiliSec = Date.now() - Date.parse('Feb 27, 1992');
    const ageInYear = ageInMiliSec / (1000 * 60 * 60 * 24 * 365.25);
    this.age = Math.round(ageInYear * 10 ) / 10;
  }
  // @ViewChild('header', {read: ElementRef}) mainHeader: ElementRef;
  // @HostListener('window:scroll') scrollHandler() {
  //   const headerHeight = this.mainHeader.nativeElement.offsetHeight;
  //   const scrollPosition = window.pageYOffset;
  //   if ((scrollPosition > headerHeight * .20) && (scrollPosition < headerHeight) && (window.outerWidth > 768)) {
  //     this.isHeaderHidden = true;
  //   } else {
  //     if (scrollPosition < headerHeight * .20) {
  //       this.isHeaderHidden = false;
  //       this.isHeaderOpaque = false;
  //     } else {
  //       this.isHeaderHidden = false;
  //       this.isHeaderOpaque = true;
  //     }
  //   }
  // }
}
