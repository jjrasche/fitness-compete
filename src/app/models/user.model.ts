export class User {
    constructor(
        public userId: number,
        public email: string,
        public password: string,
        public accessToken: string,
    ) { }
}