import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './app-stars-rating.component.html',
  styleUrls: ['./app-stars-rating.component.scss']
})
export class AppStarsRatingComponent {
  @Input() public value: number = 0;
}
