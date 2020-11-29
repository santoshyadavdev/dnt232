import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(name: string, title: string): string {
    return `Welcome ${title} ${name}`;
  }

}
