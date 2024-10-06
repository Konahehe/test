import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JobPostingResolverBase } from "./base/jobPosting.resolver.base";
import { JobPosting } from "./base/JobPosting";
import { JobPostingService } from "./jobPosting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobPosting)
export class JobPostingResolver extends JobPostingResolverBase {
  constructor(
    protected readonly service: JobPostingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
