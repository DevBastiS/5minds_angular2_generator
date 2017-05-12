import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {I<%=moduleName%>Repository} from './<%=moduleFileName%>.repository.interface';
import {environment} from 'environment';

@Injectable()
export class <%=moduleName%>MockRepository implements I<%=moduleName%>Repository {

  constructor(private http: Http) {}
  
}
