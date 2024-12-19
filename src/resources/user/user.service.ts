import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    const {username, email, password}= createUserDto
    const emailExist = await this.userRepository.findOne({where:{email}})

    if (emailExist) {
      return `Email is already in use`
    }
    
    const newUser= this.userRepository.create({
      username,
      password,
      email
    })

    const savedUSer= await this.userRepository.save(newUser)   
    if (savedUSer) {
      return  `Success creating user ${savedUSer.username}`
    }
    return 'no'
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
