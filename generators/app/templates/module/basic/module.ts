import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {<%=moduleName%>Component} from './<%=moduleFileName%>.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    <%=moduleName%>Component,
  ],
    exports: [
    <%=moduleName%>Component,
  ],
})

export class <%=moduleName%>Module {}
