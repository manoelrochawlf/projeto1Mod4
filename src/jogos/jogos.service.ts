import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { UpdateJogosDto } from './dto/update-jogos.dto';
import { Jogos } from './entities/jogos.entity';

@Injectable()
export class jogosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Jogos[]> {
    return this.prisma.jogos.findMany();
  }

  findOne(id: string) {
    return this.prisma.jogos.findUnique({ where: { id }});
  }

  create(dto: CreateJogosDto){
    const data: Jogos = { ...dto };

    return this.prisma.jogos.create({ data });
  }
  update(id: string, dto: UpdateJogosDto){
    const data: Partial<Jogos> = { ...dto };

    return this.prisma.jogos.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.jogos.delete({ where: { id } });
  }
}


