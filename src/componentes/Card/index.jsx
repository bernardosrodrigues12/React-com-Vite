import './styles.css';
import Capa from './assets/Code editor.svg'
import Icone from './assets/Icon.png';
import Code from './assets/code (1).png';
import Chat from './assets/chat.png';
import Share from './assets/share.png';

export default function Card({ imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return(
        <article className="card">
            <div className="card__imagem">
                <img src={imagemUrl} alt='imagem do post' />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
            </div>

            <div className="conteudo__rodape">
                <ul>
                    <li>
                        <img src={Code} alt="códigos" />
                        {linhasDeCodigo}
                    </li>
                    <li>
                        <img src={Share} alt="compartilhamentos" />
                        {compartilhamentos}
                    </li>
                    <li>
                        <img src={Chat} alt="comentários" />
                        {comentarios}
                    </li>
                </ul>

                <div className="rodape__usuario">
                    <img src={usuario.imagem} alt='Icone do usuario'/>
                    {usuario.nome}
                </div>
            </div>
        </article>
    )
}