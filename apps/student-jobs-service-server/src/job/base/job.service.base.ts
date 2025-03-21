/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Job as PrismaJob,
  Application as PrismaApplication,
  JobSeeker as PrismaJobSeeker,
  Employer as PrismaEmployer,
} from "@prisma/client";

export class JobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JobCountArgs, "select">): Promise<number> {
    return this.prisma.job.count(args);
  }

  async jobs(args: Prisma.JobFindManyArgs): Promise<PrismaJob[]> {
    return this.prisma.job.findMany(args);
  }
  async job(args: Prisma.JobFindUniqueArgs): Promise<PrismaJob | null> {
    return this.prisma.job.findUnique(args);
  }
  async createJob(args: Prisma.JobCreateArgs): Promise<PrismaJob> {
    return this.prisma.job.create(args);
  }
  async updateJob(args: Prisma.JobUpdateArgs): Promise<PrismaJob> {
    return this.prisma.job.update(args);
  }
  async deleteJob(args: Prisma.JobDeleteArgs): Promise<PrismaJob> {
    return this.prisma.job.delete(args);
  }

  async findApplications(
    parentId: string,
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applications(args);
  }

  async findJobSeekers(
    parentId: string,
    args: Prisma.JobSeekerFindManyArgs
  ): Promise<PrismaJobSeeker[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .jobSeekers(args);
  }

  async getEmployer(parentId: string): Promise<PrismaEmployer | null> {
    return this.prisma.job
      .findUnique({
        where: { id: parentId },
      })
      .employer();
  }
}
