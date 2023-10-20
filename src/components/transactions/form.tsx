import InputText from "components/inputs/input-text";
import { TransactionData } from "@/models/transactions";
import { assetUrl } from "@/helpers/assets";

export default function TransactionForm(props: any) {
    function handleState(event: React.ChangeEvent<HTMLInputElement>) {
        props.setState((data: TransactionData) => {
            const newState = {...data};
            newState[event.target.name] = event.target.value;
            return newState
        });
    }

    if (props.visible ?? true) {
        return <>
            <div className="transaction__form">
                <div className="form__header">
                    <button onClick={props.onClose}>
                        <img src={ assetUrl('icons/x-close.svg') }/>
                    </button>
                    <span className="title">Create Transaction</span>
                </div>
                <div className="inner">
                    <InputText
                        title="Title"
                        placeholder="Payment of the day"
                        name="title"
                        state={props.state.title}
                        setState={handleState}
                    />
                    <InputText
                        title="Amount"
                        placeholder="$1200"
                        name="amount"
                        state={props.state.amount}
                        setState={handleState}
                    />
                </div>
            </div>
        </>
    }
}