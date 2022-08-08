import { Injectable } from '@angular/core';
import { Objeto } from 'src/app/pages/admin/convocatory/convo-create/components/clone-convo/clone-convo.component';
import { Roles } from '../../../enums/roles.enum';
import { LocalStorageService } from '../local-storage/local-storage.service';

const ObjectF = {
    name: String,
    file: File
}

@Injectable()
export class AuthStorageService {


    private files = [];
    private role: Roles;
    private _roleId: string;
    private token: string;
    private fullName: string;
    private userId: string;
    readonly tokenKey = 'token';
    
    private Convo: string;

    constructor(
        private storage: LocalStorageService,
    ) {
    }

    clean(): void {
        this.fullName = this.token = this.role = undefined;
        this.storage.clear();
    }

    setRole(role: Roles): void {
        this.role = role;
        localStorage.setItem("Role",role);
    }

    getRole = (): Roles => this.role;

    get roleId(): string {
      return this._roleId;
    }

    set roleId(value: string) {
      this._roleId = value;
    }

  setToken(token: string): void {
        this.token = token;
        try {
            this.storage.store(this.tokenKey, token);
        }catch (e) {
            console.log(e);
        }
    }

    getToken(): string {
        return this.storage.retrieve(this.tokenKey);
    }

    setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    getFullName = (): string => this.fullName;

    setConvo(Convo: string): void {
        this.Convo = Convo;
    }
    
    getConvo = (): string => this.Convo;

    setUserId(userId: string): void {
        this.userId = userId;
    }

    getUserId = (): string => this.userId;

    setFile(Name?: String, file?: File, val?:boolean): void {
        const Obje = {
            name: Name,
            file: file,
            NombreDoc: file.name
        }
        this.files.push(Obje);    
    }

    deleteFile(file?:File){
        this.files.splice(this.files.indexOf(file),1);
    }
    
    setFileC(){
        this.files = [];
    }

    getFile = () => this.files;

}
