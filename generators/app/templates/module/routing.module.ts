import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {<%=moduleName%>Component} from './<%=moduleFileName%>.component';

const routes: Routes = [
  {path: '<%=moduleName%>', component: <%=moduleName%>Component},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})

export class <%=moduleName%>RoutingModule { }
