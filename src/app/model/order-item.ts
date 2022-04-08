export class OrderItem {
  public productName = '';
  public quantity = '';
  public id: number | undefined;
  public constructor(init?: Partial<OrderItem>) {
    Object.assign(this, init);
  }
}
