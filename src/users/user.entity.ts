import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'CRUD' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false }) // ✅ Không cho phép null
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: true }) // ✅ Cho phép null nếu cần
    phone: string;

    @Column({ nullable: true })
    address: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
}
