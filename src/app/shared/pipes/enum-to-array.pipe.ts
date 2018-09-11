import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: Object) {
        let ret = Object.keys(data);
        return ret;
    }
}