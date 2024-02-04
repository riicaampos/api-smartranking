import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from './interface/jogador-interface';
import {v4 as uuid} from 'uuid'
import { JogadorDto } from './dto/jogador-dto';

@Injectable()
export class JogadoresService {

    private jogadores : Jogador[] = []; 

    private readonly logger = new Logger(JogadoresService.name);


    async criarAtualizarJogador(jogadorDto : JogadorDto) : Promise<void>{
      this.criarJogador(jogadorDto);
    }

    private criarJogador(jogadorDto : JogadorDto) :void{

        const {nome, email, telefoneCelular} = jogadorDto;

        const jogador = {
            _id: uuid(),
            telefoneCelular: telefoneCelular,
            email: email,
            nome: nome,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        }
        this.logger.log(JSON.stringify(jogador))
        this.jogadores.push(jogador)
    }

    async retornarJogador() : Promise<Jogador[]>{
        return this.jogadores;
    }

}
