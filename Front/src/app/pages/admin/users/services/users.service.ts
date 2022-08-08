import {Injectable} from '@angular/core';
import {ApiService} from '../../../../@core/services';
import {HttpResponse} from '@angular/common/http';
import {UserModel} from '../../../../shared/models/user.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
 
export class UsersService {

    private readonly endpoint = 'user';

    constructor(
        private http: ApiService,
    ) {
    }

    add(user: Partial<UserModel>) {
        return this.http.post(`${this.endpoint}`, user)
            .pipe(
                map((res: HttpResponse<UserModel[]>) => {
                    return res['user'] || null;
                }),
            );
    }

    getById(userId: string) {
        return this.http.get(`${this.endpoint}/${userId}`, null, true)
            .pipe(
                map((res: any) => {
                    return res['user'] || null;
                }),
            );
    }

    getAll() {
        return this.http.get(`${this.endpoint}`, null, true)
            .pipe(
                map((res: any) => {
                    return res['users'] || null;
                }),
            );
    }

    getAllFilterUnidad() {
        return this.http.get(`${this.endpoint}/getAllFilterUnidad`, null, true)
            .pipe(
                map((res: any) => {
                    return res['users'] || null;
                }),
            );
    }

    update(userId: string, user: Partial<UserModel>) {
        return this.http.patch(`${this.endpoint}/${userId}`, user, null, true)
            .pipe(
                map((res: HttpResponse<UserModel[]>) => {
                    return res['user'] || null;
                }),
            );
    }

    delete(userId: string) {
        return this.http.delete(`${this.endpoint}/${userId}`, null, true)
            .pipe(
                map((res: HttpResponse<UserModel[]>) => {
                    return res['user'] || null;
                }),
            );
    }

    activeOrDeactivateUser(userId: string, newStatus: boolean) {
        return this.http.patch(`${this.endpoint}/${userId}`, {'isActive': newStatus}, null, true)
            .pipe(
                map((res: HttpResponse<UserModel[]>) => {
                    return res['user'] || null;
                }),
            );
    }
}
