/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicationUpdateManyWithoutInternshipsInput } from "./ApplicationUpdateManyWithoutInternshipsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { EmployerWhereUniqueInput } from "../../employer/base/EmployerWhereUniqueInput";
import { JobSeekerUpdateManyWithoutInternshipsInput } from "./JobSeekerUpdateManyWithoutInternshipsInput";

@InputType()
class InternshipUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationUpdateManyWithoutInternshipsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationUpdateManyWithoutInternshipsInput)
  @IsOptional()
  @Field(() => ApplicationUpdateManyWithoutInternshipsInput, {
    nullable: true,
  })
  applications?: ApplicationUpdateManyWithoutInternshipsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  duration?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployerWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployerWhereUniqueInput, {
    nullable: true,
  })
  employer?: EmployerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  employerAssociationForInternship?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  employerForInternship?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobSeekerUpdateManyWithoutInternshipsInput,
  })
  @ValidateNested()
  @Type(() => JobSeekerUpdateManyWithoutInternshipsInput)
  @IsOptional()
  @Field(() => JobSeekerUpdateManyWithoutInternshipsInput, {
    nullable: true,
  })
  jobSeekers?: JobSeekerUpdateManyWithoutInternshipsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stipend?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { InternshipUpdateInput as InternshipUpdateInput };
