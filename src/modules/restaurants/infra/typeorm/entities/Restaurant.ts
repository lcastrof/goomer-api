import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('restaurants')
class Restaurant {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  photo: string;

  @Column()
  name: string;

  @Column('json')
  address: {
    public_place: string;
    number: number;
    district: string;
    city: string;
    state: string;
    complement?: string;
  };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Restaurant;
