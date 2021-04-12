import styles from '../../styles/components/LoginForm.module.css';
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {LoginContext} from "../../contexts/LoginProvider";
import {useHistory} from "react-router-dom";
import api from "../../services/api";

export function LoginForm() {
    const {register, handleSubmit} = useForm();
    const {updateState} = useContext(LoginContext);
    let history = useHistory();

    const onSubmit = async (data) => {
        await api.post('users/login', {...data}).then(response => {
            const {token, user_id} = response.data;

            updateState(token, user_id);

            history.push('/');
        }).catch((err) => {
            alert('Dados não cadastrados');
        })
    }

    const onRegister = async (data) => {
        alert("Em breve...");
    }

    return (
        <div className={styles.container}>
            <h1>
                Minhas finanças
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="user"><strong>E-mail:</strong></label>
                    <input type="text" id="email" name="email" ref={register}/>
                </div>
                <div>
                    <label htmlFor="password"><strong>Senha:</strong></label>
                    <input type="password" id="password" name="password" ref={register}/>
                </div>

                <div>
                    <button type="submit"><strong>Entrar</strong></button>
                    <button type="button" onClick={handleSubmit(onRegister)}><strong>Cadastrar</strong></button>
                </div>
            </form>
        </div>
    )
}