import {React, useState, useEffect, useRef} from 'react'
import Api from '../Services/Api';

const movieImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

function HorizontalMovieList({title}) {
    const [movieList, setMovieList]=useState([]);
    // const [current, setCurrent] = useState(0);
    const elementRef = useRef();

    useEffect(()=>{
        getUpcominggMovies();
    },[])
  
    const getUpcominggMovies=()=>{
        Api.getUpcominggMovies().then(resp=>{
            setMovieList(resp);
        })
    }

    function sliderLeft(element){
        element.scrollLeft-=1000;
    }
    
    function sliderRight(element){
        element.scrollLeft+=1000;
    }

    return (
        <div className='my-5'>
            <h3 className='font-bold text-lg'>{title}</h3>
            <div className="flex relative">
                <div className='flex absolute z-20 h-full top-0'>
                    <span className='-ml-5 my-auto h-10 w-10 rounded-full flex justify-center items-center bg-white transition-all duration-700 shadow-lg hover:cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}>
                        <i className='fa fa-chevron-left'></i>
                    </span>
                </div>
                <div ref={elementRef} className='flex overflow-x-auto gap-6 py-5 scrollbar-hide scroll-smooth'>
                    {movieList.map((item, index)=>(
                        <div key={index} className="min-w-[300px] bg-white shadow-md overflow-hidden rounded-lg hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
                            <img src={movieImageBaseUrl+item.backdrop_path} alt="" className='' />
                            <div className='pt-2 px-2'>
                                <h3 className='text-md font-bold mt-1'>{item.title}</h3>
                                <p className='text-sm line-clamp-2 text-ellipsis overflow-hidden mt-1'>{item.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex absolute z-20 h-full top-0 -right-2'>
                    <span className='ml-5 my-auto h-10 w-10 rounded-full flex justify-center items-center bg-white transition-all duration-700 shadow-lg hover:cursor-pointer' onClick={()=>sliderRight(elementRef.current)}>
                        <i className='fa fa-chevron-right'></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HorizontalMovieList