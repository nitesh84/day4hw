
import './App.css'
import Cards from './Cards/Cards'
import { MovieCards } from './MovieCards/MovieCards';
import data from './utilites/data'
import movieList from './utilites/movies';


function App() {
 

  return (
    <main>
      <h1>Colors</h1>
      <div className="top">
        {data.colors.map((color,index)=>{
          // console.log(color);
          
          return  <Cards key={index} data={color}  />
        })}
      </div>
    
        <h1>Movies</h1>
    <div className="bottom">
      {
        movieList.map((movie)=>{
         return <MovieCards movie={movie} />
        })
      }
    </div>


    </main>
  )
}

export default App
