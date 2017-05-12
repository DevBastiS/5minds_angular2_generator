import {Observable} from 'rxjs/Observable';

export interface I<%=moduleName%>Service {
  get<%=moduleName%>(): Observable<string>;
}
