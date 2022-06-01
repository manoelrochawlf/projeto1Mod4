import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfilesDto {

  @IsString()
  @ApiProperty({
    description: 'Titulo do perfil',
    example: 'Maxsuel',
  })
  Title: string;

  ProfileJogos?:string[]
  userId: string

  @IsString()
  @ApiProperty({
    description: 'ImageURL',
    example: 'ihidsfhttps://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg',
  })
  ImageURL: string;

}
