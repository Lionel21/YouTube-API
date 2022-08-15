import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={`d-flex flex-row align-items-center justify-content-center p-3 ${styles.footer}`}>
            <p className={`mt-0 mb-0`}>Entretien technique 2022 CentralPay (Tours) - Lionel Delamare</p>
        </footer>
    );
};

export default Footer;
