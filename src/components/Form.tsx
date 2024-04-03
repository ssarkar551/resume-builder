"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import {
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skills,
} from "@/types/ResumeDetailsTypes";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type FormDemoProp = {
  personalInfo: PersonalInfo;
  education: Education;
  experience: Experience;
  skills: Skills;
  project: Project;
  onChange: (field: string, value: any) => void;
};

const FormDemo = ({
  personalInfo,
  education,
  experience,
  skills,
  project,
  onChange,
}: FormDemoProp) => {
  const [open, setOpen] = useState(1);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Form.Root className="border rounded-[10px] p-8">
      <Accordion open={alwaysOpen} placeholder={"Personal Information"}>
        <AccordionHeader
          placeholder={"Personal Information"}
          onClick={() => handleOpen(1)}
        >
          <div className="font-bold pb-5">Personal Information</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-wrap">
            <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
              <Form.Field className="grid mb-[10px]" name="fullname">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px]">
                    Full Name
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] dark:text-white text-black opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your full name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => onChange("fullName", e.target.value)}
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="grid mb-[10px]" name="phone">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] ">
                    Phone Number
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] dark:text-white text-black opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your phone number
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="text"
                    value={personalInfo.phoneNumber}
                    onChange={(e) => onChange("phoneNumber", e.target.value)}
                    required
                  />
                </Form.Control>
              </Form.Field>
            </div>
            <div className="flex flex-row items-center justify-center w-full mb-[10px] space-x-5">
              <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px]">
                    Email
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] dark:text-white text-black opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your email
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="email"
                    value={personalInfo?.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="grid mb-[10px]" name="address">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] ">
                    Address
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] dark:text-white text-black opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your address
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="text"
                    value={personalInfo.address}
                    onChange={(e) => onChange("address", e.target.value)}
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="grid mb-[10px]" name="jobtitle">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px]">
                    Job Title
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] dark:text-white text-black opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your job title
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="text"
                    value={personalInfo.jobTitle}
                    onChange={(e) => onChange("jobTitle", e.target.value)}
                    required
                  />
                </Form.Control>
              </Form.Field>
            </div>
          </div>
          <div className="font-bold py-5">Links</div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Link
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-gray selection:bg-blackA6"
                  type="text"
                  value={personalInfo?.socialLinks[0].link}
                  onChange={(e) => {
                    console.log(e.target.value);
                    onChange("link", [
                      {
                        socialMedia: personalInfo?.socialLinks[0].socialMedia,
                        link: e.target.value,
                      },
                      personalInfo?.socialLinks[1],
                    ]);
                  }}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="site">
              <Form.Label className="text-[15px] font-medium leading-[35px] ">
                Choose{" "}
              </Form.Label>
              <Form.Control asChild>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    onChange("link", [
                      {
                        socialMedia: e.target.value,
                        link: personalInfo?.socialLinks[0].link,
                      },
                      personalInfo?.socialLinks[1],
                    ]);
                  }}
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                >
                  <option
                    value="Github"
                    selected={
                      personalInfo?.socialLinks[0].socialMedia === "Github"
                    }
                  >
                    Github
                  </option>
                  <option
                    value="LinkedIn"
                    selected={
                      personalInfo?.socialLinks[0].socialMedia === "LinkedIn"
                    }
                  >
                    LinkedIn
                  </option>
                  <option
                    value="Twitter"
                    selected={
                      personalInfo?.socialLinks[0].socialMedia === "Twitter"
                    }
                  >
                    Twitter
                  </option>
                  <option
                    value="Portfolio"
                    selected={
                      personalInfo?.socialLinks[0].socialMedia === "Portfolio"
                    }
                  >
                    Portfolio
                  </option>
                </select>
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link2">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] ">
                  Link
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={personalInfo?.socialLinks[1].link}
                  onChange={(e) => {
                    console.log(e.target.value);
                    onChange("link", [
                      personalInfo?.socialLinks[0],
                      {
                        socialMedia: personalInfo?.socialLinks[1].socialMedia,
                        link: e.target.value,
                      },
                    ]);
                  }}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="site">
              <Form.Label className="text-[15px] font-medium leading-[35px]">
                Choose{" "}
              </Form.Label>
              <Form.Control asChild>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    onChange("link", [
                      personalInfo?.socialLinks[0],
                      {
                        socialMedia: e.target.value,
                        link: personalInfo?.socialLinks[1].link,
                      },
                    ]);
                  }}
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                >
                  <option
                    value="Github"
                    selected={
                      personalInfo?.socialLinks[1].socialMedia === "Github"
                    }
                  >
                    Github
                  </option>
                  <option
                    value="LinkedIn"
                    selected={
                      personalInfo?.socialLinks[1].socialMedia === "LinkedIn"
                    }
                  >
                    LinkedIn
                  </option>
                  <option
                    value="Twitter"
                    selected={
                      personalInfo?.socialLinks[1].socialMedia === "Twitter"
                    }
                  >
                    Twitter
                  </option>
                  <option
                    value="Portfolio"
                    selected={
                      personalInfo?.socialLinks[1].socialMedia === "Portfolio"
                    }
                  >
                    Portfolio
                  </option>
                </select>
              </Form.Control>
            </Form.Field>
          </div>
        </AccordionBody>
      </Accordion>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Accordion open={open === 2} placeholder={"Education"}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          placeholder={"Education"}
        >
          <div className="font-bold py-5">Education</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Institution
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.institution}
                  onChange={(e) => onChange("institution", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Location
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.location}
                  onChange={(e) => onChange("location", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Degree
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.degree}
                  onChange={(e) => onChange("degree", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Field of Study
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.field}
                  onChange={(e) => onChange("field", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Start Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.educationStartDate}
                  onChange={(e) =>
                    onChange("educationStartDate", e.target.value)
                  }
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  End Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.educationEndDate}
                  onChange={(e) => onChange("educationEndDate", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="score">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Score Type
                </Form.Label>
              </div>
              <Form.Control asChild>
                <select className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6">
                  <option
                    value="CGPA"
                    selected={education?.scoreType === "CGPA"}
                  >
                    CGPA{" "}
                  </option>
                  <option
                    value="Percentage"
                    selected={education?.scoreType === "Percentage"}
                  >
                    Percentage
                  </option>
                </select>
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Score
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={education.score}
                  onChange={(e) => onChange("score", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
        </AccordionBody>
      </Accordion>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Accordion open={open === 3} placeholder={"Experience"}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          placeholder={"Experience"}
        >
          <div className="font-bold py-5">Experience</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Organization
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={experience.organization}
                  onChange={(e) => onChange("organization", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Location
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={experience.location}
                  onChange={(e) => onChange("location", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="title">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Job Title
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={experience.title}
                  onChange={(e) => onChange("title", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <Form.Field name="description">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] d">
                Description
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[80px] appearance-none items-start justify-start rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                type="textarea"
                value={experience.description}
                onChange={(e) => onChange("description", e.target.value)}
                required
              />
            </Form.Control>
          </Form.Field>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Start Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={experience.startDate}
                  onChange={(e) => onChange("startDate", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  End Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={experience.endDate}
                  onChange={(e) => onChange("endDate", e.target.value)}
                />
              </Form.Control>
            </Form.Field>
          </div>
        </AccordionBody>
      </Accordion>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Accordion open={open === 4} placeholder={"Skills"}>
        <AccordionHeader onClick={() => handleOpen(4)} placeholder={"Skills"}>
          <div className="font-bold py-5">Skills</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="languages">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Languages
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-[500px] bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  required
                  name="languages"
                  placeholder="C++, Java, Python"
                  value={skills.languages}
                  onChange={(e) => onChange("languages", e.target.value)}
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="tools">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Tools/Libraries
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-[500px] bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  required
                  placeholder="React/Angular"
                  value={skills.libraries}
                  onChange={(e) => onChange("libraries", e.target.value)}
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="tools">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Tools/Platforms
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-[500px] bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  required
                  placeholder="GCP/Github"
                  value={skills.platforms}
                  onChange={(e) => onChange("platforms", e.target.value)}
                />
              </Form.Control>
            </Form.Field>
          </div>
        </AccordionBody>
      </Accordion>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Accordion open={open === 5} placeholder={"Project"}>
        <AccordionHeader onClick={() => handleOpen(5)} placeholder={"Projects"}>
          <div className="font-bold py-5">Projects</div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5">
            <Form.Field className="grid mb-[10px]" name="ptitle">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Project Title
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={project.projectTitle}
                  onChange={(e) => onChange("projectTitle", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex items-baseline justify-start">
            <Form.Field name="techs">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px]">
                  Technolgies
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border bg-black dark:bg-white shadow-black inline-flex h-[35px] w-[500px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={project.technologies}
                  onChange={(e) => onChange("technologies", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="flex items-baseline justify-start py-5">
            <Form.Field name="plinks">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px]">
                  Project Links
                </Form.Label>
              </div>
              {/* add button to create live link as well as github */}
              <Form.Control asChild>
                <input
                  className="box-border bg-black dark:bg-white shadow-black inline-flex h-[35px] w-[500px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={project.projectLinks}
                  onChange={(e) => onChange("projectLinks", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
          <Form.Field name="description">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] d">
                Description
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[80px] appearance-none items-start justify-start rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                type="textarea"
                value={project.description}
                onChange={(e) => onChange("description", e.target.value)}
                required
              />
            </Form.Control>
          </Form.Field>
          <div className="flex flex-row items-start justify-start w-full mb-[10px] space-x-5 py-5">
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  Start Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={project.projectStart}
                  onChange={(e) => onChange("projectStart", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="link1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] d">
                  End Month/Year
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="text"
                  value={project.projectEnd}
                  onChange={(e) => onChange("projectEnd", e.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
        </AccordionBody>
      </Accordion>

      {/* <Form.Submit asChild>
      <button className="box-border w-full bg-black dark:bg-white shadow-black text-black dark:text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit> */}
    </Form.Root>
  );
};

export default FormDemo;
