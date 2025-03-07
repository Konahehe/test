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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { EmployerFindManyArgs } from "../../employer/base/EmployerFindManyArgs";
import { Employer } from "../../employer/base/Employer";
import { EmployerWhereUniqueInput } from "../../employer/base/EmployerWhereUniqueInput";
import { JobSeekerFindManyArgs } from "../../jobSeeker/base/JobSeekerFindManyArgs";
import { JobSeeker } from "../../jobSeeker/base/JobSeeker";
import { JobSeekerWhereUniqueInput } from "../../jobSeeker/base/JobSeekerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        education: true,
        email: true,
        employerProfile: true,
        firstName: true,
        id: true,
        jobSeekerProfile: true,
        lastName: true,
        photo: true,
        role: true,
        roles: true,
        sessionId: true,
        updatedAt: true,
        userType: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        education: true,
        email: true,
        employerProfile: true,
        firstName: true,
        id: true,
        jobSeekerProfile: true,
        lastName: true,
        photo: true,
        role: true,
        roles: true,
        sessionId: true,
        updatedAt: true,
        userType: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        education: true,
        email: true,
        employerProfile: true,
        firstName: true,
        id: true,
        jobSeekerProfile: true,
        lastName: true,
        photo: true,
        role: true,
        roles: true,
        sessionId: true,
        updatedAt: true,
        userType: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          education: true,
          email: true,
          employerProfile: true,
          firstName: true,
          id: true,
          jobSeekerProfile: true,
          lastName: true,
          photo: true,
          role: true,
          roles: true,
          sessionId: true,
          updatedAt: true,
          userType: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          education: true,
          email: true,
          employerProfile: true,
          firstName: true,
          id: true,
          jobSeekerProfile: true,
          lastName: true,
          photo: true,
          role: true,
          roles: true,
          sessionId: true,
          updatedAt: true,
          userType: true,
          username: true,
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
  @common.Get("/:id/applications")
  @ApiNestedQuery(ApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async findApplications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Application[]> {
    const query = plainToClass(ApplicationFindManyArgs, request.query);
    const results = await this.service.findApplications(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        internship: {
          select: {
            id: true,
          },
        },

        job: {
          select: {
            id: true,
          },
        },

        status: true,
        submissionDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectApplications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateApplications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectApplications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/employers")
  @ApiNestedQuery(EmployerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "read",
    possession: "any",
  })
  async findEmployers(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Employer[]> {
    const query = plainToClass(EmployerFindManyArgs, request.query);
    const results = await this.service.findEmployers(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectEmployers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EmployerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employers: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateEmployers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EmployerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employers: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectEmployers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EmployerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employers: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/jobSeekers")
  @ApiNestedQuery(JobSeekerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "read",
    possession: "any",
  })
  async findJobSeekers(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<JobSeeker[]> {
    const query = plainToClass(JobSeekerFindManyArgs, request.query);
    const results = await this.service.findJobSeekers(params.id, {
      ...query,
      select: {
        createdAt: true,
        education: true,
        id: true,

        internship: {
          select: {
            id: true,
          },
        },

        job: {
          select: {
            id: true,
          },
        },

        resume: true,
        skillSet: true,
        skills: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobSeekers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectJobSeekers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobSeekerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobSeekers: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobSeekers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateJobSeekers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobSeekerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobSeekers: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobSeekers")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectJobSeekers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobSeekerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobSeekers: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
