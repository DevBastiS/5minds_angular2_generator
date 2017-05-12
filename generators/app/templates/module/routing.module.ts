import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {<%=moduleName%>Component} from './<%=moduleFileName%>.component';

const routes: Routes = [
  {path: '', component: <%=moduleName%>Component}, //enter path here
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class <%=moduleName%>RoutingModule { }
