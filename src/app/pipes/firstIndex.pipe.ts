import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstIndex'
})

export class FirstIndexPipe implements PipeTransform{
    transform(objects: any[]): any[] {
        if(objects) {
           return objects.splice(0,1);
        }
    }
}