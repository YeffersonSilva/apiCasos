import { SubscriptionPeriod } from "@prisma/client";

export class Plan {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public period: SubscriptionPeriod,
    public features: string[],
    public maxCasesPerMonth?: number,
    public accessPremiumReports: boolean = false,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreatePlanDTO {
  constructor(
    public name: string,
    public price: number,
    public period: SubscriptionPeriod,
    public features: string[],
    public maxCasesPerMonth?: number,
    public accessPremiumReports: boolean = false
  ) {}
}

export class UpdatePlanDTO {
  constructor(
    public name?: string,
    public price?: number,
    public period?: SubscriptionPeriod,
    public features?: string[],
    public maxCasesPerMonth?: number,
    public accessPremiumReports?: boolean
  ) {}
}
