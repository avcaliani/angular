import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name:'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: any[], args: string): any {
        if(args === "descending") {
            return value.sort().reverse();
        } else {
            return value.sort();
        }
    }

}