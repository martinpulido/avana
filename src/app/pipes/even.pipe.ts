import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'even'
})

export class EvenPipe implements PipeTransform{
    transform(objects: any[]): any[] {
        if(objects) {
            let filteredArray: any = [];
            objects.forEach((item, index) => {
                if((index%2)){ //If it's Even
                    let newItem: Object = item; //Need to assign item into a new variable before pushing into new array
                    filteredArray.push(newItem);
                }
            })
            return filteredArray;
        }
    }
}