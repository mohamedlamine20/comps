import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {
  data=[
    {
      name:"James",age:24,job:"Designer",employed:true
    },
    {
      name:"Jill",age:26,job:"Engineer",employed:false
    },
    {
      name:"Elyse",age:26,job:"Engineer",employed:true
    }
  ];
  headers=[
    {key:"employed",lable:"Has a job?"},
    {key:"name",lable:"Name"},
    {key:"age",lable:"Age"},
    {key:"job",lable:"Job"},
    
  ]

}
