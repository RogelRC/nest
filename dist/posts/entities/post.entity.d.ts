import { User } from '../../users/entities/user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    user: User;
}
