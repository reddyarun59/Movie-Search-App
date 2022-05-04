import SearchMovies from './SearchMovies'
const App = () => {
  return ( 
          <div className="box-border container mx-auto mt-24">
            <h1 className="flex justify-center text-4xl font-extrabold mb-8">Movie Search App</h1>
            <SearchMovies className="mx-auto"/>
          </div> );
}
 
export default App;