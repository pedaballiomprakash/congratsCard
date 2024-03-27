const element = (
  <div className="congratulations-card-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="student-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo-img"
      />
      <h1 className="name">Kiran V</h1>
      <p className="college-paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
