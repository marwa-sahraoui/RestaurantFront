export class Client {
  public firstName = '';
  public lastName = '';
  public email = '';
  public paypalId = '';
  public orders = '';
  public id: number | undefined;
  public constructor(init?: Partial<Client>) {
    Object.assign(this, init);
  }
}
