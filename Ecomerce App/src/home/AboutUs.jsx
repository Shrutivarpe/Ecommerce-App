import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import ShrutiImg from '../assets/images/instructor/Shruti_Img.jpeg';

const subTitle = "About Me";
const title = "I'm Shruti Varpe";
const desc =
  "I'm a passionate and detail-oriented IT professional with strong skills in React, Python, SQL, and Power BI. I'm currently pursuing PGDM and have hands-on experience with full-stack development, APIs, and data analytics.";
const btnText = "View My Resume";

const countList = [
  {
    iconName: 'icofont-code-alt',
    count: 10,
    text: 'Projects Completed',
  },
  {
    iconName: 'icofont-certificate',
    count: 5,
    text: 'Certifications Earned',
  },
  {
    iconName: 'icofont-users-alt-4',
    count: 2,
    text: 'Internships Completed',
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 ppadding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            {/* Count Items */}
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} duration={2} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Content */}
            <div className="col">
              <div className="instructor-content">
                <p className="subtitle">{subTitle}</p>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col">
              <div className="instructor-thumb text-center">
                <img
                  src={ShrutiImg}
                  alt="Shruti Varpe"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
