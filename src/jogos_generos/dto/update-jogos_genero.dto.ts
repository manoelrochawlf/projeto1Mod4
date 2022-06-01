import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"


export class UpdateJogosGeneroDto {

  @IsString()
  id?: string

  @IsString()
  @ApiProperty({
    description: 'ID de Gênero',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  generosId?: string[]

  @IsString()
  @ApiProperty({
    description: 'ID de Jogos',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  jogosId: string[]
}

