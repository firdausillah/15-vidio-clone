import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Header() {
    const [isSearchInputFocus, setIsSearchInputFocus] = useState(false);
    const [scrolltopdata, setScrolltopdata] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setScrolltopdata(false);
            } else {
                setScrolltopdata(true);
            }
        });
    }, [])
    

    function btnSearchInputFocus() {
        setIsSearchInputFocus(!isSearchInputFocus)
    }

    return (
        <header className={`top-0 left-0 w-full flex items-center z-[9999] transition-all duration-300 px-2 fixed ${scrolltopdata?' bg-white shadow-md':'from-slate-900 bg-gradient-to-b'}`}>
            <div className="w-full h-14 px-2 mx-auto flex flex-wrap content-center">
                <div className='flex gap-4 z-20 flex-grow'>
                    <div>
                        <img src={`${scrolltopdata?'https://thumbor.prod.vidiocdn.com/tb0nxP2XPAfH8ZRlEPYByCQM3DE=/filters:quality(70)/vidio-media-production/uploads/image/source/81/b1a2d7.png':'https://thumbor.prod.vidiocdn.com/vRe7TUX_utWGYlzoLFZoGyyxtvs=/filters:quality(70)/vidio-media-production/uploads/image/source/83/7fb214.png'}`} alt="logo" className='h-10' />
                    </div>
                    <nav>
                        <ul className={`flex ${scrolltopdata?'text-slate-950':'text-white'} text-sm`}>
                            <li className="group flex items-center">
                                <span className='rounded-full bg-primary w-2 h-2'></span>
                                <a href="#" className="font-semibold py-2 mx-2 flex">Live</a>
                            </li>
                            <li className="group">
                                <a href="#" className="font-semibold py-2 mx-2 flex">Home</a>
                            </li>
                            <li className="group">
                                <a href="#" className="font-semibold py-2 mx-2 flex">Sports</a>
                            </li>
                            <li className="group">
                                <a href="#" className="font-semibold py-2 mx-2 flex">TV Show</a>
                            </li>
                            <li className="group">
                                <a href="#" className="font-semibold py-2 mx-2 flex">Movies</a>
                            </li>
                            <li className="group">
                                <a href="#" className="font-semibold py-2 mx-2 flex">Series</a>
                            </li>
                            <li className="group hover:relative flex items-center">
                                <a href="#" className="font-semibold py-2 mx-2 flex menu-hover">Lainnya</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className='fill-current -ml-1' height="13" width="10" viewBox="0 0 320 512">
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                </svg>
                                <div className='invisible group-hover:visible absolute z-20 mt-0 p-2 max-w-[300px] w-[250px] bg-white text-slate-800 top-full left-0 rounded-xl'>
                                    <ul>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Kids</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Premier</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>For You</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Anime</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Music</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>News</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Entertainment</li></a>
                                        <a href='#' target='_blank'><li className='my-4 border-b p-2 font-semibold hover:opacity-30'>Live Style</li></a>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex relative w-[250px] mr-6 items-center focus-within:items-start">
                    <div className='absolute rounded-md overflow-hidden bg-opacity-40 bg-white w-full my-auto px-4 focus-within:bg-white'>
                        <div className='flex focus-within:border-b-2'>
                            <input type="text" id='searchInputFocus' className={`w-full bg-slate-400 peer h-full py-2 appearance-none bg-transparent border-none leading-tight text-white ${scrolltopdata?'placeholder-slate-500':'placeholder-white'} focus:border-0 outline-none focus:text-black peer text-sm`} onFocus={btnSearchInputFocus} onBlur={btnSearchInputFocus} placeholder='Cari di Vidio' />
                            <button className={`${scrolltopdata?'text-black':'text-white'} peer-focus:text-black`}>
                                <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </button>
                        </div>
                        {isSearchInputFocus&&
                            <div className='relative mt-0 p-2 max-w-[250px] w-[250px] bg-white text-slate-800 top-full left-0 rounded-xl'>
                                <h3 className='text-md font-bold'>Pencarian Populer</h3>
                                <ul className='text-sm mt-4'>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-percent mr-4 text-primary"></i>
                                            Promo
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-calendar mr-4 text-primary"></i>
                                            Jadwal TV & Olaharaga
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-line-chart mr-4 text-slate-400"></i>
                                            Perfect Mariage Revenge
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-line-chart mr-4 text-slate-400"></i>
                                            The Amazing Spiderman
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-line-chart mr-4 text-slate-400"></i>
                                            Pertaruhan 2
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-line-chart mr-4 text-slate-400"></i>
                                            Guardian of The Galaxy
                                        </li>
                                    </a>
                                    <a href='#' target='_blank'>
                                        <li className='my-4 hover:opacity-30'>
                                            <i className="fa fa-line-chart mr-4 text-slate-400"></i>
                                            The Last of Us
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex gap-3">
                    <a href="#" className='self-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current ${scrolltopdata?'text-black':'text-white'} peer-focus:text-black`} height="25" width="25" viewBox="0 0 512 512">
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                        </svg>
                    </a>
                    <button className='bg-primary font-semibold h-7 text-sm self-center px-4 text-white rounded-md'>Langganan</button>
                    <button className={`bg-white font-semibold h-7 text-sm self-center px-4 text-slate-800 rounded-md ${scrolltopdata?'border border-black':''}`}>Masuk</button>
                </div>
            </div>
        </header>
    )
}

export default Header