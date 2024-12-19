import { IsNotEmpty, IsUUID, IsString, IsEmail, Length, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
