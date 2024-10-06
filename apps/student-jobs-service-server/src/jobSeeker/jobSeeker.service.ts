import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobSeekerServiceBase } from "./base/jobSeeker.service.base";

@Injectable()
export class JobSeekerService extends JobSeekerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
