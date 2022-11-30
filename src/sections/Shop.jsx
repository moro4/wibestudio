import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { m, motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import useLocoScroll from '../components/useLocoScroll';
import { Tween } from 'gsap/gsap-core';
import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';
import img11 from '../assets/Images/11.webp';
import img12 from '../assets/Images/12.webp';


const Section = styled.section`
   position: relative;
   min-height: 100vh;
   display: flex;
`;

const Title = styled.h1`
   position: absolute;
   font-size:${props => props.theme.fontxxxl};
   font-family: 'Kaushan Script';
   font-weight: 300;
   color: ${props => props.theme.text};
   text-shadow: 1px 1px 1px ${props => props.theme.body};

   top: 1rem;
   left: 5%;
   z-index: 6;
`;

const Left = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};

   display: flex;
   justify-content: center;
   align-items: center;

   min-height: 100vh;
   min-width: 35vh;
   z-index: 5;

   p {
      font-size:${props => props.theme.fontlg};
      font-weight: 300;
      padding: 10%;
      margin: 0 auto;
   }
`;

const Right = styled.div`

   min-height: 100vh;
   background-color: ${props => props.theme.grey};

   display: flex;
   align-items: center;

   h1 {
      width: 5rem;
      margin: 0 2rem;
   }
`;

const Item = styled(motion.div)`
   width: 20rem;
   margin-right: 6rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   img {
      width: 100%;
      height: auto;
      cursor: pointer;
   }

   h1 {
      display: inline;
      width: auto;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
   }
`;

function Product({img, title=''}) {
   return (
      <Item initial={{filter: 'grayscale(100%)'}}
         whileInView={{filter: 'grayscale(0%)'}} transition={{duration: 0.5}}
         viewport={{once: false, amount: 'all'}}
      >
         <img src={img} alt={title} />
         <h1>{title}</h1>
      </Item>
   )
}

export default function Shop() {

   useLocoScroll();

   const sectionRef = useRef(null);
   const rightColRef = useRef(null);
   const leftColRef = useRef(null);

   useEffect(() => {

      setTimeout(() => {

         gsap.to(rightColRef.current, {
            scrollTrigger: {
               trigger: sectionRef.current,
               start: 'top top',
               end: '+=' + rightColRef.current.offsetWidth,
               scrub: true,
               pin: true,
               pinSpacing: true,
               scroller: '.smooth-scroll'
            },
            ease: 'none',
            x: (-rightColRef.current.scrollWidth + window.innerWidth
               - leftColRef.current.offsetWidth)
            // height: rightColRef.current.scrollWidth
         }
         );
      });
      ScrollTrigger.refresh();
   }, []);

   return (
      <>
         <Section ref={sectionRef}>
            <Title data-scroll data-scroll-speed='-1'>New Collections</Title>
            <Left ref={leftColRef}>
               <p>
                  The brand new collection is currently being developed in USA.
                  We create our products using best quality material, including
                  the use of some of the pure fabrics to make our products.
                  All products are made using the best materials, from the finest
                  cotton to the finest fabrics.
                  <br />
                  <br />
                  We have lots of different clothing options like shoes, jackets and
                  dresses. Not only clothes but we also provide unique Jewellery
                  as well. It is great for us to carry our new clothes all around
                  the country and look different.
               </p>
            </Left>
            <Right ref={rightColRef}>
               <Product img={img1} title='Man Basics' />
               <Product img={img2} title='Tops' />
               <Product img={img3} title='Sweatshirts' />
               <Product img={img4} title='Ethnic Wears' />
               <Product img={img5} title='Blazers' />
               <Product img={img6} title='Suits' />
               <Product img={img7} title='Antiques' />
               <Product img={img8} title='Jewellery' />
               <Product img={img9} title='Watches' />
               <Product img={img10} title='Special Edition' />
               <Product img={img11} title='Denim' />
               <Product img={img12} title='Dresses' />
            </Right>
         </Section>
      </>
   )
}