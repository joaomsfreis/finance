import {TransactionForm} from "./components/forms/TransactionForm";
import styles from "./styles/pages/Home.module.css"
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
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
  
  export default App;