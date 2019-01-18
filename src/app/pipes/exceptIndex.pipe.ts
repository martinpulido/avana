import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exceptIndex'
})

export class ExceptIndexPipe implements PipeTransform{
    transform(objects: any[], arg:any): any[] {
        if(objects) {
           objects.slice(arg,1);
           return objects;
        }
    }
}