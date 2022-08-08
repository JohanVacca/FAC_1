import { ProfileModel } from '../../@core/old-models/profile.model';
import { RoleModel } from './role.model';

export interface UserModel {
  _id?: string;
  role?: RoleModel | string;
  isActive?: boolean;
  isUser?: boolean;
  docType?: string;
  identification?: number;
  email?: string;
  profile?: ProfileModel;
  password?: string;
  phoneNumber?: string;
  dependency?: string;
  codeNumber?: string;
  positionName?: string;
}
