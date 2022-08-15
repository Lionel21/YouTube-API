import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={`${styles.footer} p-3 position-sticky fixed-bottom`}>
            <p className={`mt-0 mb-0`}>Exercice technique 2022 CentralPay (Tours) - Lionel Delamare - août 2022</p>
        </footer>
    );
};

export default Footer;
