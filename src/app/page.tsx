"use client";

import FormDemo from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import PDFResumeDoc from "@/components/PDFKit/PDFResumeDoc";
import PDFViewer from "@/components/PDFKit/PDFViewer";
import { Education, Experience, PersonalInfo, Project, Skills } from "@/types/ResumeDetailsTypes";
import { useState } from "react";

type resumeDataState = {
  personalInfo: PersonalInfo;
  education: Education;
  experience: Experience;
  skills: Skills;
  project: Project;
};

const initailState: resumeDataState = {
  personalInfo: {
    fullName: "John Doe",
    phoneNumber: "(123) 456-7890",
    email: "jhon.doe@me.com",
    address: "123/A Main Street",
    jobTitle: "Software Engineer",
    socialLinks: [
      { socialMedia: "Github", link: "https://github.com" },
      { socialMedia: "LinkedIn", link: "https://www.linkedin.com" },
    ],
  },
  education: {
    institution: "AOT",
    location: "ADST",
    degree: "B.Tech",
    field: "ECE",
    educationStartDate: "24/07/2018",
    educationEndDate: "30/06/2022",
    scoreType: "CGPA",
    score: "9.03"
  },
  experience: {
    organization: "ABC",
    location: "NGP",
    title: "SE",
    description: "fjkhjad",
    startDate: "27/06/2022"

  },
  skills: {
    languages: "Java, Javascript",
    libraries: "ReactJS",
    platforms: "AWS"
  },
  project: {
    projectTitle: "Resume Builder",
    technologies: "React, Next",
    projectLinks: "github.com",
    description: "project desc",
    projectStart: "25/05/24",
    projectEnd: "25/08/24"
  }
};

export default function Home() {
  const [data, setData] = useState<resumeDataState>(initailState);
  const onChangeHandler = (field: string, value: any) => {
    setData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
        //social links not getting updated in runtime, as in ...prevData.personalInfo the social links are not getting destructured
      },
      education: {
        ...prevData.education,
        [field]: value,
      },
      experience: {
        ...prevData.experience,
        [field]: value
      },
      skills: {
        ...prevData.skills,
        [field]: value
      },
      project: {
        ...prevData.project,
        [field]: value
      },
    }));
  };
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-2 grid-cols-1 m-3">
        <div className="basis-4/12">
          <FormDemo
            personalInfo={data.personalInfo}
            education={data.education}
            experience={data.experience}
            skills={data.skills}
            project={data.project}
            onChange={onChangeHandler}
          />
        </div>
        <div className="basis-8/12 border rounded-[10px] ml-4 p-8">
          <PDFViewer width={"100%"} height={"100%"}>
            <PDFResumeDoc personalInfo={data.personalInfo} education={data.education} experience={data.experience} skills={data.skills} project={data.project}/>
          </PDFViewer>
        </div>
      </div>
    </>
  );
}
