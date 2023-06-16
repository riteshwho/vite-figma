import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Component/Feed";
import Login from "./Component/Login";
import logo from './Images/logo.png';
import exclamation from './Images/exclamation-circle.svg';
import share from './Images/share-fill.svg';
import pencil from './Images/pencil-fill.svg';
import hands from './Images/hand-thumbs-up-fill.svg';
import location from './Images/geo-alt-fill.svg';
import person from './Images/person-plus.svg';


function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="atg" src={logo} />
          </a>
          <form className="d-flex search" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <Login />
        </div>
      </nav>

      <div className="header">
        <span className="big">Computer Engineering</span>
        <span className="small">142,765 Computer Engineers follow this</span>
      </div>
      {/* after image */}
      <ul className="nav nav-underline">
        <li className="nav-item one">
          <a className="nav-link active" aria-current="page" href="#">
            All Posts(32)
          </a>
        </li>
        <li className="nav-item two">
          <a
            className="nav-link"
            href="#"
            style={{ color: "black", opacity: "0.6" }}
          >
            Article
          </a>
        </li>
        <li className="nav-item three">
          <a
            className="nav-link"
            href="#"
            style={{ color: "black", opacity: "0.6" }}
          >
            Event
          </a>
        </li>
        <li className="nav-item four">
          <a className="nav-link " style={{ color: "black", opacity: "0.6" }}>
            Education
          </a>
        </li>
        <li className="nav-item five">
          <a className="nav-link " style={{ color: "black", opacity: "0.6" }}>
            {" "}
            Job
          </a>
        </li>
      </ul>

      <button
        style={{ background: "#EDEEF0", color: "black", border: "none" }}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Write a Post
      </button>
      <button type="button" className="join">
        <img
          style={{
            background: "white",
            marginRight: "2px",
            marginBottom: "2px",
          }}
          src={person}
        />{" "}
        Join Group
      </button>
      <span className="location">
        <img
          style={{ marginBottom: "4px" }}
          src={location}
        />{" "}
        Noida,India
      </span>
      <img className="pencil" src={pencil}/>
      <p className="exclam">
        <img src={exclamation} />
        Your location will help us serve better and extend a personalised
        experience.
      </p>
      <span className="friends">
        <img
          style={{ marginBottom: "4px" }}
          src={hands}
        />{" "}
        REcommended Groups
      </span>
      <span className="mutual">
        {" "}
        <img
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "30px",
            marginBottom: "10px",
            borderRadius: "25px",
          }}
          src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
        />{" "}
        <span className="mutualN">Leisure</span>
        <button className="follow">Followed</button>{" "}
      </span>
      <Feed
        bg={
          "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        type={"✍️ Article"}
        title={"What if famous brands had regular fonts? Meet RegulaBrands!"}
        para={
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        }
        pic={
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        name={"Sarthak Kamra"}
        views={"1.4k views"}
        svg={share}
      />
      <br />
      <Feed
        bg={
          "https://images.pexels.com/photos/42186/pexels-photo-42186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        type={"🔬️ Education"}
        title={
          "Tax Benefits for Investment under National Pension Scheme launched by Government"
        }
        para={
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        }
        pic={
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8fDB8fHww&w=1000&q=80"
        }
        name={"Sarah West"}
        views={"1.4k views"}
        svg={share}
      />
      <br />
      <Feed
        bg={
          "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        type={"🔬️ Finance"}
        title={
          "New York City reaches labor agreements with NYPD, FDNY, correction, sanitation workers unions"
        }
        para={
          "They went through a lot over the last few years and we want to make sure that we are.."
        }
        pic={
          "https://i.pinimg.com/736x/c9/d3/2f/c9d32f0a6ad7d085b07a514c3dd883c6.jpg"
        }
        name={"will Johnson"}
        views={"2.8k views"}
        svg={share}
      />
    </>
  );
}

export default App;
