import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../assets/info";

export default function About() {
  const firstName = info.firstName.toLowerCase();
  const lastName = info.lastName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}_{lastName} $
          </span>{" "}
          cat about
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about <span className={Style.green}>(main) </span>${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  const skillsSection = (skill, i) => {
    const keys = Object.keys(skill)[0];
    const values = skill[keys];

    return (
      <div key={i}>
        <p style={{ color: info.baseColor }}>{keys}</p>
        <ul className={Style.skills}>
          {values.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}_{lastName} $
          </span>{" "}
          cd skills
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        {Object.keys(info.skills).map((e, i) => {
          return skillsSection({ [e]: info.skills[e] }, i);
        })}
      </>
    );
  }

  // function miscText() {
  //   return (
  //     <>
  //       <p>
  //         <span style={{ color: info.baseColor }}>
  //           {firstName}_{lastName.} $
  //         </span>{' '}
  //         cd hobbies/interests
  //       </p>
  //       <p>
  //         <span style={{ color: info.baseColor }}>
  //           hobbies/interests <span className={Style.green}>(main)</span> $
  //         </span>{' '}
  //         ls
  //       </p>
  //       <ul>
  //         {info.hobbies.map((hobby, i) => (
  //           <li key={i}>
  //             <Box component={'span'} mr={'1rem'}>
  //               {hobby.emoji}
  //             </Box>
  //             {hobby.label}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      {/* <Terminal text={miscText()} /> */}
    </Box>
  );
}
