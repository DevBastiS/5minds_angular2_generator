import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {I<%=moduleName%>Service} from './<%=moduleFileName%>.service.interface'
import {I<%=moduleName%>Repository} from './../repositories/<%=moduleFileName%>.interface.repository';

@Injectable()
export class <%=moduleName%>DefaultService implements I<%=moduleName%>Service {

  private <%=moduleCompName%>Repository: I<%=moduleName%>Repository;

  constructor(@Inject('I<%=moduleName%>Repository') <%=moduleCompName%>Repository: I<%=moduleName%>Repository) {
    this.<%=moduleCompName%>Repository = <%=moduleCompName%>Repository;
  }

}
