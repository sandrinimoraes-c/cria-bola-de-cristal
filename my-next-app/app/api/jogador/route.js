import {NextResponse} from 'next/server';


const database = [
        {id: 1, nome: 'Pelé', gols: 1281, assistencias: 500, posicao: 'Atacante'},
        {id: 2, nome: 'Diego Maradona', gols: 345, assistencias: 200, posicao: 'Meia'},
        {id: 3, nome: 'Lionel Messi', gols: 750, assistencias: 300, posicao: 'Atacante'},
        {id: 4, nome: 'Cristiano Ronaldo', gols: 800, assistencias: 250, posicao: 'Atacante'},
]

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const nome = searchParams.get('nome'); 

    if (!nome) {
        return NextResponse.json({ error: 'Nome do jogador é obrigatório' }, { status: 400 });
    }   

    const nomeBusca = nome.toLowerCase(). trim();

    const jogador = database.find(jogador => jogador.nome.toLowerCase().trim() === nomeBusca);

    if (!jogador) {
        return NextResponse.json({ error: 'Jogador não encontrado' }, { status: 404 });
    }

    return NextResponse.json(jogador);

}