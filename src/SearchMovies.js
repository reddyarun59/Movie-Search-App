import {useState} from "react"
import MovieCard from "./MovieCard"
const SearchMovies = () => {

    const [query, setQuery]=useState("")
    const [movies, setMovies]=useState([])
    const movieSearch=(e)=>{
        setQuery(e.target.value)
    }

    const searchMovies=async(e)=>{
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d793c427a2e2741407b66dbfb550cbb7&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res=await fetch(url)
            const data=await res.json()
            setMovies(data.results)
            console.log(data.results)
        }catch(err){
            console.error(err)
        }
    }
    return (
    <div className="flex flex-col">
         <form onSubmit={searchMovies} className="mx-auto">
        <label htmlFor="query" className="text-violet-700">Movie Name</label>
        <input className="rounded-2xl shadow-sm shadow-gray-500 py-2 px-8 font-semibold text-slate-600 mx-2" type="text" name="query" placeholder="i.e Avengers" value={query} onChange={movieSearch}></input>
        <button className="rounded-full bg-purple-400 text-gray-700 py-2 px-4" type="submit">Search</button>
    </form>
    <div>
        {movies.filter(movie=>movie.poster_path).map(movie=>(
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </div> );
}
 
export default SearchMovies;