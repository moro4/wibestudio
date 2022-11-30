import React from 'react';
import styled from 'styled-components';
import MainVideo from '../assets/fashionmodel.mp4';
import {motion} from 'framer-motion';
import { redirect } from 'react-router-dom';

const VideoContainer = styled.section`
   width: 100%;
   height: 100vh;
   position: relative;
   video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
   }
`;

const DarkOverlay = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 1;
   width: 100%;
   height: 100%;
   background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`}
`;

const Title = styled(motion.div)`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 2;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${props => props.theme.text};

   div {
      display: flex;
      flex-direction: row;
   }

   h1 {
      font-family: 'Kaushan Script';
      font-size: ${props => props.theme.fontBig};
      letter-spacing: 26px;
      text-shadow: 1px 1px 1px ${props => props.theme.body};
   }

   h2 {
      font-family: 'Martel';
      font-size: ${props => props.theme.fontlg};
      text-shadow: 1px 1px 1px ${props => props.theme.body};
      font-weight: 300;
   }
`;

const titleSequence = {
   start: {
      opacity: 0,
   },
   end: {
      opacity: 1,
      transition: {
         delayChildren: 0.8,
         staggerChildren: 0.1
      }
   }
}

const letterSequence = {
   start: {
      opacity: 0
   },
   end: {
      opacity: 1
   }
}

export default function CoverVideo() {
   return (
      <VideoContainer>
         <DarkOverlay />
         <Title variants={titleSequence} initial='start' animate='end'>
            <div>
               <motion.h1 variants={letterSequence} data-scroll
                  data-scroll-delay='0.21' data-scroll-speed='4'
               >
                  W
               </motion.h1>
               <motion.h1 variants={letterSequence} data-scroll
                  data-scroll-delay='0.17' data-scroll-speed='4'
               >
                  i
               </motion.h1>
               <motion.h1 variants={letterSequence} data-scroll
                  data-scroll-delay='0.13' data-scroll-speed='4'
               >
                  b
               </motion.h1>
               <motion.h1 variants={letterSequence} data-scroll
                  data-scroll-delay='0.09' data-scroll-speed='4'
               >
                  e
               </motion.h1>
            </div>
            <motion.h2 variants={letterSequence} data-scroll
               data-scroll-delay='0.19' data-scroll-speed='2'
            >
               Inspire. Create. Believe
            </motion.h2>
         </Title>
         <video src={MainVideo} type='video/mp4' autoPlay muted loop />
      </VideoContainer>
   )
}