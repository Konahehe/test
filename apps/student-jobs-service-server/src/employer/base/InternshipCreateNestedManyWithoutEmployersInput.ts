/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InternshipWhereUniqueInput } from "../../internship/base/InternshipWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InternshipCreateNestedManyWithoutEmployersInput {
  @Field(() => [InternshipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InternshipWhereUniqueInput],
  })
  connect?: Array<InternshipWhereUniqueInput>;
}

export { InternshipCreateNestedManyWithoutEmployersInput as InternshipCreateNestedManyWithoutEmployersInput };
