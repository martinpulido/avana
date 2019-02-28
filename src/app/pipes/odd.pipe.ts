import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'odd'
})

export class OddPipe implements PipeTransform{
    transform(objects: any[]): any[] {
        if(objects) {
            let filteredArray: any = [];
            objects.forEach((item, index) => {
                if(!(index%2)){ //If it's Odd
                    let newItem: Object = item; //Need to assign item into a new variable before pushing into new array
                    filteredArray.push(newItem);
                }
            })
            return filteredArray;
        }
    }
}