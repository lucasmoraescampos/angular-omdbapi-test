import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './app-offcanvas.component.html',
  styleUrls: ['./app-offcanvas.component.scss']
})
export class AppOffcanvasComponent implements OnInit {
  public position: string = 'offcanvas-bottom';
  @Input() public title: string = '';

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  public onResize() {
    if (window.innerWidth <= 400) {
      this.position = 'offcanvas-bottom';
    } else {
      this.position = 'offcanvas-end';
    }
  }
}