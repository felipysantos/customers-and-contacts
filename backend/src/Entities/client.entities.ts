import { Entity, Column, PrimaryColumn, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contacts } from "./contacts.entities";

@Entity()
export class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string;

  @Column({ type: "date" })
  created_at: Date;

  @OneToMany((type) => Contacts, (contacts) => contacts)
  @JoinTable()
  contacts: Contacts[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
