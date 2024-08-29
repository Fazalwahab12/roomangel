import React from "react";
// social_links
const social_links = [
  {
    link: "https://www.facebook.com/zaindgr8/",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/in/zain-ul-abideen-baloch/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/zainulabideen0007/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.tiktok.com/@desigeek0007",
    target: "_blank",
    icon: "fab fa-tiktok",
    name: "Youtube",
  },
  {
    link: "https://github.com/zaindgr8?tab=repositories",
    target: "_blank",
    icon: "fab fa-github",
    name: "Github",
  },
  {
    link: "https://www.youtube.com/channel/UC990B95EKNuVaCVcdo_-9Yg",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((item, i) => (
        <a
          className="hover:text-[#B91C1B]"
          key={i}
          target="_blank"
          href={item.link}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;


const social_links_home_two = [
  {
    link: "https://www.facebook.com/zaindgr8/",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/in/zain-ul-abideen-baloch/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/zainulabideen0007/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.tiktok.com/@desigeek0007",
    target: "_blank",
    icon: "fab fa-tiktok",
    name: "Youtube",
  },
  {
    link: "https://github.com/zaindgr8?tab=repositories",
    target: "_blank",
    icon: "fab fa-github",
    name: "Github",
  },
  {
    link: "https://www.youtube.com/channel/UC990B95EKNuVaCVcdo_-9Yg",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
];

export const SocialLinksHomeTwo = () => {
  return (
    <>
      {social_links_home_two.map((item, i) => (
        <a key={i} target="_blank" href={item.link}>
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

 