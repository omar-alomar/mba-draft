import React from 'react'
import NavButton from './NavButton'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkIcon from '@mui/icons-material/Link';
import NavProfile from './NavProfile';

const Buttons = [
  {text: "Projects", url: "/projects", img: () => <FormatListBulletedIcon />},
  {text: "Announcements", url: "/announcements", img: () => <AnnouncementIcon />},
  {text: "Contacts", url: "/contacts", img: () => <ContactPageIcon />},
  {text: "Links", url: "/links", img: () => <LinkIcon />}
]

const Navbar = () => {
  
  return (
    <div className="flex flex-column min-h-screen">
      <div className="navbar sm:w-80 md:w-60 lg:w-80 bg-mbaRed font-Nunito">
        <NavProfile />
            {Buttons.map((button, i) => {
              return <NavButton 
                      img={button.img()} 
                      text={button.text}
                      url={button.url}
                      key={i} />
            })}
      </div>
    </div>
  )
}

export default Navbar