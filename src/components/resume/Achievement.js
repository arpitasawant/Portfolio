import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Achievements and Activities</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Zensar Training"
            subTitle="Shortlisted for Zensar's Training"
            result="Feb-2023"
            des=" Zensar Technologies and Zensar Foundation today announced the launch of 
            the Employability Skills Development (ESD) Program for training of fresh graduates"
          />
          <ResumeCard
            title="GTT Barclays"
            subTitle="Training on Aptitude and Soft Skills"
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 202345657 </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Member Of Coder's Club"
            subTitle="October 2022"
            result="JSPM'S ICOER,Pune"
            des="Learn and develop New Technologies.Organize Seminars and Bootcamps for Languages and Technologies"
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="March 2023-May 2023"
            result="Flourisense,Pune"
            des="
            Flourisense is the India’s leading bespoke software development company, with a fully in-house 300+ team of 
            expert software developers and technology professionals specialising in both Microsoft and the MEAN stack.Worked on
             real-time project : Flourishive,Domain : Frontend development,Worked on Technologies : ReactJS,Tailwind CSS"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
