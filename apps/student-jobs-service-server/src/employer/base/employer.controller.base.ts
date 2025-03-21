/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployerService } from "../employer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployerCreateInput } from "./EmployerCreateInput";
import { Employer } from "./Employer";
import { EmployerFindManyArgs } from "./EmployerFindManyArgs";
import { EmployerWhereUniqueInput } from "./EmployerWhereUniqueInput";
import { EmployerUpdateInput } from "./EmployerUpdateInput";
import { InternshipFindManyArgs } from "../../internship/base/InternshipFindManyArgs";
import { Internship } from "../../internship/base/Internship";
import { InternshipWhereUniqueInput } from "../../internship/base/InternshipWhereUniqueInput";
import { JobPostingFindManyArgs } from "../../jobPosting/base/JobPostingFindManyArgs";
import { JobPosting } from "../../jobPosting/base/JobPosting";
import { JobPostingWhereUniqueInput } from "../../jobPosting/base/JobPostingWhereUniqueInput";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployerControllerBase {
  constructor(
    protected readonly service: EmployerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employer })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployer(
    @common.Body() data: EmployerCreateInput
  ): Promise<Employer> {
    return await this.service.createEmployer({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        companyName: true,
        contactEmail: true,
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Employer] })
  @ApiNestedQuery(EmployerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employers(@common.Req() request: Request): Promise<Employer[]> {
    const args = plainToClass(EmployerFindManyArgs, request.query);
    return this.service.employers({
      ...args,
      select: {
        companyName: true,
        contactEmail: true,
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employer(
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Employer | null> {
    const result = await this.service.employer({
      where: params,
      select: {
        companyName: true,
        contactEmail: true,
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployer(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() data: EmployerUpdateInput
  ): Promise<Employer | null> {
    try {
      return await this.service.updateEmployer({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          companyName: true,
          contactEmail: true,
          createdAt: true,
          description: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployer(
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Employer | null> {
    try {
      return await this.service.deleteEmployer({
        where: params,
        select: {
          companyName: true,
          contactEmail: true,
          createdAt: true,
          description: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/internships")
  @ApiNestedQuery(InternshipFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "read",
    possession: "any",
  })
  async findInternships(
    @common.Req() request: Request,
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Internship[]> {
    const query = plainToClass(InternshipFindManyArgs, request.query);
    const results = await this.service.findInternships(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        duration: true,

        employer: {
          select: {
            id: true,
          },
        },

        employerAssociationForInternship: true,
        employerForInternship: true,
        id: true,
        location: true,
        stipend: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/internships")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async connectInternships(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: InternshipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      internships: {
        connect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/internships")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async updateInternships(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: InternshipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      internships: {
        set: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/internships")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async disconnectInternships(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: InternshipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      internships: {
        disconnect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/jobPostings")
  @ApiNestedQuery(JobPostingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "JobPosting",
    action: "read",
    possession: "any",
  })
  async findJobPostings(
    @common.Req() request: Request,
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<JobPosting[]> {
    const query = plainToClass(JobPostingFindManyArgs, request.query);
    const results = await this.service.findJobPostings(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },

        id: true,
        jobTitle: true,
        requirements: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobPostings")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async connectJobPostings(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobPostingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPostings: {
        connect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobPostings")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async updateJobPostings(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobPostingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPostings: {
        set: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobPostings")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async disconnectJobPostings(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobPostingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPostings: {
        disconnect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/jobs")
  @ApiNestedQuery(JobFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async findJobs(
    @common.Req() request: Request,
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Job[]> {
    const query = plainToClass(JobFindManyArgs, request.query);
    const results = await this.service.findJobs(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },

        employerAssociationForJob: true,
        employerForJob: true,
        id: true,
        location: true,
        postedDate: true,
        salary: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async connectJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        connect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async updateJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        set: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async disconnectJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        disconnect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
