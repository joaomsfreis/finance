
import {useForm} from "react-hook-form";

export function Login() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div style={{background: '#ffffff'}}>
            <div>
                Minhas finanças
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="user">E-mail</label>
                    <input type="text" id="user" name="user" ref={register}/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" ref={register}/>
                </div>

                <button type="submit"><strong>Entrar</strong></button>
            </form>
        </div>
    );
}