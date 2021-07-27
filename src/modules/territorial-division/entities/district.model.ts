import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { Municipality } from './municipality.model';
import { Section } from './section.model';

@Entity()
export class District extends BaseModel {
  @ManyToOne(() => Municipality, (municipality) => municipality.district)
  municipality: Municipality;

  @OneToMany(() => Section, (section) => section.district)
  section: Section;
}
