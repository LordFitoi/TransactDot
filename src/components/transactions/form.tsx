import { InputText } from "components/inputs/input-text";
import { assetUrl } from "@/helpers/assets";

export default function TransactionForm(props: any) {
    const closeForm = () => {
        props.setVisible(false);
    }

    if (props.visible ?? true) {
        return <>
            <div className="transaction__form">
                <div className="form__header">
                    <button onClick={closeForm}>
                        <img src={ assetUrl('icons/x-close.svg') }/>
                    </button>
                    <span className="title">Create Transaction</span>
                </div>
                <div className="inner">
                    <InputText title="Title" placeholder="Payment of the day"/>
                </div>
            </div>
        </>
    }
}