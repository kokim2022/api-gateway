import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'running the api gateway.!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    // emit using tcp
    this.billingClient.emit(
      'order_created',
      // change to json string
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
