import { Injectable } from '@angular/core';

@Injectable()
export class MemoryStorageService {

    data = new Map<string, any>();

    constructor() {
    }

    pop<T>(key: string): T {
        const t = this.data.get(key);
        this.data.delete(t);
        return t;
    }

    store<T>(key: string, value: T): void {
        this.data.set(key, value);
    }

    retrieve = <T>(key: string) => this.data.get(key);

    remove = (key: string) => this.data.delete(key);

}
