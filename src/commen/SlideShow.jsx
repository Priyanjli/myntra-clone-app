import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
// import logo from "../img/img1.jpeg"

const HomeHero = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const SlideShowAnimation = keyframes`
  0% {
    --current-bg: var(--bg1);
  }
  20% {
    --current-bg: var(--bg2);
  }
  40% {
    --current-bg: var(--bg3);
  }
  60% {
    --current-bg: var(--bg4);
  }
  80% {
    --current-bg: var(--bg5);
  }
  100% {
    --current-bg: var(--bg1);
  }
`;

const FadeAnimation = keyframes`
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
`;

const SlideshowContaner = styled.div`
  position: absolute;
  left: 0;
  top: -100px;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;

  --bg1: url("https://images.unsplash.com/photo-1546189052-4aded951637a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80");
  --bg2: url("https://images.unsplash.com/photo-1513414653395-3bb68df4b2b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80");
  --bg3: url("https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80");
  --bg4: url("https://images.unsplash.com/photo-1490462686240-04979237c723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80");
  --bg5: url("https://images.unsplash.com/photo-1571147558584-8490ea37d7a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80");

  --current-bg: var(--bg1);
  --numberOfImages: 5;
  --duration: 20s;
  --fadeDuration: calc(var(--duration) / var(--numberOfImages));
  --delay-duration: calc(var(--fadeDuration) / 2);

  background-image: var(--current-bg);

  // animation: changeImage var(--duration) linear forwards,
  //   fade var(--fadeDuration) linear forwards;

  animation: ${SlideShowAnimation} var(--duration) linear forwards,
    ${FadeAnimation} var(--fadeDuration) linear forwards;
`;

const SlideshowContaner2 = styled(SlideshowContaner)`
  animation: ${SlideShowAnimation} var(--duration) var(--delay-duration) linear
      forwards,
    ${FadeAnimation} var(--fadeDuration) var(--delay-duration) linear forwards;
`;

const SlideShow = () => {
  return (
    <>
      {/* <HomeHero>
        <SlideshowContaner></SlideshowContaner>
        <SlideshowContaner2></SlideshowContaner2>
      </HomeHero> */}
      <HomeHero>
        <SlideshowContaner></SlideshowContaner>
        <SlideshowContaner2></SlideshowContaner2>
      </HomeHero>
    </>
  );
};
export default SlideShow;
