import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { HelloModule } from './user/usermodule';
   import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [HelloModule, ConfigModule.forRoot(),],
  controllers: [AppController, UserController,],
  providers: [AppService],
})
export class AppModule {}
