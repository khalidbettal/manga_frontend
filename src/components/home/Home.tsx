import Hero from "./Hero"
import Content from "./Content"
import Blogs from "./Blog"
import Article from "./Article"
import Proof from "./Proof"
import { ContactUs } from "../Index"

function Home() {
  return (
    <div>
        <Hero />
        <Content />
        <Blogs />
        <Article />
        <Proof />
        <ContactUs />
    </div>
  )
}

export default Home