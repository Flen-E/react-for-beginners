import PropTypes from "prop-types";

function MovieComp({coverImg, title, summary, genres}){
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <p>{summary}</p>
            <ul>
                {genres?.map((genres,index)=>{
                    <li key={index}>{genres}</li>
                })}
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