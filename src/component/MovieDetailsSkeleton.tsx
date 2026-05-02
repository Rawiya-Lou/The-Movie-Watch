export const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-screen mt-20 md:mt-0 p-4 md:p-8 relative bg-primary animate-pulse">
      {/* Background/Backdrop Mockup */}
      <div className="absolute inset-0 bg-secondary/30 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 container mx-auto py-10">
        {/* Back Button Skeleton */}
        <div className="h-10 w-24 bg-secondary rounded-lg mb-8 mt-3 ml-6" />

        <section className="grid grid-cols-1 md:grid-cols-[400px_2fr] gap-8 mx-6 my-10">
          
          {/* Poster Skeleton */}
          <div className="w-full aspect-[2/3] bg-secondary rounded-xl shadow-2xl" />

          {/* Details Content Skeleton */}
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <div>
              {/* Title */}
              <div className="h-12 md:h-16 bg-secondary rounded-md w-3/4 mb-4" />
              {/* Tagline */}
              <div className="h-6 bg-secondary rounded-md w-1/2 italic" />
            </div>

            {/* Badges/Meta Info Row */}
            <div className="flex gap-4">
              <div className="h-8 w-16 bg-secondary rounded-full" />
              <div className="h-8 w-24 bg-secondary rounded-full" />
              <div className="h-8 w-20 bg-secondary rounded-full" />
            </div>

            {/* Overview Section */}
            <div className="space-y-3 mt-4">
              <div className="h-6 bg-secondary rounded-md w-32 mb-6" /> {/* Header */}
              <div className="h-4 bg-secondary rounded-md w-full" />
              <div className="h-4 bg-secondary rounded-md w-full" />
              <div className="h-4 bg-secondary rounded-md w-2/3" />
            </div>

            {/* Button Skeleton */}
            <div className="mt-auto h-12 w-40 bg-secondary rounded-lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
