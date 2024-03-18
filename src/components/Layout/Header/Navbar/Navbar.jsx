import React, { useEffect, useState } from "react";
import logo from "/assets/images/logo.png";
import cn from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGreaterThan, FaXmark } from "react-icons/fa6";
import data from "./data.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mobile_nav = [
    "Products",
    "Solutions",
    "Resources",
    "Pricing",
    "For candidates",
    "Contact Us",
  ];

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 180 ? true : false;
    setSticky(stickyClass);
  };

  return (
    <div className={`${cn.navbar_wrapper} ${sticky ? cn.is_sticky : ""}`}>
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
            <Link to={"/"}>
              <img className={`${cn.mobile_logo}`} src={logo} alt="logo" />
            </Link>
            <button className={`${cn.burger_close}`} onClick={toggleMenu}>
              <FaXmark />
            </button>
            <ul className={`${cn.mobile_ul}`}>
              {mobile_nav.map((item, index) => (
                <li key={index} className={`${cn.mobile_li}`}>
                  <Link>{item}</Link>
                  {item === "Products" ||
                  item === "Resources" ||
                  item === "Solutions" ? (
                    <span>
                      <FaGreaterThan />
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className={`${cn.mobile_dev_panel}`}>
              <Link className={`${cn.mobile_login}`}>
                Log in <FaArrowRight />
              </Link>
              <hr />
              <Link className={`${cn.demo}`}>Request demo</Link>
              <Link className={`${cn.sign_up}`}>Sign up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
