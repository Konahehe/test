import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployerService } from "./employer.service";
import { EmployerControllerBase } from "./base/employer.controller.base";

@swagger.ApiTags("employers")
@common.Controller("employers")
export class EmployerController extends EmployerControllerBase {
  constructor(
    protected readonly service: EmployerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
