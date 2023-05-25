import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent {
  @Input()
  header:boolean=true;
  @Input()
  line:number=3;

}
