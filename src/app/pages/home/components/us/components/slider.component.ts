
import { Component, Input } from '@angular/core';
import { ICommentUser } from '../../../../../interfaces/comment-user.object';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() commentsUsers!: ICommentUser[]

}

