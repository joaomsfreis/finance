import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return (
        <div className={styles.container}>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-reis-675044a4/" rel="noopener noreferrer" target="_blank">Linkedin</a>
            <a href="https://github.com/joaomsfreis" rel="noopener noreferrer" target="_blank">Github</a>
            <a href="https://www.facebook.com/joaomarcos.soares.9/" rel="noopener noreferrer" target="_blank">Facebook</a>
        </div>
    );
}