import styles from '../styles/components/Header.module.css';

export function Header() {
    return (
        <div className={styles.container}>
            <div>
                <span>Olá, João!</span>
            </div>
            <div>
                <span>Saldo Corrente: R$ 100,00</span>
            </div>
        </div>
    );
}