import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-<%=moduleFileName%>',
  templateUrl: './<%=moduleFileName%>.component.html',
  styleUrls: ['./<%=moduleFileName%>.component.css'],
})

export class <%=moduleName%>Component implements OnInit {

  public ngOnInit(): void {
    
  }
}
