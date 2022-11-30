import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function ScrollTriggerProxy() {

   const { scroll:locoScroll } = useLocomotiveScroll();
   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      if (locoScroll) {

         const element = locoScroll?.el;

         locoScroll.on('scroll', () => {
            ScrollTrigger.update()
            ScrollTrigger.refresh()
          });

         ScrollTrigger.scrollerProxy(element, {
            scrollTop(value) {
               console.log('scrollTop updated');
               return arguments.length
                  ? locoScroll.scrollTo(value, 0, 0)
                  : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
               return {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight
               };
            },

            pinType: element.style.transform
               ? "transform"
               : "fixed"
         });
      }

      return () => {
         ScrollTrigger.addEventListener('refresh', () => locoScroll?.update())
         ScrollTrigger.refresh();
      }
   }, [locoScroll]);

   return null;
}