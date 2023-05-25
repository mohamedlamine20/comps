import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  
  items=[{title:"why is the sky blue,",
  content:"the sky is blue because it is"} ,
  {title:"what does an orange taste like ?",
  content:"n orange tastes like an  orange"}  ,
  {title:"what color is that cat ",content:"the cat is orange color" }

]

  modalOpen:boolean=false;
  onClick(){
    this.modalOpen=!this.modalOpen;
  }

}
