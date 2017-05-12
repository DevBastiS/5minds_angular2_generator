import {Component, Inject, OnInit} from '@angular/core';
import {I<%=moduleName%>Service} from './services/<%=moduleFileName%>.service.interface';

@Component({
  selector: '<%=moduleFileName%>',
  templateUrl: './<%=moduleFileName%>.component.html',
  styleUrls: ['./<%=moduleFileName%>.component.css'],
})

export class <%=moduleName%>Component implements OnInit {

  private <%=moduleCompName%>Service: I<%=moduleName%>Service;
  private <%=moduleCompName%>: string;

  constructor(@Inject('I<%=moduleName%>Service') <%=moduleCompName%>Service: I<%=moduleName%>Service) {
    this.<%=moduleCompName%>Service = <%=moduleCompName%>Service;
  }

  public ngOnInit(): void {
    this.<%=moduleCompName%>Service.get<%=moduleName%>()
      .subscribe((<%=moduleCompName%>: string) => {
        this.<%=moduleCompName%> = <%=moduleCompName%>;
      });
  }
}
