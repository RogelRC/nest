import { Post } from '../../posts/entities/post.entity';
import { Product } from '../../products/entities/product.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    posts: Post[];
    products: Product[];
}
