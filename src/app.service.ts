import { Injectable } from '@nestjs/common';
import { createOrderRequest } from './create-order-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: createOrderRequest) {
    console.log(userId);
    console.log(price);
  }
}
