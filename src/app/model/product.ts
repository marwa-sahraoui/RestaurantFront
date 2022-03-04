export class Product {
  public name = '';
  public description = '';
  public price = '';
  public score = '';
  public id: number | undefined;

  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}
