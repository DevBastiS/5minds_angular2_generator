import {Observable} from 'rxjs/Observable';

export interface I<%=moduleName%>Repository {
  get<%=moduleName%>(): Observable<string>;
}
