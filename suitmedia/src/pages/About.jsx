import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";

export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero title='About'></Hero>
            <News></News>
        </div>
    )
}