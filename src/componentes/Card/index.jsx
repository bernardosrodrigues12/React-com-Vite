import './styles.css';
import Capa from './assets/Code editor.svg'
import Icone from './assets/Icon.png';
import Code from './assets/code (1).png';
import Chat from './assets/chat.png';
import Share from './assets/share.png';

export default function Card() {
    return(
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt='imagem do post' />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Título do post</h3>
                    <p>Resumo do post</p>
                </div>
            </div>

            <div className="conteudo__rodape">
                <ul>
                    <li>
                        <img src={Code} alt="códigos" />
                        100
                    </li>
                    <li>
                        <img src={Share} alt="compartilhamentos" />
                        12
                    </li>
                    <li>
                        <img src={Chat} alt="comentários" />
                        10
                    </li>
                </ul>

                <div className="rodape__usuario">
                    <img src={Icone} alt='Icone do usuario'/>
                    @Ender
                </div>
            </div>
        </article>
    )
}