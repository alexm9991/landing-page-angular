import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ICommentUser } from '../../interfaces/comment-user.object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  commentsUsers: ICommentUser[] = []

  constructor(private _eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents()
  }

  async getEvents() {
    this.commentsUsers = await this._eventsService.commentsUser();
  }

}
