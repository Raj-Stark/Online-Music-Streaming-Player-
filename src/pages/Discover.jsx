import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/Services/ShazamCore";
import { useSelector } from "react-redux";

const Discover = () => {
  const { activeSong, isPlaying } = useSelector((store) => store.player);

  // const dispatch = useDispatch();
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Songs Loading..."></Loader>;
  }

  if (error) {
    return <Error></Error>;
  }

  const genreTitle = "Pop";
  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          name=""
          id=""
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genere) => {
            return (
              <option key={genere.value} value={genere.value}>
                {genere.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/*  Render Song Card  */}
        {data?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            ></SongCard>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
