import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './sections/Home';
import About from './sections/About';
import Shop from './sections/Shop';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import Footer from './sections/Footer';
import { AnimatePresence } from 'framer-motion';


function App() {

   return (
      <>
         <GlobalStyles />
         <ThemeProvider theme={dark}>
            <AnimatePresence>
               <main data-scroll-container className="smooth-scroll">
                  <Home />
                  <About />
                  <Shop />
                  <Banner />
                  <NewArrival />
                  <Footer />
               </main>
            </AnimatePresence>
         </ThemeProvider>
      </>
   )
}

export default App
