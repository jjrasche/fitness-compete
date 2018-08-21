
export class OauthDetails{
  constructor(
    public accessToken: string,
    public id: string,
    public scope: string[],
    public tokenType: string,
    public expiratoin: Date) {}
}