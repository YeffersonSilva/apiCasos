import { PaymentStatus } from "@prisma/client";

export class PaymentHistory {
  constructor(
    public date: Date,
    public amount: number,
    public status: PaymentStatus,
    public transactionId: string
  ) {}
}

export class Subscription {
  constructor(
    public id: string,
    public userId: string,
    public planId: string,
    public startDate: Date,
    public endDate: Date,
    public nextBillingDate: Date,
    public paymentStatus: PaymentStatus = "PENDING",
    public paymentHistory: PaymentHistory[] = [],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateSubscriptionDTO {
  constructor(
    public userId: string,
    public planId: string,
    public startDate: Date,
    public endDate: Date,
    public nextBillingDate: Date
  ) {}
}

export class UpdateSubscriptionDTO {
  constructor(
    public paymentStatus?: PaymentStatus,
    public endDate?: Date,
    public nextBillingDate?: Date,
    public paymentHistory?: PaymentHistory[]
  ) {}
}
