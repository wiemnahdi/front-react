import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import HomePage from "../../pages/HomePage";
import NavbarPage from "../navbar/NavbarPage";
import { RoleContext } from "../../context/RoleContext";
import { HouseDoorFill, Building, FileEarmarkRichtext, Collection, PersonCircle,PeopleFill, List } from 'react-bootstrap-icons';
import { isAuthorize } from "../../config/config"; 

const navItems = ["dashboard","users", "departement", "formation","team", "competence", "certificate", "notation"]; // Ajoutez "certificate" à la liste navItems

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { currentRole } = useContext(RoleContext);
  const navigate = useNavigate();

  

  return (
    <div className="page-wrapper">
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className="sidebar-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
            <div className="sidebar-logo text-light" > {currentRole}</div>
          </header>
          <nav className="sidebar-menu">
            {navItems.map((item) => (
              isAuthorize(item, currentRole) &&
               
                <button key={item} type="button" className="sidebar-button" onClick={() => navigate(`/${item}`)}>
                  {item === "dashboard" && <HouseDoorFill />}
                  {item === "departement" && <Building />}
                  {item === "formation" && <FileEarmarkRichtext />}
                  {item === "competence" && <Collection />}
                  {item === "notation" && <List />}
                  {item === "users" && <PersonCircle />}
                  {item === "team" && <PeopleFill />}
                  {item === "certificate" && <FileEarmarkRichtext />} 
                  
                  
                  <p>{item}</p>
                </button>
              
            ))}
          </nav>
        </div>
      </nav>
      <div className={`content ${isOpen ? "shifted" : ""}`}>
        <NavbarPage />
        <HomePage />
      </div>
    </div>
  );
}

export default Sidebar;
