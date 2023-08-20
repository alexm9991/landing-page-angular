import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
      <nav class="navbar py-0">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="assets/img/lucasian-logo.png"
          height="80"
          alt="logo"
        />
      </a>
      <form class="d-flex flex-row align-items-center flex-wrap">
        <div class="dropdown ml-2" *ngFor="let i of [1, 2, 3, 4, 5]">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Menu{{ i }}
          </button>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>

        <button type="button" class="btn btn-primary py-2 px-3 ms-4">
          Login
        </button>
      </form>
      </div>
    </nav>
  `
})
export class NavbarComponent {

}
