import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8091/api/students';

  constructor(private http: HttpClient) { }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }
  public getStudent (id: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }
  public updatePassword(student: Student): Observable<any>{
    const header = {'Content-Type': 'application/json',"Access-Control-Allow-Origin": '*'};
    return this.http.put<Student>(`${this.baseUrl}/pass/${student.studentId}/${student.password}`, student,
    {headers: header, responseType: 'text' as 'json'});
  }
  public createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/save`, student);
  }
  public getStudentByEmail(email:string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/email/${email}`);
  }
}
