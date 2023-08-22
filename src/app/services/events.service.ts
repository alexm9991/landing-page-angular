import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICommentUser } from '../interfaces/comment-user.object';
import { ILocalJsonPostUser, IPostUser, ILocalPostUser } from '../interfaces/post-user.object';
import { catchError, lastValueFrom, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  async commentsUser(): Promise<ICommentUser[]> {
    let dataPostsUsers: IPostUser[] = [];

    dataPostsUsers = await lastValueFrom(this._postsUsers());
    const { data } = await lastValueFrom(this._localPostsUsers());

    return this._fromPostsToComments(dataPostsUsers, data);
  };


  private _fromPostsToComments(posts: IPostUser[], localPosts: ILocalPostUser[]): ICommentUser[] {
    let index = 0;
    let commentsUsers: ICommentUser[] = [];

    const list = [
      posts[0],
      posts[1],
      posts[2]
    ];

    for (const [i, post] of list.entries()) {

      commentsUsers.push({
        id: post.id,
        user: localPosts[index].name,
        avatar: localPosts[index].avatar,
        comment: post.title,
        coverImage: localPosts[index].coverImage
      })

      const isMultipleOfThree = (i + 1) % 3 == 0;
      isMultipleOfThree ? index = 0 : index += 1;

    }

    return commentsUsers
  }

  private _postsUsers() {
    const URI = `${environment.api}/posts`

    return this.http.get<IPostUser[]>(URI)
      .pipe(catchError(this._handleError));
  };

  private _localPostsUsers() {
    const LOCAL = '../../assets'
    const URI = `${LOCAL}/data/posts-users.json`

    return this.http.get<ILocalJsonPostUser>(URI)
      .pipe(catchError(this._handleError));
  };

  private _handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error));
  }

}
