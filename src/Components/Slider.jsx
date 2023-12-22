import {React, useState, useEffect} from 'react'
import Api from '../Services/Api';
import GenreList from '../Constant/GenreList';

const movieImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

function Slider() {
    const [movieList, setMovieList]=useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
  
    const getNowPlayingMovies=()=>{
        Api.getNowPlayingMovies().then(resp=>{
            setMovieList(resp);
        })
    }

    function getGenreByIds(ids) {
        const results = GenreList.genere.filter(item => ids.includes(item.id));
        const namas =  results.map(item => item.name);
        return namas.join(', ');
    }
    
    function slideLeft(){
        setCurrent(current == 0 ? movieList.length - 1 : current - 1);
    }
    
    function slideRight(){
        setCurrent(current == movieList.length-1? 0 : current + 1);
    }


    return (
        <div className='w-full h-[480px] relative group bg-slate-900'>
            <div className='flex absolute z-20 h-full w-24 top-0'>
                <span className='mx-auto my-auto h-10 w-10 rounded-full flex justify-center items-center bg-white transition-all duration-700 opacity-0 group-hover:opacity-20 hover:cursor-pointer hover:opacity-100 shadow-lg' onClick={slideLeft}>
                    <i className='fa fa-chevron-left'></i>
                </span>
            </div>
            {movieList.map((item, index)=>current==index&&(
                <>
                    <div key={index} className='h-[480px] w-4/5 lg:w-5/6 absolute z-10 bg-gradient-to-r from-slate-950 via-slate-900 flex'>
                        <div className='self-center text-white w-1/2 pl-36'>
                            <h1 className='font-extrabold uppercase text-4xl line-clamp-2 text-ellipsis overflow-hidden'>{item.title}</h1>
                            <p className='mt-4 font-medium line-clamp-3 text-ellipsis overflow-hidden'>{item.overview}</p>
                            <div className='flex items-center mt-5 gap-3'>
                                <i className='fa fa-star bg-yellow-500 p-1 rounded-full'></i>
                                <h5 className='text-md text-slate-500 font-semibold uppercase'>{getGenreByIds(item.genre_ids)}</h5>
                            </div>
                            <button className='px-7 py-2 mt-5 bg-primary rounded-full font-bold hover:cursor-pointer'><i className='fa fa-play mr-5'></i>Cek Sekarang</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src={movieImageBaseUrl+item.backdrop_path} alt="" className='h-[480px] absolute top-0 right-0' />    
                    </div>
                </>
            ))}
            <span className='left-36 top-[420px] w-1/2 flex relative z-20'>
                {movieList.map((item, index)=>(
                    <i key={index} className={`fa fa-circle text-white ${current==index?'opacity-100':'opacity-40'} scale-50 hover:scale-75 transition-all duration-200 hover:cursor-pointer`} onClick={()=>setCurrent(index)}></i>
                ))}
            </span>
            <div className='flex absolute z-20 h-full w-24 top-0 right-0'>
                <span className='mx-auto my-auto h-10 w-10 rounded-full flex justify-center items-center bg-white transition-all duration-300 opacity-0 group-hover:opacity-20 hover:cursor-pointer hover:opacity-100 shadow-lg' onClick={slideRight}>
                    <i className='fa fa-chevron-right'></i>
                </span>
            </div>
        </div>
    )
}

export default Slider