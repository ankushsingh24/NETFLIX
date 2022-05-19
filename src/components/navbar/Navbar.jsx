import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>Search</span>
          <Notifications />
          <img
            src="https://images.pexels.com/photos/6899268/pexels-photo-6899268.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
