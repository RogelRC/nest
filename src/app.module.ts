import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'RogelRC02*.*',
      database: 'publicaciones_productos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    ProductsModule,
  ],
})
export class AppModule {}
