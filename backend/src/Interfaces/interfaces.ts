export interface ICreateClient {
  name: string;
  email: string;
  cellphone: string;
}

export interface IClient {
  name: string;
  email: string;
  cellphone: string;
  created_at: Date;
}
