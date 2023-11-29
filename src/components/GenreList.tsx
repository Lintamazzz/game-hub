import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
