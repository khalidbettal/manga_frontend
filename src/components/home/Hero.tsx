
import reaper from '../../assets/images/manhua.png'
import SearchBar from '../../assets/tools/SearchBar';

function Hero() {
   return (
       <div>
        <section className="bg-white dark:bg-gray-800">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-purple-400">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
           <SearchBar/>
        </div>
        <div className="  lg:col-span-5 lg:flex mt-10">
            <img className='rounded-lg' src={reaper} alt="mockup"/>
        </div>                
    </div>
</section>
       </div>
   );
}


export default Hero;