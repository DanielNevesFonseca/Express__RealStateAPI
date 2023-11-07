import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";

// todos os @decorators são referentes às tabelas a serem gravadas no BD

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 45 })
  street: string;

  @Column("varchar", { length: 8 })
  zipCode: string;

  @Column("integer")
  number: number;

  @Column("varchar", { length: 20 })
  city: string;

  @Column("varchar", { length: 2 })
  state: string;

  // Relacionamento 1:1 onde 
  @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
  realEstate: RealEstate;
}
