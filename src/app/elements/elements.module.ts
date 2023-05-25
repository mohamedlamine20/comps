import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
  
  
    ElementHomeComponent,
          PlaceHolderComponent,
          TimesDirective,
          SegmentComponent
  ],
  imports: [
    CommonModule,
    ELementsRoutingModule,SharedModule
  ]
  ,exports:[]
})
export class ELementsModule { }
