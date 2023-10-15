import './styles.scss';

export default function Header(props: {title: string}) {

    return <>
        <header className="main__header">
            <button>
                <img src="/public/icons/flip-backward.svg"/>
            </button>
            <h1>{ props.title }</h1>
        </header>
    </>
}