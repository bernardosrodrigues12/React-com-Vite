import Logo from './assets/Logo/Logo.svg'
import Feed from './assets/ícones/SVG/assignment.svg'
import Perfil from './assets/ícones/SVG/person.svg'

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt='Logo do CodeConnect'/>
            <nav>
                <ul>
                    <li>
                        <a href="#">Publicar</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Feed} alt=""/>
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="." alt="" />
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="" alt="" />
                            <span></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}