import {useState,useEffect} from 'react';
import MovieComp from '../components/MovieComp'

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () =>{
        const json = await(
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.2&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[])
    console.log(movies);

    // useEffect(()=>{
    //     fetch(
    //         `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    //         ).then(
    //             (response) => response.json()
    //         ).then(
    //              (json) => {
    //                 setMovies(json.data.movies);
    //                 setLoading(false);
    //              }
    //         );

    // },[])
    // console.log(movies);

    return(
        <div>
            {loading ?(
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie)=>(
                        <MovieComp key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
                    ))}
                </div>
            )}
        </div>
       
    );


}
export default Home;