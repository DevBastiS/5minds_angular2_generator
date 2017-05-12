import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from 'environment';
import {Observable} from 'rxjs/Observable';
import {I<%=moduleName%>Repository} from './<%=moduleFileName%>.repository.interface';


@Injectable()
export class <%=moduleName%>MockRepository implements I<%=moduleName%>Repository {

  constructor(private http: Http) {}
  
}
