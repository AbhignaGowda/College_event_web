import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
   
  useEffect(()=>{
    const audio = new Audio('/audios/page-flip-01a.mp3')
      audio.play();
  },[page])
  
  const handlePageChange = (index) => {
    if (index >= 0 && index <= pages.length) {
      setPage(index);
      
    }

  };

  return (
    <>
      <main className="pointer-events-none select-none inset-0 justify-between flex-col z-10">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://lessons.wawasensei.dev/courses/react-three-fiber"
        >
          <img className="w-20" src="/images/wawasensei-white.png" alt="Wawa Sensei" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <h1 className="text-4xl font-bold text-center text-white">
  College Fest
</h1>



        </div>
      </main>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="text-container">
              <div className="flex animate-horizontal-scroll">
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">College Fest</h2>
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-light">Innovation</h2>
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">Workshops</h2>
                <h2 className="shrink-0 text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold italic outline-text">Competitions</h2>
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-medium">Networking</h2>
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extralight italic">Learning</h2>
                <h2 className="shrink-0 text-white text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">Collaboration</h2>
                <h2 className="shrink-0 text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold outline-text italic">Inspiration</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  @keyframes horizontalScroll {
    0% {
      transform: translateX(0); 
    }
    100% {
      transform: translateX(-100%); 
    }
  }

  .animate-horizontal-scroll {
    display: flex;
    width: calc(100% * 3); /* Ensure this is twice the width of your content */
    animation: horizontalScroll 10s linear infinite; /* Adjust duration for speed */
  }

  .text-container {
    display: flex;
    width: 100%; /* Full width of the viewport */
    overflow: hidden;
    transform: translateY(-110px); 
  }

  .outline-text {
    -webkit-text-stroke: 2px white;
  }
`}</style>


    </>
  );
};
