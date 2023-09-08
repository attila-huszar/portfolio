import { useContext } from "react";
import { DataContext } from "../App";
import { Box } from "@mui/material";
import Style from "./About.module.scss";
import { PendingFetch } from "../PendingFetch";
import Terminal from "./Terminal";

export default function About() {
  const data = useContext(DataContext);

  function aboutMeText() {
    if (!data) {
      return <PendingFetch />;
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {data.firstName.toLowerCase()}_{data.lastName.toLowerCase()} $
          </span>{" "}
          cat about
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            about <span className={Style.green}>(main) </span>${" "}
          </span>
          {data.bio}
        </p>
      </>
    );
  }

  const skillsSection = (skill, i) => {
    const keys = Object.keys(skill)[0];
    const values = skill[keys];

    return (
      <div key={i}>
        <p style={{ color: data.colorPrimary }}>{keys}</p>
        <ul className={Style.skills}>
          {values.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  function skillsText() {
    if (!data) {
      return <PendingFetch />;
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {data.firstName.toLowerCase()}_{data.lastName.toLowerCase()} $
          </span>{" "}
          cd skills
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            skills <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        {Object.keys(data.skills).map((e, i) => {
          return skillsSection({ [e]: data.skills[e] }, i);
        })}
      </>
    );
  }

  function miscText() {
    if (!data) {
      return <PendingFetch />;
    }

    return (
      <>
        <p>
          <span style={{ color: data.colorPrimary }}>
            {data.firstName.toLowerCase()}_{data.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies
        </p>
        <p>
          <span style={{ color: data.colorPrimary }}>
            hobbies <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {data.hobbies.map((hobby, i) => (
            <li key={i}>
              {hobby.emoji} {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"3rem"}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
