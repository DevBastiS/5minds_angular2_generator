import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {<%=moduleName%>Repository} from '../repositories/<%=moduleFileName%>.repository';

@Injectable()
export class <%=moduleName%>Service {

  constructor(private <%=moduleCompName%>Repository: <%=moduleName%>Repository) { }

  
}