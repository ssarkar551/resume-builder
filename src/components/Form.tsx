"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { Education, PersonalInfo, } from "@/types/ResumeDetailsTypes";

type FormDemoProp = {
  personalInfo: PersonalInfo;
  education: Education;
  onChange: (field: string, value: any) => void;
};

const FormDemo = ({ personalInfo, education, onChange }: FormDemoProp) => (
  <Form.Root className="border rounded-[10px] p-8">
    <div className="font-bold pb-5">Personal Information</div>
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
            onChange={(e) => {console.log(e.target.value);onChange("link", e.target.value)}}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="site">
        <Form.Label className="text-[15px] font-medium leading-[35px] ">
          Choose{" "}
        </Form.Label>
        <Form.Control asChild>
          <select className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6">
            <option
              value="github"
              selected={personalInfo?.socialLinks[0].socialMedia === "Github"}
            >
              Github
            </option>
            <option
              value="linkedin"
              selected={personalInfo?.socialLinks[0].socialMedia === "LinkedIn"}
            >
              LinkedIn
            </option>
            <option
              value="twitter"
              selected={personalInfo?.socialLinks[0].socialMedia === "Twitter"}
            >
              Twitter
            </option>
            <option
              value="portfolio"
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
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="site">
        <Form.Label className="text-[15px] font-medium leading-[35px]">
          Choose{" "}
        </Form.Label>
        <Form.Control asChild>
          <select className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6">
            <option
              value="github"
              selected={personalInfo?.socialLinks[1].socialMedia === "Github"}
            >
              Github
            </option>
            <option
              value="linkedin"
              selected={personalInfo?.socialLinks[1].socialMedia === "LinkedIn"}
            >
              LinkedIn
            </option>
            <option
              value="twitter"
              selected={personalInfo?.socialLinks[1].socialMedia === "Twitter"}
            >
              Twitter
            </option>
            <option
              value="portfolio"
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
    <div className="font-bold py-5">Education</div>
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
            value={education.startDate}
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
            value={education.endDate}
            onChange={(e) => onChange("endDate", e.target.value)}
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
            <option value="CGPA" selected={education?.scoreType === "CGPA"}>CGPA </option>
            <option value="Percentage" selected= {education?.scoreType === "Percentage"}>Percentage</option>
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
    <div className="font-bold py-5">Experience</div>
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
            required
          />
        </Form.Control>
      </Form.Field>
    </div>
    <div className="font-bold py-5">Skills</div>
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
          />
        </Form.Control>
      </Form.Field>
    </div>
    <div className="font-bold py-5">Projects</div>
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
            required
          />
        </Form.Control>
      </Form.Field>
    </div>

    {/* <Form.Submit asChild>
      <button className="box-border w-full bg-black dark:bg-white shadow-black text-black dark:text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit> */}
  </Form.Root>
);

export default FormDemo;
