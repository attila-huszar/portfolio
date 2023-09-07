import { useContext } from "react";
import { DataContext } from "../App";
import { Box } from "@mui/material";
import ringsLoader from "../../assets/rings.svg";
import Style from "./About.module.scss";
import Terminal from "./Terminal";

export default function About() {
  const data = useContext(DataContext);

  function aboutMeText() {
    if (!data)
      return (
        <div style={{ width: "100%" }} title="Loading...">
          <img src={ringsLoader} style={{ margin: "auto" }} alt="Loading" />
          <p style={{ textAlign: "center" }}>Loading...</p>
        </div>
      );

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
    if (!data)
      return (
        <div style={{ width: "100%" }} title="Loading...">
          <img src={ringsLoader} style={{ margin: "auto" }} alt="Loading" />
          <p style={{ textAlign: "center" }}>Loading...</p>
        </div>
      );

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

  // function miscText() {
  //   return (
  //     <>
  //       <p>
  //         <span style={{ color: info.colorPrimary }}>
  //           {firstName}_{lastName.} $
  //         </span>{' '}
  //         cd hobbies/interests
  //       </p>
  //       <p>
  //         <span style={{ color: info.colorPrimary }}>
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
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"3rem"}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      {/* <Terminal text={miscText()} /> */}
    </Box>
  );
}
