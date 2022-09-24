import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entities";

@Entity()
export class Contacts {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Client, (contacts) => Contacts, { eager: true })
  client: Client;

  @Column()
  name: string;

  @Column({nullable: true})
  email: string;

  @Column({type: "bigint", nullable: true})
  cellphone: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
