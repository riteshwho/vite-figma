const Feed = ({ bg, type, title, name, para, pic, views, svg }) => {
  return (
    <>
      <div className="card">
        <img src={bg} className="card-img-top" alt="..." />
        <div className="card-body">
          <span style={{ lineHeight: "23px" }}>{type}</span>
          <h5 className="card-title" style={{ lineHeight: "30px" }}>
            {title}
          </h5>
          <p style={{ color: "#5C5C5C" }}>{para}</p>
        </div>

        <div className="low">
          <img
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "30px",
              marginBottom: "10px",
              borderRadius: "25px",
            }}
            src={pic}
          />
          <span className="name">{name}</span>{" "}
          <span className="views">{views}</span>
          <img style={{ width: "20px" }} className="share" src={svg} />
        </div>
      </div>
    </>
  );
};

export default Feed;
