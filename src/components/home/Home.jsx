import selfPortrait from "../../assets/Attila_Huszar_pic_sm-nobg.png";
import { Box } from "@mui/material";
import { useDarkMode } from "usehooks-ts";
import classNames from "classnames";
import Style from "./Home.module.scss";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { info } from "../../assets/info";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}>
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        component={"img"}
        src={selfPortrait}
        alt={"image of developer"}
        style={{
          background: info.gradient,
          borderRadius: "50%",
          padding: "0.75rem",
          objectFit: "cover",
        }}
        width={{ xs: "320px", md: "380px" }}
        height={{ xs: "320px", md: "380px" }}
        mr={{ xs: 0, md: "50px" }}
      />
      <Box
        style={{
          borderRadius: "1rem",
          background: isDarkMode
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)",
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
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {info.firstName}
          </span>
          <span className={Style.hand}> 🤚</span>
        </h1>
        <h2>I'm {info.position}</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, i) => (
            <EmojiBullet
              key={i}
              emoji={bio.emoji}
              text={bio.text}
              url={bio.url}
            />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}>
          {info.socials.map((social, i) => (
            <SocialIcon
              key={i}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
