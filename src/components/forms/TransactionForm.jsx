import styles from '../../styles/components/TransactionForm.module.css';
import {useForm} from "react-hook-form";

const isNumberKey = async (evt) => {
    let keyCode = (evt.keyCode ? evt.keyCode : evt.which);
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        evt.preventDefault();
    }
}

const normalizeValue = (value) => {
    let newValue = value;

    if (newValue.indexOf('R$') !== -1) {
        newValue = newValue.slice(3)
    }

    newValue = newValue.replace(',', '');
    newValue = String(parseInt(newValue));

    if (newValue.length > 2) {
        newValue = `${newValue.substring(0, newValue.length - 2)},${newValue.substring(newValue.length - 2, newValue.length)}`;
    } else {
        newValue = `0,${newValue}`
    }

    return `R$ ${newValue}`;
}

export function TransactionForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(JSON.stringify(data));

    const types = [
        'Comida',
        'Carro',
        'Supermecado',
        'Apartamento',
        'Telefone',
        'Carteira',
        'Salário',
        'ifood',
        'Picpay',
        'Divida',
        'Transporte',
        'Stream',
        'Presente',
        'Outro'
    ].sort();


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="type" defaultValue={''} ref={register}>
                    <option value="">Selecione o tipo da transação...</option>
                    {
                        types.map((type, index) => <option key={index} value={type}>{type}</option>)
                    }
                </select>

                <input type="date" name="date" ref={register}/>

                <input
                    name="value"
                    ref={register}
                    type="text"
                    placeholder="Digite o valor..."
                    onKeyPress={event => isNumberKey(event)}
                    onChange={(event) => {
                        const {value} = event.target;
                        event.target.value = normalizeValue(value);
                    }}
                />

                <input name="description" ref={register} placeholder="Insira uma descrição..."/>

                <button type="submit"><strong>Enviar</strong></button>

            </form>
        </div>
    )
}