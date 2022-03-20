import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TASK } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  private _url = 'http://localhost:5000/tasks';

  getData(): Observable<TASK[]> {
    return this.http.get<TASK[]>(this._url);
  }
  
  deleteTask(task: TASK): Observable<TASK> {
    const url = `${this._url}/${task.id}`;
    return this.http.delete<TASK>(url);
  }

  editReminder(task: TASK): Observable<TASK> {
    const url = `${this._url}/${task.id}`;
    return this.http.put<TASK>(url, task, httpOptions);
  }

  addTask(task: TASK): Observable<TASK> {
    return this.http.post<TASK>(this._url, task, httpOptions);
  }

}
