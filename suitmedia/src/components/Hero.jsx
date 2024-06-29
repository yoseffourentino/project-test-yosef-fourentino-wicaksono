import hero from '../assets/hero-image.jpeg'

// eslint-disable-next-line react/prop-types
export default function Hero({title}){
    return(
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`}} 
        className='h-[450px] bg-no-repeat bg-cover flex flex-col justify-center items-center shadow-2xl'>
            <h1 className='text-white text-[24px]'>{title}</h1>
            <p className='text-white'>Where all our great things begin</p>
        </div>
    )
}