import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => {
        return (
          <a
            className={`show`} //add .selected when clicked?
            key={show.name}
            onClick={() => setSelectedShow(show)}
          >
            {show.name}
          </a>
        );
      })}
    </nav>
  );
}
