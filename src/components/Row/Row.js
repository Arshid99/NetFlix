import React, {useState,useEffect} from 'react'; 
import "./Row.css"
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({title,fetchUrl, isLargeRow}) =>{
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  console.log("process.env.REACT_APP_API",process.env.REACT_APP_API);
  useEffect(() =>{
    const fetchData = async ()=>{
      const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
      setMovies(response.data.results);
      return response;
    };

    fetchData();
  },[])

  //  console.log("movies",movies)

  const handleClick = (movie) =>{
    if(trailerUrl) {
      setTrailerUrl("")
    }else {
      movieTrailer(movie?.name || "")
      .then ((url) => {
         const urlParams = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get("v"))
      })
      .catch((error) => console.log(error));
    }
  };

  const opts = {
    height:"930",
    width:"100%",
    playerVars:{
      autoPlay:1,
    }
  }

 return(
  <div className="row">
    <h2>{title}</h2>
    <div className="row-posters">
      {movies && movies.map((movie) =>(
        <img onClick={() => handleClick(movie)} key={movie.id} className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
      ))}
    </div>
    {trailerUrl && < Youtube videoId={trailerUrl} opts={opts}/>}
  </div>
 )
};

export default Row;
