import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // Relación uno a muchos con Post
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // Relación uno a muchos con Product
  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
