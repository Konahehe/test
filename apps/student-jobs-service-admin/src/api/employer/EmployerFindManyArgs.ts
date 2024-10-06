import { EmployerWhereInput } from "./EmployerWhereInput";
import { EmployerOrderByInput } from "./EmployerOrderByInput";

export type EmployerFindManyArgs = {
  where?: EmployerWhereInput;
  orderBy?: Array<EmployerOrderByInput>;
  skip?: number;
  take?: number;
};
