import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entities";

@Entity()
export class Contacts {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Client, (client) => client.id)
  clientId: Client;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
