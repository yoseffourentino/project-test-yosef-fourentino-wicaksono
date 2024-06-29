// import suitmedialogo from '../assets/suitmedia-logo.png'
import logo from '../assets/logo-suitmedia.webp'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(){
    const navigate = useNavigate()
    const location = useLocation().pathname
    return(
        <div className='bg-[white] shadow'>
            <nav className='flex justify-around p-[10px]'>
                <img src={logo} alt="" className='w-[150px] cursor-pointer' onClick={() => navigate('/')}/>
                <ul className="flex gap-[15px] items-center"> 
                    <li className={`${location === '/work'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer `} 
                    onClick={() => navigate('/work')}>Work</li>
                    <li className={`${location === '/about'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer`} 
                    onClick={() => navigate('/about')}>About</li>
                    <li className={`${location === '/services'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer`} 
                    onClick={() => navigate('/services')}>Services</li>
                    <li className={`${location === '/ideas'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer`} 
                    onClick={() => navigate('/ideas')}>Ideas</li>
                    <li className={`${location === '/careers'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer`} 
                    onClick={() => navigate('/careers')}>Careers</li>
                    <li className={`${location === '/contact'? ' border-b-2 border-solid border-orange-400' : 'border-b-2 border-transparent'} cursor-pointer`} 
                    onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </nav>
        </div>
    )   
}