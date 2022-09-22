export interface ICreateClient {
  name: string;
  email: string;
  cellphone: number;
  password: string;
  isAdmin: boolean;
}
export interface ILoginClient {
  email: string;
  password: string;
}

export interface IUpdateClient {
  id: string;
  name: string;
  email: string;
  cellphone: number;
}

export interface IClient {
  name: string;
  email: string;
  cellphone: number;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateContact {
  id: string;
  name: string;
  email: string;
  cellphone: number;
}
export interface IUpdateContact {
  id: string;
  name: string;
  newName: string;
  newEmail: string;
  newCellphone: number;
}
