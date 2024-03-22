import { Observable } from 'rxjs';

export abstract class UploadImageGateway {
    abstract uploadImage(id: number, file: File): Observable<any>;
}
