import styles from "../styles/pages/Login.module.css";
import {Footer} from "./Footer";
import {LoginForm} from "./forms/LoginForm";

export function Login() {
    return (
        <div className={styles.container}>
            <section>
                <LoginForm/>
            </section>
            <Footer/>
        </div>
    );
}