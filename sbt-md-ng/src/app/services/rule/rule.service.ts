import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RuleService {

  constructor(private http: Http) {
  }

  fetchRule(selection: string): Observable<string> {
    return this.http.get('/api/rule/' + selection)
      .map((response: Response) => response.json() as string)
      .do((data) => console.log('Received: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error!');
  }

}
