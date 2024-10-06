import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InternshipModuleBase } from "./base/internship.module.base";
import { InternshipService } from "./internship.service";
import { InternshipController } from "./internship.controller";
import { InternshipResolver } from "./internship.resolver";

@Module({
  imports: [InternshipModuleBase, forwardRef(() => AuthModule)],
  controllers: [InternshipController],
  providers: [InternshipService, InternshipResolver],
  exports: [InternshipService],
})
export class InternshipModule {}
