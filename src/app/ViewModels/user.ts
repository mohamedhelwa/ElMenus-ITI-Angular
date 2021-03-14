
export interface Roles {
    admin?:boolean;
    normalUser?:boolean;
}

export interface User {
    uid?: string;
    email?: string;
    address?:string;
    name?: string;
    roles?:Roles;
  }