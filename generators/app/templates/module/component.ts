import {Component, OnInit} from '@angular/core';

import {<%=moduleName%>Service} from './services/<%=moduleFileName%>.service';

@Component({
  selector: '<%=moduleFileName%>',
  templateUrl: './<%=moduleFileName%>.component.html',
  styleUrls: ['./<%=moduleFileName%>.component.css'],
})

export class <%=moduleName%>Component implements OnInit {

  constructor(private <%=moduleCompName%>Service: <%=moduleName%>Service) { }

  @NgOnInit(): void {
    
  }
}
