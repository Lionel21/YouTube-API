import styles from "./Search.module.scss";

const Search = ({ setFilter }) => {

    const handleInput = (e) => {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    };

    return (
        <div className={`d-flex flex-row justify-content-center align-items-center ${styles.searchBar}`}>
            <i className={`fa-solid fa-magnifying-glass ml-5`} />
            <input
                onInput={handleInput}
                className={`flex-fill`}
                type="text"
                placeholder="Rechercher"
            />
        </div>
    );
};

export default Search;
