import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobSeekerModuleBase } from "./base/jobSeeker.module.base";
import { JobSeekerService } from "./jobSeeker.service";
import { JobSeekerController } from "./jobSeeker.controller";
import { JobSeekerResolver } from "./jobSeeker.resolver";

@Module({
  imports: [JobSeekerModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobSeekerController],
  providers: [JobSeekerService, JobSeekerResolver],
  exports: [JobSeekerService],
})
export class JobSeekerModule {}
