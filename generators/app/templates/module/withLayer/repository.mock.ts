import 'rxjs/add/observable/of';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {I<%=moduleName%>Repository} from './<%=moduleFileName%>.repository.interface';


@Injectable()
export class <%=moduleName%>MockRepository implements I<%=moduleName%>Repository {

  public get<%=moduleName%>(): Observable<string> {
    return Observable.of('<%=moduleName%> works!');
  }

}
