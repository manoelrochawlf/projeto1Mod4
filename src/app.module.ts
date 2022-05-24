import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jogosModule } from './jogos/jogos.module';
import { generosModule } from './generos/generos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [jogosModule, generosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
