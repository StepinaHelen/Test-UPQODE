//  typical import
import gsap from "gsap";
 
// or get other plugins:
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
 
// or all tools are exported from the "all" file (excluding bonus plugins):
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
 
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

// 
var animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});

animation = gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top 20%",
    end: "bottom 80%",
    scrub: 1,
    //markers: true,
    onUpdate: self => {
      gsap.to("#tractor", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
    }
  },
  duration: 10,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});

