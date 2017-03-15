import {Component, OnInit} from '@angular/core';

import {<%=moduleName%>Service} from './services/<%=moduleName%>.service';

@Component({
  selector: '<%=moduleFileName%>',
  templateUrl: './<%=moduleFileName%>.component.html',
  styleUrls: './<%=moduleFileName%>.component.css',
})

export class <%=moduleName%>Component {

  constructor(private <%=moduleCompName%>Service: <%=moduleName%>Service) { }


}
