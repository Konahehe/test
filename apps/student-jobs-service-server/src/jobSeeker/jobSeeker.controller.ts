import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobSeekerService } from "./jobSeeker.service";
import { JobSeekerControllerBase } from "./base/jobSeeker.controller.base";

@swagger.ApiTags("jobSeekers")
@common.Controller("jobSeekers")
export class JobSeekerController extends JobSeekerControllerBase {
  constructor(
    protected readonly service: JobSeekerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
