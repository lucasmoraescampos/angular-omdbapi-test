import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent {
  @Input() public loading: boolean = false;
  @Input() public button: boolean = false;
}
