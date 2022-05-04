const MovieCard = (props) => {
    return ( 
        <div className="flex flex-col justify-items-center shadow-2xl shadow-gray-900 my-16 rounded-xl">
                <img className="w-3/12 flex mx-auto my-8 rounded-lg" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}alt={props.movie.title + ' poster'}/>
                <div>
                    <h2 className="text-2xl font-bold px-8 my-4">{props.movie.title}</h2>
                    <p className="px-8 mb-4"><small>RELEASE DATE: {props.movie.release_date}</small></p>
                    <p className="px-8 mb-4"><small>RATING: {props.movie.vote_average}</small></p>
                    <p className="px-8 mb-8">{props.movie.overview}</p>
                </div>
            </div>
     );
}
 
export default MovieCard;