import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstHalf'
})

export class FirstHalfPipe implements PipeTransform{
    transform(objects: any[]): any[] {
        if(objects) {
            let ln = objects.length;
            let half_ln = Math.ceil(ln/2);
            return objects.slice(0,half_ln);
        }
    }
}