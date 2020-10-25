import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log() {
    console.log('this is logger');
  }
}
