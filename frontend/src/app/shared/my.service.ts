import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //der Service kann von allen Komponenten innerhalb des Root-Moduls genutzt werden
})
export class MyService {

  constructor() { }
}
