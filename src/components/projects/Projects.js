import React from 'react'
import Title from '../layouts/Title'
import { contactform, loginimg, foodimg, landing, reactfood, Youtube } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YOUTUBE CLONE"
          des="The YouTube Clone project aims to replicate the basic functionality and design of the popular 
          video-sharing platform YouTube using the React JavaScript library and Tailwind CSS framework. 
          This clone will allow users to browse, search, and watch videos, 
          as well as provide a familiar user interface that resembles the original YouTube."
          src={Youtube}
        />
        <ProjectsCard
          title="House Of Taste"
          des="The Online Food Ordering Website is a web application developed using React, a popular JavaScript library 
          for building user interfaces. The website aims to provide a convenient and user-friendly platform for customers 
          to browse and order food from various restaurants online."
          src={reactfood}
        />
        <ProjectsCard
          title="Landing Page"
          des=" A landing page is a crucial component of any website, designed specifically to capture the attention and 
          interest of visitors. It serves as the entry point to your website and aims to convert visitors into customers or leads.
           When creating a landing page, the goal is to present information in a concise and visually appealing manner."
          src={landing}
        />
        <ProjectsCard
          title="Food Website"
          des=" 
The project aims to create a food website that showcases a variety of food items, 
complete with visually appealing images, using HTML and CSS. The website 
will serve as a platform to display a diverse range of delicious dishes, catering to different tastes and preferences."
          src={foodimg}
        />
        <ProjectsCard
          title="Login Page-PHP"
          des="The login page project involves creating a secure login system using MySQL and PHP. The purpose of this project is to 
          allow users to register for an account and subsequently log in to access restricted areas or personalized 
          content on a website."
          src={loginimg}
        />
        <ProjectsCard
          title="Contact-Form"
          des=" The project aims to create a contact form using HTML, CSS, and JavaScript. The contact 
          form will provide a convenient and user-friendly way for visitors to get in touch with the website 
          owner or administrator."
          src={contactform}
        />
      </div>
    </section>
  );
}

export default Projects