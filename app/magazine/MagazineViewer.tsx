"use client";

import { MagazineSetter } from "./page";
import { Communication } from "./shared";
import { createWaiter, styleElement, waitFrame, waitListener } from "./shared";
import { useEffect, useRef, useState } from "react";

export const MagazineViewer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeSync = useRef(createWaiter());
  const targetCoverRef = useRef<DOMRect>();
  const [forceLandscape, setForceLandscape] = useState(false);
  const showing = useRef(false);

  const closeMagazine = () => {
    (async function () {
      const iframe = iframeRef.current;
      if (!iframe) return;
      styleElement(iframe, {
        opacity: "1",
        transitionProperty: "opacity",
        transitionDuration: "1s",
      });

      await waitFrame();
      styleElement(iframe, { opacity: "0" });

      await waitListener(iframe, "transitionend");
      styleElement(iframe, {
        opacity: "",
        transitionProperty: "",
        transitionDuration: "",
      });
      iframe.style.visibility = "hidden";
      iframe.style.pointerEvents = "none";
      document.documentElement.style.overflow = "";
      showing.current = false;
    })();
  };

  const openMagazine: MagazineSetter = (newMagazine, origin) => {
    (async function () {
      const iframe = iframeRef.current;
      if (!iframe) return;

      await iframeSync.current.waiter;

      const { top, left, width, height } = origin.getBoundingClientRect();
      const vWidth = window.innerWidth;
      const vHeight = window.innerHeight;
      const targetCover = targetCoverRef.current;

      const div = document.createElement("div");
      styleElement(div, {
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        zIndex: "100",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0)",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty: "background",
        transitionDuration: "1s",
      });
      iframe.insertAdjacentElement("afterend", div);

      const img = document.createElement("img");
      img.src = origin.src;
      div.appendChild(img);

      if (targetCover) {
        styleElement(img, {
          width: width + "px",
          height: height + "px",
          position: "fixed",
          top: top + "px",
          left: left + "px",
          transitionProperty: "width, height, top, left, transform",
          transitionDuration: "1s",
          pointerEvents: "none",
        });
      } else {
        styleElement(img, {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: "1",
          transitionProperty: "opacity",
          transitionDuration: "0.9s",
        });
      }

      await waitFrame();
      styleElement(div, {
        backgroundColor: "rgba(0, 0, 0, 1)",
      });

      if (targetCover) {
        const { top, left, width, height } = targetCover;
        if (forceLandscape) {
          styleElement(img, {
            top: left + width / 2 + "px",
            left: vWidth - top + "px",
            width: width / 2 + "px",
            height: height + "px",
            transformOrigin: "top left",
            transform: "rotate(90deg)",
          });
        } else {
          styleElement(img, {
            width: width / 2 + "px",
            height: height + "px",
            top: top + "px",
            left: left + width / 2 + "px",
          });
        }
      } else {
        styleElement(img, {
          opacity: "0",
        });
      }

      await waitListener(div, "transitionend");

      iframe.contentWindow?.postMessage(
        JSON.stringify({
          info: "slugUpdate",
          slug: newMagazine.slug,
        } satisfies Communication)
      );

      iframe.style.visibility = "visible";
      iframe.style.pointerEvents = "auto";
      document.documentElement.style.overflow = "hidden";

      await waitFrame();
      styleElement(div, {
        opacity: "0",
        transitionProperty: "opacity",
        transitionDuration: "0.3s",
      });

      await waitListener(div, "transitionend");
      div.remove();
    })();
  };

  useEffect(() => {
    const messageListener = ({ data }: MessageEvent) => {
      const msg = JSON.parse(data) as Communication;
      if (msg.info == "boundUpdate") {
        targetCoverRef.current = msg.bounding;
      } else if (msg.info == "close") {
        closeMagazine();
      } else if (msg.info == "ready") {
        iframeSync.current.resolve();
      }
    };
    window.addEventListener("message", messageListener);

    const reorient = () => {
      const width = window.innerWidth - 100;
      const height = window.innerHeight - 50;

      if (width < height * 1.41) setForceLandscape(true);
      else setForceLandscape(false);
    };
    window.addEventListener("resize", reorient);
    reorient();

    return () => {
      window.removeEventListener("message", messageListener);
      window.removeEventListener("resize", reorient);
    };
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.style.width = forceLandscape ? "100vh" : "100vw";
    iframe.style.height = forceLandscape ? "100vw" : "100vh";
    iframe.style.transform =
      "translate(-50%, -50%)" + (forceLandscape ? "rotate(90deg)" : "");
  }, [forceLandscape, iframeRef]);

  return [
    <iframe
      key={0}
      ref={iframeRef}
      src="/magazine/viewer"
      className={"fixed pointer-events-none invisible top-1/2 left-1/2 z-[100]"}
    />,
    openMagazine,
  ] as const;
};
