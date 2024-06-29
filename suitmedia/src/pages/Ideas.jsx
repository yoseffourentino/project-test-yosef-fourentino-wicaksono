import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";

export default function Ideas() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero title='Ideas'></Hero>
            <News></News>
        </div>
    )
}