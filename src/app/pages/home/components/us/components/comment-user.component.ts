
import { Component, Input } from '@angular/core';
import { ICommentUser } from '../../../../../interfaces/comment-user.object';

@Component({
  selector: 'app-comment-user',
  templateUrl: './comment-user.component.html',
  styles: [`
    .card {
      width: 320px;
      height: 470px;
    }
  `]
})
export class CommentUserComponent {
  @Input() commentUser!: ICommentUser
}

