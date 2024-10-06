import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployerModuleBase } from "./base/employer.module.base";
import { EmployerService } from "./employer.service";
import { EmployerController } from "./employer.controller";
import { EmployerResolver } from "./employer.resolver";

@Module({
  imports: [EmployerModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployerController],
  providers: [EmployerService, EmployerResolver],
  exports: [EmployerService],
})
export class EmployerModule {}
