import {Injectable} from '@angular/core';
import {ApiService, AuthStorageService} from '..';

@Injectable({
    providedIn: 'root'
})
export class TablaHonoraiosService {
    private readonly endpoint = 'Honorario';
    readonly apiUrl: string;

    constructor(private http: ApiService) {
    }

    agregar(data) {
        return this.http.post(`${this.endpoint}`, data);
    }

    validador(data) {
        return this.http.get(`${this.endpoint}/conteo/${data}`, null, true);
    }

    getall() {
        return this.http.get(`${this.endpoint}`, null, true);
    }

    delete(data) {
        return this.http.delete(`${this.endpoint}/${data}`, null, true);
    }

    update(id, data) {
        return this.http.patch(`${this.endpoint}/${id}`, data, null, true);
    }
}
