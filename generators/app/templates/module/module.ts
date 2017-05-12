import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {<%=moduleName%>MockRepository} from './repositories/<%=moduleFileName%>.repository.mock';
import {<%=moduleName%>DefaultService} from './services/<%=moduleFileName%>.service.default';
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
  providers: [
    {
      provide: 'I<%=moduleName%>Repository',
      useClass: <%=moduleName%>MockRepository,
    },
    {
      provide: 'I<%=moduleName%>Service',
      useClass: <%=moduleName%>DefaultService,
    },
  ],
})

export class <%=moduleName%>Module { }
