import {PipeTransform, Pipe} from '@angular/core';
import { IUser } from '../Interfaces/User';
@Pipe({
	name:'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {
	transform (value: IUser[], args: string):IUser[]{
		let filter: string = args? args.toLocaleLowerCase().trim() : null;
		return filter ? value.filter((user:IUser) =>
		user.name.toLocaleLowerCase().indexOf(filter) !== -1):value;
	}
    
}