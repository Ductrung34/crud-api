import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) { }

    findAll() {
        return this.repo.find();
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    create(data: Partial<User>) {
        return this.repo.save(data);
    }

    async update(id: number, data: Partial<User>) {
        const user = await this.repo.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        Object.assign(user, data);
        return this.repo.save(user);
    }

    remove(id: number) {
        return this.repo.delete(id);
    }
}
