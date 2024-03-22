import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'Core/Config/Enviroment';
import { Employee } from 'Core/Domain/Model/Employee.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  constructor(private http: HttpClient) {}

  uploadImage(id: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('id', id.toString());

    return this.http.post<any>(`${environment.apiUrl}/UploadImage`, formData);
  }
}

