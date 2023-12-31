import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieComp({coverImg, title, summary, genres}){
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to="/movie">
                    {title}
                </Link>
                </h2>
            <p>{summary}</p>
            <ul>
                {genres?.map((genres)=>(
                    <li key={genres}>{genres}</li>
                ))}
            </ul>
        </div>
    );

}
MovieComp.propTypes ={
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieComp;