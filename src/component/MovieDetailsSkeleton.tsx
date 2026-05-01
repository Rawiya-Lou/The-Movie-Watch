const MovieDetailsSkeleton = () => (
  <div className="animate-pulse p-10">
    <div className="animate-pulse flex h-[40px] w-[90px] items-center gap-2 py-2 px-4 rounded bg-secondary my-2 mx-6 [clip-path:polygon(20%_0%,_100%_0%,_100%_100%,_20%_100%,_0%_50%)]"></div>
    <div className="animate-pulse container grid grid-cols-1 md:grid-cols-[400px_1fr] gap-14 mx-6 my-3 py-6">
      <div className=" bg-secondary h-[600px] py-10 rounded-2xl" />{" "}
      {/* Poster Skeleton */}
      <div className="flex flex-col pt-10 gap-6">
        <div className="h-10 w-100 bg-surface-two rounded bg-secondary" />{" "}
        {/* Title Skeleton */}
        <div className="flex gap-2">
          <div className="md:p-4 h-[6px] w-[50px] bg-secondary rounded" />
          <div className="md:p-4 h-[6px] w-[50px] bg-secondary rounded" />
          <div className="md:p-4 h-[6px] w-[50px] bg-secondary rounded" />
        </div>
        {/* Info Skeleton */}
        <div className="h-30 w-4/5 bg-secondary rounded" />{" "}
        {/* Overview Skeleton */}
        <div className="h-12 w-40 bg-secondary rounded mt-45" />{" "}
      </div>
    </div>
  </div>
);

export default MovieDetailsSkeleton;
