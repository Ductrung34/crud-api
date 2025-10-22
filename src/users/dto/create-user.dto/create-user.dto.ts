import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    address?: string;
}
