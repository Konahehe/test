import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobPostingService } from "./jobPosting.service";
import { JobPostingControllerBase } from "./base/jobPosting.controller.base";

@swagger.ApiTags("jobPostings")
@common.Controller("jobPostings")
export class JobPostingController extends JobPostingControllerBase {
  constructor(
    protected readonly service: JobPostingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
