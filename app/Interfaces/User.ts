export interface IUser {
	id: Number;
	name: string;
	username: string;
	email: string;
	address: Object;
	phone: string;
	website: string;
	company: Object;
}

export class Event implements IUser {
	constructor(
        public id: Number,
        public name: string,
        public username: string,
        public email: string,
        public address: Object,
        public phone: string,
        public website: string,
        public company: Object
	){};

}