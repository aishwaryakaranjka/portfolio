import React from "react";
import "./projects.css";
import blogImg from "../Assets/blog.jpg";


const Services = () => {
  return (
    <section id="services">
      <div className="projects">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="project">
          <div className="project-info">
            <h2 className="project-title">“Logbook”</h2>
            <ul>
              <li>
                Developed a “Logbook” effectively manages and handles all the function of maintain dairies
              </li>
              <li>
                The software system can store the data of personal notes and user also create different categories.
              </li>
              <li>
                The system needs a registered users who can write their personal notes.
              </li>
              <li>
                ntegrated Cloudinary for image storage and management, allowing
                users to seamlessly upload and display images in their posts.
              </li>
              <li>
                Showcase your full-stack development skills with a live demo or
                screenshots in your portfolio.
              </li>
            </ul>
          </div>
          <div className="project-img">
            <img src={blogImg} alt="" />
          </div>
        </div>
        <div className="project-rev">
          <div className="project-info">
            <h2 className="project-title">Cryptography  </h2>
            <ul>
              <li>
                Cryptography is the science of information and communication security.
              </li>
              <li>
                The main objective this is project is to keep the data secure. It protects against
                unauthorized parties by preventing unauthorized alteration of use
              </li>
              <li>
                It uses an cryptographic system to transform a plaintext into a cipher text, using a key.
              </li>

            </ul>
          </div>
          <div className="project-img">
            <img src={blogImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
