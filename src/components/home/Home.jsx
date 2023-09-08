import { useContext } from "react";
import { DataContext } from "../App";
import selfPortrait from "../../assets/Attila_Huszar_pic_sm-nobg.webp";
import selfPortraitFallBack from "../../assets/Attila_Huszar_pic_sm-nobg.png";
import { Box } from "@mui/material";
import { useDarkMode } from "usehooks-ts";
import { PendingFetch } from "../PendingFetch";
import Style from "./Home.module.scss";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const data = useContext(DataContext);
  if (!data) {
    return <PendingFetch />;
  }

  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      mt={"100px"}>
      <Box
        className={Style.shadowed}
        component={"img"}
        src={selfPortrait}
        onError={e => (e.currentTarget.src = selfPortraitFallBack)}
        alt={"developer portrait"}
        style={{
          background: isDarkMode ? data.gradientPrimary : data.gradientSecondary,
          borderRadius: "50%",
          padding: "0.1rem",
          objectFit: "cover",
        }}
        width={{ xs: "320px", md: "375px" }}
        height={{ xs: "320px", md: "375px" }}
        mr={{ xs: 0, md: "50px" }}
        mb={{ xs: "50px", md: 0 }}
      />
      <Box
        style={{
          borderRadius: "1rem",
          background: isDarkMode ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
          boxShadow: isDarkMode
            ? "0 0 10px 0 rgba(0, 0, 0, 0.2)"
            : "0 0 10px 0 rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "1rem 2rem",
          transition: "all 0.4s ease",
        }}>
        <h1>
          Hi, I'm{" "}
          <span
            style={{
              background: data.gradientPrimary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {data.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {data.position}</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {data.miniBio.map((bio, i) => (
            <EmojiBullet key={i} emoji={bio.emoji} text={bio.text} url={bio.url} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}>
          {data.socials.map((social, i) => (
            <SocialIcon key={i} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
