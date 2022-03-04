export class Restaurant {
  public name = '';
  public address = '';
  public id: number | undefined;

  public constructor(init?: Partial<Restaurant>) {
    Object.assign(this, init);
  }
}
