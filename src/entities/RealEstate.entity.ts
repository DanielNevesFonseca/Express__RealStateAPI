import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./Schedule.entity";
import { Address } from "./Address.entity";
import { Category } from "./Category.entity";

@Entity("realEstates")
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("boolean", { default: false })
  sold: boolean;

  @Column("numeric", { precision: 12, scale: 2, default: 0})
  value: number | string;

  @Column("integer")
  size: number;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;

  // Relacionamento 1:N -- realEstate : schedules
  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];

  // Relacionamento de 1:1 com address
  @OneToOne(() => Address, (address) => address.realEstate)
  // Nos relacionamentos 1:1, o @JoinColumn identifica em qual tabela ficará o FK
  @JoinColumn()
  address: Address;

  // Relacionamento de N:1 com categories
  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category
}
