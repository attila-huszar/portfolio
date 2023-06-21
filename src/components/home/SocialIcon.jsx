import Tooltip from "@mui/material/Tooltip";

export default function SocialIcon({ link, icon, label }) {
  return (
    <Tooltip title={label} arrow>
      <a
        target={"_blank"}
        aria-label={label}
        rel="noopener noreferrer"
        href={link}>
        <i className={icon} aria-hidden="true" />
      </a>
    </Tooltip>
  );
}
