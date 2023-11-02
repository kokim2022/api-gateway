export class OrderCreatedEvent {
  public readonly orderId: string;
  public readonly userId: string;
  public readonly price: number;

  constructor(orderId: string, userId: string, price: number) {
    this.orderId = orderId;
    this.userId = userId;
    this.price = price;
  }

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
