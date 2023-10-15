import './styles.scss';
import { assetUrl } from '@/helpers/assets';

export default function Header(props: {title: string}) {
    return <>
        <header className="main__header">
            <button>
                <img src={ assetUrl('icons/flip-backward.svg') }/>
            </button>
            <h1>{ props.title }</h1>

            <button className="menu">
                <img src={ assetUrl('icons/menu-04.svg') }/>
            </button>
        </header>
    </>
}