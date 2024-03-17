import React, { useState } from "react";
import logo from "/assets/images/logo.png";
import cn from "./navbar.module.css";
import { Link } from "react-router-dom";
import data from "./data.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${cn.navbar_wrapper}`}>
      <nav className={`${cn.navbar}`}>
        <Link to={"/"}>
          <img className={`${cn.logo}`} src={logo} alt="logo" />
        </Link>
        <ul className={`${cn.list}`}>
          <li className={`${cn.li}`}>
            <div className={`${cn.dropdown}`}>
              <button className={`${cn.dropbtn}`}>Products</button>
              <div className={`${cn.content}`}>
                <div>
                  <h5>Products</h5>
                  <ul className={`${cn.content_ul1}`}>
                    {data[0].data1.map(({ name, desc }, index) => (
                      <li key={index}>
                        <Link to={"/"} className={`${cn.content_link}`}>
                          {name}
                        </Link>
                        <p className={`${cn.content_link_text}`}>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Features</h5>
                  <ul className={`${cn.content_ul1}`}>
                    {data[0].data2.map(({ name, desc }, index) => (
                      <li key={index}>
                        <Link to={"/"} className={`${cn.content_link}`}>
                          {name}
                        </Link>
                        <p className={`${cn.content_link_text}`}>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={`${cn.li}`}>
            <div className={`${cn.dropdown}`}>
              <button className={`${cn.dropbtn}`}>Solutions</button>
              <div className={`${cn.content} ${cn.content_feature}`}>
                <div>
                  <h5>What We Do</h5>
                  <ul className={`${cn.content_ul2}`}>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        Set Up Your Skills Strategy
                      </p>
                    </li>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        Showcase Your Talent Brand
                      </p>
                    </li>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        Optimize Your Hiring Process
                      </p>
                    </li>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        Mobilize Your Internal Talent
                      </p>
                    </li>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        Embrace AI Use Cases
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>Use Cases</h5>
                  <ul className={`${cn.content_ul2}`}>
                    <li>
                      <p className={`${cn.content_link_text}`}>Remote Hiring</p>
                    </li>
                    <li>
                      <p className={`${cn.content_link_text}`}>
                        University Hiring
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={`${cn.li}`}>
            <div className={`${cn.dropdown}`}>
              <button className={`${cn.dropbtn}`}>Solutions</button>
              <div className={`${cn.content}`}>
                <div>
                  <h5>What We Do</h5>
                  <ul className={`${cn.content_ul1}`}>
                    {data[1].data1.map(({ name, desc }, index) => (
                      <li key={index}>
                        <Link to={"/"} className={`${cn.content_link}`}>
                          {name}
                        </Link>
                        <p className={`${cn.content_link_text}`}>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Use Cases</h5>
                  <ul className={`${cn.content_ul1}`}>
                    {data[1].data2.map(({ name, desc }, index) => (
                      <li key={index}>
                        <Link to={"/"} className={`${cn.content_link}`}>
                          {name}
                        </Link>
                        <p className={`${cn.content_link_text}`}>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={`${cn.li}`}>Pricing</li>
        </ul>
        <div className={`${cn.dev_panel}`}>
          <span className={`${cn.dev}`}>For developers</span>
          <span className={`${cn.line}`}>|</span>
          <button className={`${cn.demo}`}>Request demo</button>
          <button className={`${cn.sign_up}`}>Sign up</button>
        </div>

        <div className={`${cn.burger_menu_container}`}>
          <button className={`${cn.burger_menu_button}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${cn.sidebar} ${isOpen ? `${cn.open}` : ""}`}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <button
                className={`${cn.burger_close}`}
                onClick={toggleMenu}>
                X
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
