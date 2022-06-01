import { Injectable } from '@nestjs/common';
import { UpdateJogosGeneroDto } from './dto/update-jogos_genero.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JogosGenero } from './entities/jogos_genero.entity';
import { Prisma, PrismaClient } from '@prisma/client';



@Injectable()
export class JogosGenerosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.jogosGeneros.findMany({
      select: {
        id: true,
        generosId: true,
        jogosId: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.jogosGeneros.findUnique({ where: { id },
    select: {
      id: true,
      generosId: true,
      jogosId: true
    }});
  }

  async update(id: string, dto: UpdateJogosGeneroDto) {
    await this.findOne(id);
    const data: Prisma.JogosGenerosUncheckedUpdateInput = { ...dto,
      generosId: dto.generosId,
      jogosId: dto.jogosId
    }

    return this.prisma.jogosGeneros.update({
      where: { id },
      data,
    });
  }


  async delete(id: string) {
    await this.prisma.jogosGeneros.delete({ where: { id } });
  }
}

