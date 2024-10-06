import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InternshipService } from "./internship.service";
import { InternshipControllerBase } from "./base/internship.controller.base";

@swagger.ApiTags("internships")
@common.Controller("internships")
export class InternshipController extends InternshipControllerBase {
  constructor(
    protected readonly service: InternshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
