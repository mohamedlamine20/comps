import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  @Input("appTimes")
  set render(time:number){
    this.viewContainer.clear();
    for(let i=0;i<time;i++){
      this.viewContainer.createEmbeddedView(
        this.templateRef,{index:i,text:"ok"}
      )
    }
  
  } 

  constructor(private viewContainer:ViewContainerRef,private templateRef:TemplateRef<any>) { }
 
}
