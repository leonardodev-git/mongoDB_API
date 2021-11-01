import { UserController } from './user.controller';
import { UserService } from './shared/user.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
