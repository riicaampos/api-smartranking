import { Body, Controller, Get, Post } from '@nestjs/common';
import { JogadorDto } from './dto/jogador-dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interface/jogador-interface';

@Controller('api/v1/jogadores')
export class JogadoresController {


  constructor(private readonly jogadoresService : JogadoresService) {}


  @Post()
  async criarAtualizarJogador(@Body() jogadorDto : JogadorDto){
     await this.jogadoresService.criarAtualizarJogador(jogadorDto);
   }

  @Get()
  async retornarJogador() : Promise<Jogador[]>{
     return this.jogadoresService.retornarJogador();
  } 

}
