import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST, // Cambia según tu configuración
      port: parseInt(process.env.DB_PORT), // Puerto de PostgreSQL
      username: process.env.DB_USERNAME, // Usuario de la base de datos
      password: process.env.DB_PASSWORD, // Contraseña de la base de datos
      database: process.env.DB_NAME, // Nombre de la base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo; en producción, usa migraciones
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
