import styled from 'styled-components';
import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLocoScroll from '../components/useLocoScroll';
import {useRef, useEffect} from 'react';

const Section = styled.section`
   min-height: 100vh;
   min-width: 100vw;
   margin: 0 auto;

   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
`;

const Overlay = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 30vw;
   height: 90vh;

   z-index: 2;
   box-shadow: 0 0 0 6vw ${props => props.theme.text};
   border: 3px solid ${props => props.theme.body};
`;

const Title = styled.h1`
   position: absolute;
   font-size: ${props => props.theme.fontxxxl};
   font-family: 'Kaushan Script';
   font-weight: 300;
   color: ${props => props.theme.body};
   text-shadow: 1px 1px 1px ${props => props.theme.text};

   top: 1rem;
   left: 5%;
   z-index: 2;
`;

const Text = styled.div`
   width: 20%;
   font-size: ${props => props.theme.fontlg};
   font-weight: 300;
   padding: 4rem;

   position: absolute;
   top: 0;
   right: 0;
   z-index: 3;
`;

const Container = styled.div`
   position: absolute;
   top: 0;
   left: 50%;
   transform: translate(-50%, 0);
   width: 25vw;
   height: auto;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const Item = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 5rem 0;

   img {
      width: 100%;
      height: auto;
      z-index: -5;
   }
`;

function Product({img, title=''}) {
   return (
      <Item>
         <img src={img} alt={title} />
         <h2>{title}</h2>
      </Item>
   )
}

export default function NewArrival() {

   useLocoScroll();
   const sectionRef = useRef(null);
   const scrollRef = useRef(null);
   let tl = gsap.timeline();

   useEffect(() => {

      setTimeout(() => {

         tl.to(sectionRef.current, {
            scrollTrigger: {
               trigger: sectionRef.current,
               start: 'top top',
               end: 'bottom+=100% top-=100%',
               scrub: true,
               pin: true,
               pinSpacing: true,
               scroller: '.smooth-scroll'
            },
            ease: 'none'
         });

         tl.fromTo(scrollRef.current, {
            y: '0',
         }, {
            y: '-100%',
            scrollTrigger: {
               trigger: scrollRef.current,
               start: 'top top',
               end: 'bottom top',
               scroller: '.smooth-scroll',
               scrub: true
            }
         });
      });
      ScrollTrigger.refresh();
   }, []);

   return (
      <Section ref={sectionRef}>

         <Overlay />

         <Title data-scroll data-scroll-speed='-2'
            data-scroll-direction="horizontal"
         >
            New Arrivals
         </Title>

         <Container ref={scrollRef}>
            <Product img={img1} title='Denim' />
            <Product img={img2} title='Cool Dresses' />
            <Product img={img3} title='Jackets' />
            <Product img={img4} title='T-Shirts' />
         </Container>

         <Text data-scroll data-scroll-speed='-4'>
            There is new collection available for cool clothes in all sizes.
            This collection is a great way to find a new look for you.
            It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
            <br />
            <br />
            The first line of clothing you will see on this collection is for men.
            The collection also includes three new styles for women.
            <br />
            <br />
            Give it a try and experience a new look.
         </Text>

      </Section>
   )
}