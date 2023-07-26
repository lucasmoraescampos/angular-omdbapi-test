import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  public className: string = 'btn';
  @Input() public color: string = 'primary';
  @Input() public type: string = 'submit';
  @Input() public outline: boolean = false;
  @Input() public block: boolean = false;
  @Input() public circle: boolean = false;
  @Input() public width: string = 'auto';
  @Input() public height: string = 'auto';

  public ngOnInit(): void {
    if (this.outline) {
      this.className += ` btn-outline-${this.color}`;
    } else {
      this.className += ` btn-${this.color}`;
    }

    if (this.circle) {
      this.className += ' rounded-circle';
    }
  }
}
