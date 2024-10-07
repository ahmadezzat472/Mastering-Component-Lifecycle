import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import AboutUs from './pages/AboutUs'
import UseEffect from './pages/UseEffect'

function App() {
	const [page, setPage] = useState<string> ("home")

	return (
		<div className='container mx-auto'>
			<h1 className='text-2xl bg-white text-black rounded-md p-5 text-center w-fit mx-auto my-[50px]'>
				Component Lifecycle (class Component)
			</h1>

			<Navbar setPage = {setPage}/>

			{page == "home" && <Home />}
			{page == "product" && <Product />}			
			{page == "about" && <AboutUs />}			
			{page == "useEffect" && <UseEffect />}			
		</div>
	)
}

export default App
