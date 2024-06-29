import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero title='Home'></Hero>
            <News></News>
        </div>
    )
}
