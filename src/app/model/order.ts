export class Order {
  public description = '';
  public amount = '';
  public orderItems = '';
  public created = '';
  public id: number | undefined;
  public constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}
