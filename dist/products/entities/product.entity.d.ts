import { User } from '../../users/entities/user.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    user: User;
}
