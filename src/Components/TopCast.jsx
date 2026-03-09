function TopCast({ castData }) {
  return (
    <div className="flex-col border-2  border-border  hover:scale-105 cursor-pointer transition-all p-2 rounded-2xl hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)]  hover:border-primary">
      <img
        className="w-full h-35 object-cover"
        src={`https://image.tmdb.org/t/p/w500${castData.profile_path}`}
        alt=""
      />
      <p className="text-white opacity-60 text-xs  mt-2">{castData.name}</p>
    </div>
  );
}

export default TopCast;
