import styled from 'styled-components';
import Logo from '../assets/Svgs/star_white_48dp.svg';
import {motion} from  'framer-motion';

const Section = styled.section`
   min-height: 100vh;
   width: 100vw;
   margin: 5rem auto;

   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
`;

const LogoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   img {
      width: 10vw;
      height: auto;
   }

   h3 {
      font-size: ${props => props.theme.fontxl};
      font-family: 'Kaushan Script';
   }
`;

const FooterComponent = styled(motion.footer)`
   width: 80vw;

   ul {
      list-style: none;

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      margin: 2rem;
      margin-top: 4rem;
      padding: 0 1rem;
      border-top: 1px solid ${props => props.theme.text};
      border-bottom: 1px solid ${props => props.theme.text};
   }

   li {
      padding: 2rem;
      font-size: ${props => props.theme.fontlg};
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
         transform: scale(1.1);
      }
   }
`;

const Bottom = styled.div`
   padding: 0.5rem 0;
   margin: 0 4rem;
   font-size: ${props => props.theme.fontlg};

   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
      text-decoration: underline;
   }
`;

export default function Footer() {
   return (
      <Section>
         <LogoContainer>
            <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" />
            <h3 data-scroll data-scroll-speed="-1">Wibe Studio</h3>
         </LogoContainer>
         <FooterComponent initial={{y: "-400px"}} whileInView={{y: 0}}
            viewport={{once: false}} transition={{duration: 1.5}}
         >
            <ul id="footer">
               <li><a href="#home">home</a></li>
               <li><a href="#fixed-target">about</a></li>
               <li><a href="#shop">shop</a></li>
               <li><a href="#home">new arrival</a></li>
               <li>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                     look book
                  </a>
               </li>
               <li>
               <a href="https://google.com" target="_blank" rel="noreferrer">
                  reviews
               </a>
               </li>
            </ul>
            <Bottom>
               <span data-scroll data-scroll-speed="2"
                  data-scroll-direction="horizontal"
               >
                  &copy; {new Date().getFullYear()}. All Right Reserved.
               </span>
               <span data-scroll data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
               >
                  Made with &hearts; by &nbsp;
               <a href="https://google.com" target="_blank" rel="noreferrer">
                  moro
               </a>
               </span>
            </Bottom>
         </FooterComponent>
      </Section>
   )
}