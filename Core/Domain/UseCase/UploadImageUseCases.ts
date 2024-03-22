import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UploadImageGateway } from "../Gateway/UploadImageGateway";

@Injectable({
    providedIn: 'root',
  })
  export class UploadImageUseCases {
    constructor(private _uploadImageGateway: UploadImageGateway) {}
  
    uploadImage(id: number, file: File): Observable<any> {
      return this._uploadImageGateway.uploadImage(id, file);
    }
  }
  
