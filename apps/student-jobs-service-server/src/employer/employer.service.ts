import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployerServiceBase } from "./base/employer.service.base";

@Injectable()
export class EmployerService extends EmployerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
