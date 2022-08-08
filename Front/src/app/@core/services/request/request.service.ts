import { Injectable } from '@angular/core';
import { AuthStorageService } from '../storage/auth-storage/auth-storage.service';
import { MemoryStorageService } from '../storage/memory-storage/memory-storage.service';
import { HttpHeaders } from '@angular/common/http';
// import { Http } from '@angular/http';

@Injectable()
export class RequestService {

    constructor(
        private authStorageService: AuthStorageService,
        private memoryStorageService: MemoryStorageService) { }

    getJsonHeader = (headers?: HttpHeaders): HttpHeaders =>
        new HttpHeaders({ ...headers, 'Content-Type': 'application/json' })

    getJsonHeaderFirmas = (headers?: HttpHeaders): HttpHeaders =>
        new HttpHeaders({ ...headers, 'Content-Type': 'multipart/form-data' })

    getBearerHeader(headers?: HttpHeaders): HttpHeaders {
        const token = this.authStorageService.getToken();
        let headersWithToken: HttpHeaders = new HttpHeaders({...headers});

        if (token) {
          headersWithToken = new HttpHeaders({ ...headers, 'Authorization': `Bearer ${token}` });

        }
        return headersWithToken;
    }

    getBearerHeaderFirma(headers?: HttpHeaders): HttpHeaders {
        const token = this.authStorageService.getToken();
        let headersWithToken: HttpHeaders = new HttpHeaders({...headers});

        if (token) {
          headersWithToken = new HttpHeaders(
              { ...headers, 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data'  }
          );

        }
        return headersWithToken;
    }

    getParams<T>(obj: T): URLSearchParams {
        const params = new URLSearchParams();
        Object.keys(obj || {}).forEach(key => params.append(key, `${obj[key]}`));
        return params;
    }

    getQueryObject<T>(obj?: T) {
        if (!obj || !Object.keys(obj).length) {
            return undefined;
        }

        const flatObject = this.flatObject({}, obj, '');
        return { query: JSON.stringify(flatObject) };
    }

    getTextPlainHeader = (headers?: HttpHeaders): HttpHeaders =>
        new HttpHeaders({ ...headers, 'Content-Type': 'text/plain' })

    private flatObject<T>(destination: {}, obj: T, parentName: string) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] !== 'object') {
                    destination[parentName + key] = obj[key];
                    continue;
                }
                this.flatObject(destination, obj[key], `${key}.`);
            }
        }
        return destination;
    }

}
