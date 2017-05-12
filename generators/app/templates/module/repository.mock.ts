import {Injectable} from '@angular/core';
import {environment} from 'environment';
import {Observable} from 'rxjs/Observable';
import {I<%=moduleName%>Repository} from './<%=moduleFileName%>.repository.interface';


@Injectable()
export class <%=moduleName%>MockRepository implements I<%=moduleName%>Repository {

  constructor() {}
  
}
