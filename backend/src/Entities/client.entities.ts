import { Entity, Column, PrimaryColumn, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contacts } from "./contacts.entities";

@Entity()
export class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToMany((type) => Contacts, (client) => Client)
  contacts: Contacts[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ type: "bigint" })
  cellphone: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
