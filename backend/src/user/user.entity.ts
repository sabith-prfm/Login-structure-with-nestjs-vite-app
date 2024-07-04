import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

export default User;
