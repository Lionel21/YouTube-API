import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import useFetchData from "../../hooks/useFetchData";
import Search from "./components/search/Search";
import Loading from "../../components/loading/Loading";
import styles from "./Homepage.module.scss";

const Homepage = () => {
    const [videos, setVideos] = useState([]);
    const [filter, setFilter] = useState("");
    const BASE_URL_API = useContext(ApiContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${BASE_URL_API}?part=snippet&playlistId=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                console.log("response", response);
                if (response.ok) {
                    const newData = await response.json();
                    setVideos(newData.items);
                } else {
                    alert(`Oops! Error! ${response.status}`);
                }
            } catch (e) {
                alert(`Oops! Error! ${e.message}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [BASE_URL_API]);

    return (
        <div className={`d-flex flex-column flex-fill container p-20`}>
            <h1 className={`my-3`}>Formation TypeScript - Grafikart</h1>
            <div className={`d-flex flex-column flex-fill card`}>
                <Search setFilter={setFilter} />
                {isLoading && !videos.length ? (
                    <Loading />
                ) : (
                    <div className={`${styles.grid} mt-3`}>
                        {videos
                            .filter(item => item.snippet.title.toLowerCase().includes(filter.toLowerCase()))
                            .map((item) => {
                            console.log(item);
                                const { id, snippet } = item;
                                const { title, channelTitle, thumbnails, resourceId } = snippet;
                                const { medium } = thumbnails;
                                return (
                                    <div key={id} className={styles.video}>
                                        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                            <div className={styles.imageContainer}>
                                                <img src={medium.url} alt={title} />
                                            </div>
                                            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.recipeTitle}`}>
                                                <h3 className={`${styles.title} mb-2`}>{title}</h3>
                                            </div>
                                        </a>
                                    </div>
                                    // <li key={id} className={`${styles.card}`}>
                                    //     <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                    //         <p>
                                    //             <img src={medium.url} />
                                    //         </p>
                                    //         <h3>{title}</h3>
                                    //         <p>{channelTitle}</p>
                                    //     </a>
                                    // </li>
                                );
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Homepage;
