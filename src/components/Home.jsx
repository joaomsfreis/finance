import styles from "../styles/pages/Home.module.css"
import {Header} from "./Header";
import {TransactionForm} from "./forms/TransactionForm";
import {Footer} from "./Footer";

export function Home() {
    return (
        <div className={styles.container}>
            <Header/>
            <section>
                <div>
                    <TransactionForm/>
                </div>
                <div>

                </div>
            </section>
            <Footer/>
        </div>
    );
}