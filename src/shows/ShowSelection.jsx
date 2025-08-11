import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow, //I know this wasn't part of the AC, but I just wanted to add .selected for the element
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => {
        return (
          <a
            // className='show' //add .selected when clicked?
            key={show.name}
            onClick={() => setSelectedShow(show)}
            className={show === selectedShow ? "show selected" : "show"}
          >
            {show.name}
          </a>
        );
      })}
    </nav>
  );
}
