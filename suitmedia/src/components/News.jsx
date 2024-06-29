/* eslint-disable react/jsx-key */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import dummy from '../assets/hero-image.jpeg'

export default function News() {
    const navigate = useNavigate()
    const location = useLocation().pathname
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [sortBy, setSortBy] = useState('terbaru')
    const [showData, setShowData] = useState(10)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    console.log(location)

    async function fetchData() {
        setIsLoading(true)
        try{
            const response = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${showData}&append[]=small_image&append[]=medium_image&sort=-published_at`)
            setData(response.data.data)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [showData, page])
    
    console.log(data.length)
    return (
        <div className='flex flex-col'>
            <div>
                <div className='flex gap-3 max-w-[80%] m-auto mt-[15px] justify-end'>
                    <div>
                        <label>Show per page: </label>
                        <select name="showPage" id="showPage"
                        value={showData} onChange={(e) => setShowData(e.target.value)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div>
                        <label>Sort by: </label>
                        <select name="sort" id="sort"
                        value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="terbaru">Terbaru</option>
                            <option value="terlama">Terlama</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-[20px] max-w-[80%] m-auto my-[20px]'>
                {isLoading? <p>Loading...</p>: 
                    data?.map((item) => (
                        <div className='border rounded-[10px] shadow'>
                            <img src={dummy} alt="" className='w-full h-[200px] rounded-t-[10px]' />
                            <div className='p-[15px]'>
                                <p className='text-[#aeb0af]'>{item.published_at.match(/^\d{4}-\d{2}-\d{2}/)[0]}</p>
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    ))
                } 
            </div>
            <div className='flex gap-4 justify-center items-center my-3'>
                <button className={`${page === 1 ? 'bg-gray-400' : null} p-2 text-white bg-blue-800 rounded-md`} onClick={() => setPage(page > 1 ? page - 1 : 1)}>{'<'}</button>
                <span>{page}</span>
                <button className={`${showData != data.length ? 'bg-gray-400' : null} p-2 text-white bg-blue-800 rounded-md`} onClick={() => setPage(showData != data.length ? page : page + 1)}>{'>'}</button>
            </div>
        </div>
    )
} 