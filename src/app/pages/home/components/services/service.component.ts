import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-service',
  template: `
      <article class="text-center">
        <img [src]="img"/>
        <h5 class="text-black">{{title}}</h5>
        <p class="w-75 mx-auto">Lorem, ipsum dolor sit amet,
          consectetur adipisicing elit</p>
      </article>
  `
})
export class ServiceComponent {

  @Input() img!: string;
  @Input() title!: string;

}
