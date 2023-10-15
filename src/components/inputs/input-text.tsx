import './styles.scss';

export function InputText(props: any) {
    return <>
        <label className="input">
            <span>{ props.title ?? 'Email' }</span>
            <div className="inner">
                <input type="text" placeholder={props.placeholder ?? 'olivia@untitledui.com'}/>
            </div>
        </label>
    </>
}