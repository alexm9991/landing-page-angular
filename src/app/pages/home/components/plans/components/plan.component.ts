import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-plan',
  styles: [`
   .badge-left{
    z-index: 1;
    position: absolute;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    padding: 0px 10px;
    font-size: 20px;
  }
  `],
  template: `
        <div class="card shadow-sm bg-white">
          <div class="card-img-top p-3 mb-2 bg-primary text-white">
            <h4 class="my-2 ps-4">{{title}}</h4>
            <ul class="list-inline">
              <li class="list-inline-item">
                <span
                  class="badge-left fw-bold">
                  $
                </span>
                <h1 class="fw-bold display-1 ps-4">
                  {{value}}
                </h1>
              </li>
              <li class="ml-n3 list-inline-item">
                <h6>/month</h6>
              </li>
            </ul>
          </div>
          <app-wave></app-wave>
          <div class="card-body p-0 mt-3">
            <ul class="list-group">
              <li
                class="list-group-item d-flex align-items-center border-0 ml-2"
                *ngFor="let opt of list"
              >
                  <span class="material-icons text-primary align-middle bg-blue-20 rounded-circle p-1">done</span>
                <span class="mx-2 text-body"> Opción {{ opt }}</span>
              </li>
            </ul>

            <div class="text-center my-4">
              <button class="btn btn-blue-20 px-4">
                <span class="text-primary px-5 py-2">{{option}}</span>
              </button>
            </div>
          </div>
        </div>
  `,

})

export class PlanComponent {

  @Input() title!: string;
  @Input() value!: string;
  @Input() option!: string;
  @Input() list!: number[];

}
