import React, { useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const NavContainer = styled(motion.div)`
   width: 100vw;
   z-index: 3;
   position: absolute;
   top: ${props => props.menustatus ? '0' : `-${props.theme.navHeight}`};
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease;
`;

const MenuItems = styled(motion.ul)`
   positon: relative;
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   height: ${props => props.theme.navHeight};
   padding: 0 10rem;
   color: ${props => props.theme.text};
   background-color: ${props => props.theme.body};
   list-style: none;
`;

const MenuBtn = styled.li`
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translateX(-50%);

   width: 15rem;
   height: 2.5rem;

   display: flex;
   justify-content: center;
   align-items: center;

   font-size: ${props => props.theme.fontmd};
   background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
   text-transform: uppercase;
   cursor: pointer;
   list-style-type: none;
   color: ${props => props.theme.body};
   clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
`;

const MenuItem = styled(motion.li)`
   text-transform: uppercase;
   cursor: pointer;
   color: ${props => `props.theme.text`};
`;

export default function NavBar(){

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <NavContainer menustatus={isMenuOpen} initial={{y: '-100%'}} animate={{y:0}}
         transition={{duration: 0.2, delay: 1.1}}
      >
         <MenuItems drag='y' dragConstraints={{top: 0, bottom: 70}}
            dragSnapToOrigin dragElastic={0.05}
         >

            <MenuBtn onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</MenuBtn>

            <MenuItem whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
               Home
            </MenuItem>

            <MenuItem whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
               About
            </MenuItem>

            <MenuItem whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
               Shop
            </MenuItem>

            <MenuItem whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
               New arrival
            </MenuItem>

         </MenuItems>
      </NavContainer>
   )
}