import './styles.scss';

export default function InputText(props: any) {
    return <>
        <label className="input">
            <span>{ props.title ?? 'Email' }</span>
            <div className="inner">
                <input
                    type={props.type ?? 'text'}
                    placeholder={props.placeholder ?? 'olivia@untitledui.com'}
                    name={props.name}
                    value={props.state}
                    onChange={props.setState}
                />
            </div>
        </label>
    </>
}