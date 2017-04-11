import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {<%=moduleName%>RoutingModule} from './<%=moduleFileName%>-routing.module';

import {<%=moduleName%>Repository} from './repositories/<%=moduleFileName%>.repository';
import {<%=moduleName%>Service} from './services/<%=moduleFileName%>.service';
import {<%=moduleName%>Component} from './<%=moduleFileName%>.component';

@NgModule({
  imports: [
    CommonModule,
    <%=moduleName%>RoutingModule,
  ],
  declarations: [
    <%=moduleName%>Component,
  ],
  providers: [
    <%=moduleName%>Service,
    <%=moduleName%>Repository,
  ],
})

export class <%=moduleName%> {}