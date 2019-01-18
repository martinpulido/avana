import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondHalf'
})

export class SecondHalfPipe implements PipeTransform{
    transform(objects: any[]): any[] {
        if(objects) {
            let ln = objects.length;
            let half_ln = Math.ceil(ln/2);
            return objects.slice(half_ln,ln);
        }
    }
}