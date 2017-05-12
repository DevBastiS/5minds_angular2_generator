import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {<%=moduleName%>RoutingModule} from './<%=moduleFileName%>-routing.module';
import {<%=moduleName%>Component} from './<%=moduleFileName%>.component';

@NgModule({
  imports: [
    CommonModule,
    <%=moduleName%>RoutingModule,
  ],
  declarations: [
    <%=moduleName%>Component,
  ],
})

export class <%=moduleName%>Module {}
