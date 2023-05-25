import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {
  stats=[
    {value:22, label:'# of Users'},
    {value:900, label:'Revenus'},
    {value:22, label:'Rewies'},
  
  ];
  items=[
    {image:'./assets/images/couch.jpeg',title:'Couch',description:'this is a fantastic couch to sit on ' },
    {image:'./assets/images/dresser.jpeg',title:'Dresser',description:'this is a great dresser to put stuff in ' }
  ]

}
