export class Manager {
  public firstName = '';
  public lastName = '';
  public email = '';
  public restaurants = '';
  public id: number | undefined;
  public constructor(init?: Partial<Manager>) {
    Object.assign(this, init);
  }
}
