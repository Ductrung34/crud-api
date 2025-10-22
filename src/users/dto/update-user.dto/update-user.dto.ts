import { IsOptional, IsInt, IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsPhoneNumber('VN') // hoặc 'ZZ' nếu không rõ quốc gia
    phone?: string;

    @IsOptional()
    @IsString()
    address?: string;
}
