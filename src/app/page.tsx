"use client";

import FormDemo from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import PDFResumeDoc from "@/components/PDFKit/PDFResumeDoc";
import PDFViewer from "@/components/PDFKit/PDFViewer";
import { PersonalInfo } from "@/types/ResumeDetailsTypes";
import { useState } from "react";

type resumeDataState = {
  personalInfo: PersonalInfo;
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
};

export default function Home() {
  const [data, setData] = useState<resumeDataState>(initailState);
  const onChangeHandler = (field: string, value: any) => {
    setData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
      },
    }));
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-row m-3">
        <div className="basis-4/12">
          <FormDemo
            personalInfo={data.personalInfo}
            onChange={onChangeHandler}
          />
        </div>
        <div className="basis-8/12 border rounded-[10px] ml-4 p-8">
          <PDFViewer width={"100%"} height={"100%"}>
            <PDFResumeDoc personalInfo={data.personalInfo} />
          </PDFViewer>
        </div>
      </div>
    </>
  );
}
