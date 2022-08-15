import {Injectable} from '@angular/core';
import {ApiService} from '../../../@core/services';
import {map} from 'rxjs/operators';
import {cronogramaObj} from '../../models/cronograma.model';
import {CronogramaResponse} from '../saveStateService/StateInterface';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class cronogramaService {

    private readonly endpoint = 'cronograma';

    constructor(
        private http: ApiService,
    ) {
    }

    getByProject(projectId: string) {
        return this.http.get(`${this.endpoint}/getIdProject/${projectId}`, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    add(cronograma: Partial<cronogramaObj>) {
        return this.http.post(`${this.endpoint}`, cronograma)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    getById(cronogramaId: string) {
        return this.http.get(`${this.endpoint}/${cronogramaId}`, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    getAll() {
        return this.http.get(`${this.endpoint}`, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    // /project/:id
    updateSeguimiento(projectid: string, cronograma: Partial<cronogramaObj>) {
        return this.http.patch(`${this.endpoint}/project/${projectid}`, cronograma, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }


    update(cronogramaId: string, cronograma) {
        //const {proyectId, ConvocatoriaId, actividades, _id} = cronograma.cronogramas;
        return this.http.patch(`${this.endpoint}/${cronogramaId}`, cronograma.cronogramas, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    delete(cronogramaId: string) {
        return this.http.delete(`${this.endpoint}/${cronogramaId}`, null, true)
            .pipe(
                map((res: any) => {
                    return res || null;
                }),
            );
    }

    getByProjectId(projectId: string): Observable<CronogramaResponse> {
        return this.http.get(`${this.endpoint}/getIdProject/${projectId}`, null, true);
    }
}
