import YouTubeLogo from "../../assets/images/YouTube logo.png";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div>
                <img
                    className={`${styles.youtubeImg}`}
                    src={YouTubeLogo}
                    alt="YouTube Logo"
                />
            </div>
        </header>
    );
};

export default Header;
