import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  identifier: string;
}
