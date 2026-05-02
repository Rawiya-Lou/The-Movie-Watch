import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Movie } from '../types/Movie';

interface Props {
  movies: Movie[];
}

export const TrendingSlider = ({ movies }: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);
//   infinite sliding 
  const index = ((page % movies.length) + movies.length)% movies.length

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },

    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-primary">
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.4 }
          }}
          // --- Drag Props for Mobile ---
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, { offset, velocity }) => {
           if(offset.x > 100 || velocity.x > 500) paginate(-1);
           else if (offset.x < -100 || velocity.x < -500) paginate(1)
          }}
          className="absolute inset-0 touch-pan-y"
        >
          <img 
            src={`https://image.tmdb.org/t/p/original${movies[index].backdrop_path}`}
            className="w-full h-full object-cover pointer-events-none"
            alt={movies[index].title}
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 bg-gradient-to-t from-primary via-primary/40 to-transparent">
            {/* Responsive Text Sizes */}
            <motion.h2 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-6xl font-bold text-text-gray mb-4 leading-tight max-w-4xl"
            >
              {movies[index].title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-lg text-gray-200 max-w-2xl line-clamp-2 md:line-clamp-3"
            >
              {movies[index].overview}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hide controls on small mobile screens*/}
          <div className="hidden md:flex absolute inset-0 items-center justify-between px-6 z-30 pointer-events-none">
        <button 
          className="pointer-events-auto bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer" 
          onClick={() => paginate(-1)}
        >
          <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          className="pointer-events-auto bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer" 
          onClick={() => paginate(1)}
        >
          <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
};
