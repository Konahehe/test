import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobPostingModuleBase } from "./base/jobPosting.module.base";
import { JobPostingService } from "./jobPosting.service";
import { JobPostingController } from "./jobPosting.controller";
import { JobPostingResolver } from "./jobPosting.resolver";

@Module({
  imports: [JobPostingModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobPostingController],
  providers: [JobPostingService, JobPostingResolver],
  exports: [JobPostingService],
})
export class JobPostingModule {}
