import { Component, Input } from '@angular/core';
import { ICommentUser } from '../../../../interfaces/comment-user.object';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent {
  @Input() commentsUsers!: ICommentUser[]
}
