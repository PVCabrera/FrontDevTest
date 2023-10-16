import "./content.css";

function Content() {
  return (
    <>
      <div className="mainText-loc">
        <h1>Where creators run their business</h1>
      </div>
      <button type="button" className="btn btn-primary">
        Get Started
      </button>
      <div className="image-container">
        <div className="card-img">
          <img
            className="img-sizes"
            src="images\unsplash_tgquMvhNLc4.png"
            alt="person using card"
          ></img>
          <span className="banner">
            <h3>Send invoices 🡢</h3></span>
        </div>
        <img
          className="img-sizes"
          src="images\unsplash_t-UV1rZqPuY.png"
          alt="man on ipad"
        ></img>
        <img
          className="img-sizes"
          src="images\unsplash_5OUMf1Mr5pU.png"
          alt="girl on computer"
        ></img>
      </div>
    </>
  );
}

export default Content;
