import React, { useEffect } from "react";

const Carousel3D: React.FC = () => {
  useEffect(() => {
    let radius = 240;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;
    const bgMusicControls = true;

    const odrag = document.getElementById("drag-container") as HTMLElement;
    const ospin = document.getElementById("spin-container") as HTMLElement;
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    const ground = document.getElementById("ground") as HTMLElement;
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime?: number) {
      for (let i = 0; i < aEle.length; i++) {
        const ele = aEle[i] as HTMLElement;
        ele.style.transition = "all 1s ease-out";
        ele.style.transitionDelay = `${i * 0.2}s`;

        const randX = Math.random() * 1000 - 500;
        const randY = 400 + Math.random() * 400;
        const randZ = Math.random() * 1000 - 500;
        const randRotate = Math.random() * 360;

        ele.style.opacity = "0";
        ele.style.transform = `translate3d(${randX}px, ${randY}px, ${randZ}px) rotateY(${randRotate}deg)`;

        setTimeout(() => {
          ele.style.opacity = "1";
          ele.style.transform = `rotateY(${
            (360 / aEle.length) * i
          }deg) translateZ(${radius}px)`;
        }, 1000 + i * 300);
      }
    }

    setTimeout(() => {
      init();

      if (autoRotate) {
        const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
        ospin.style.animation = `${animationName} ${Math.abs(
          rotateSpeed
        )}s infinite linear`;
      }

      document.onpointerdown = function (e) {
        clearInterval((odrag as any).timer);
        e = e || window.event;
        let sX = e.clientX;
        let sY = e.clientY;
        let nX = 0,
          nY = 0,
          desX = 0,
          desY = 0,
          tX = 0,
          tY = 10;

        document.onpointermove = function (e) {
          e = e || window.event;
          nX = e.clientX;
          nY = e.clientY;
          desX = nX - sX;
          desY = nY - sY;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag, tX, tY);
          sX = nX;
          sY = nY;
        };

        document.onpointerup = function () {
          (odrag as any).timer = setInterval(() => {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag, tX, tY);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
              clearInterval((odrag as any).timer);
            }
          }, 17);
          document.onpointermove = document.onpointerup = null;
        };
      };

      document.onwheel = function (e) {
        e = e || window.event;
        const d = (e as WheelEvent).deltaY / 20;
        radius += d;
        init(1);
      };
    }, 100);

    function applyTransform(obj: HTMLElement, tX: number, tY: number) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; }
        html, body { height: 100%; touch-action: none; }
        body {
          overflow: hidden;
          display: flex;
          background: #111;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        #drag-container, #spin-container {
          position: relative;
          display: flex;
          margin: auto;
          transform-style: preserve-3d;
          transform: rotateX(-10deg);
        }
        #drag-container img, #drag-container video {
          transform-style: preserve-3d;
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          line-height: 200px;
          font-size: 50px;
          text-align: center;
          box-shadow: 0 0 8px #fff;
          box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
          opacity: 0;
        }
        #drag-container img:hover, #drag-container video:hover {
          box-shadow: 0 0 15px #fffd;
          box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
        }
        #drag-container p {
          font-family: Serif;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(90deg);
          color: #fff;
        }
        #ground {
          width: 900px;
          height: 900px;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(90deg);
          background: radial-gradient(circle, #555 30%, transparent 60%);
        }
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes spinRevert {
          from { transform: rotateY(360deg); }
          to { transform: rotateY(0deg); }
        }
      `}</style>

      <div id="drag-container">
        <div id="spin-container">
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a40a333feb916cb51b_Section%201.jpg"
            alt="img1"
          />
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a4a89e7792c609c1a0_Section%206.jpg"
            alt="img2"
          />
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a4f34075a836e8ed14_Section%203.jpg"
            alt="img3"
          />
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a46c6544cb819a8d81_Section%204.jpg"
            alt="img4"
          />
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a43dec31b372f4ddcb_Section%205.jpg"
            alt="img5"
          />
          <img
            src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/674568a40a333feb916cb49c_Section%207.jpg"
            alt="img6"
          />
          <p>3D Card Carousel</p>
        </div>
        <div id="ground"></div>
      </div>

      <div id="music-container"></div>
    </>
  );
};

export default Carousel3D;
