import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfilesJogoDto } from './dto/create-profiles_jogo.dto';
import { UpdateProfilesJogoDto } from './dto/update-profiles_jogo.dto';

@Injectable()
export class ProfilesJogosService {
  create(createProfilesJogoDto: CreateProfilesJogoDto) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profilesJogos.findMany({
      select: {
        id: true,
        profilesId: true,
        jogosId: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.profilesJogos.findUnique({ where: { id },
    select: {
      id: true,
      profilesId: true,
      jogosId: true
    }});
  }

  async update(id: string, dto: UpdateProfilesJogoDto) {
    await this.findOne(id);
    const data: Prisma.ProfilesJogosUncheckedUpdateInput = { ...dto,
      Profiles: dto.Profiles,
      Jogos: dto.Jogos
    }

    return this.prisma.profilesJogos.update({
      where: { id },
      data,
    });
  }


  async delete(id: string) {
    await this.prisma.profilesJogos.delete({ where: { id } });
  }
}
