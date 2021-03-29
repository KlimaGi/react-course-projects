let see = false;

const toggleText = () => {
  see = !see;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Title</h1>
      <button onClick={toggleText}>
        {see ? "Hide details" : "Show details"}
      </button>
      {see && (
        <div>
          <p>Hey. These are some details you can see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
