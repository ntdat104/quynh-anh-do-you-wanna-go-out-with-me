import "./Question.css";

function Question({ onYes }: { onYes: () => void }) {
  const handleMove = () => {
    if (window.document && window.document.getElementById("noButton")) {
      const noButton = window.document.getElementById("noButton");

      const x = Math.random() * (window.innerWidth - noButton!.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton!.offsetHeight);
      noButton!.style.left = `${x}px`;
      noButton!.style.top = `${y}px`;
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Do you wanna go out with me?</h1>
      </div>
      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={onYes}>
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          onMouseOver={handleMove}
          onClick={handleMove}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Question;
