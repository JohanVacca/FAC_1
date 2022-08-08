import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  validateParam(objExists: boolean, obj: any, paramName: string, paramNameSecondLevel?: string): string {
    if (!paramNameSecondLevel) {
      return (objExists && obj[paramName] !== '') ? obj[paramName] : '';
    } else {
      return (objExists && obj[paramName] !== '' &&  obj[paramName][paramNameSecondLevel]) ?
        obj[paramName][paramNameSecondLevel] : '';
    }
  }

  objExists(obj: any) {
    return !!Object.keys(obj).length;
  }

  getExtension(value: string): string {
    const array = value.split('.');
    return array[array.length - 1];
  }

  getUniqueArray =
    <T>(arr: ReadonlyArray<T>, objKey: keyof T) =>
      arr.reduce<ReadonlyArray<T>>((acc, curr) =>
        acc.some(a => a[objKey] === curr[objKey])
          ? acc
          : [...acc, curr], []);
}
