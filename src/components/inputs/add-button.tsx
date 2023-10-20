import { assetUrl } from "@/helpers/assets";
import './styles.scss';

export default function AddButton(props: {action: any}) {
    return <>
        <button className="add" onClick={props.action}>
            <img src={assetUrl('icons/plus.svg')}/>
        </button>
    </>
}