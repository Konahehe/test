import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JobSeekerResolverBase } from "./base/jobSeeker.resolver.base";
import { JobSeeker } from "./base/JobSeeker";
import { JobSeekerService } from "./jobSeeker.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobSeeker)
export class JobSeekerResolver extends JobSeekerResolverBase {
  constructor(
    protected readonly service: JobSeekerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
