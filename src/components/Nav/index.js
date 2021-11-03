import { NavMenu, UserInfo, ActionsButtons } from './style'
import { Link } from 'react-router-dom'
import userProfile from './assets/user-profile.svg'
import addImage from './assets/add.svg'
import { useEffect, useState } from 'react'


function Nav(props) {
  const [userInfo, setUserInfo] = useState({
    token: '',
    name: '',
    job: -1 
  })    

  let queryString = window.location.pathname

  useEffect(() => {
    let credencials = JSON.parse(localStorage.getItem('infos')) 

    credencials ? setUserInfo(credencials) : setUserInfo({
      name: 'User not logged in',
      job: -1,
    })

  }, [])

  console.log(queryString);
  return (
    <NavMenu>
      <UserInfo>
      <img src={userProfile} alt="user profile"/>
        <div className="userCredencials">
          <h1>
            {userInfo.name}
          </h1>
          <span>
            Officer 
          </span>
        </div>
      </UserInfo>
      <ActionsButtons>
        <button type="button">
          <Link to="/">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={queryString == '/' ? 'home' : ''}>
            <path d="M19.0028 2.7606C18.5967 2.37661 18.0589 2.16266 17.5 2.16266C16.9411 2.16266 16.4033 2.37661 15.9972 2.7606L5.40094 12.775C5.07649 13.082 4.81815 13.452 4.64174 13.8624C4.46532 14.2728 4.37456 14.7148 4.375 15.1615V27.3459C4.37558 28.2158 4.72154 29.0498 5.33683 29.6647C5.95212 30.2796 6.78639 30.625 7.65625 30.625H10.9375C11.8077 30.625 12.6423 30.2793 13.2577 29.6639C13.8731 29.0486 14.2188 28.214 14.2188 27.3437V21.875C14.2188 21.5849 14.334 21.3067 14.5391 21.1016C14.7442 20.8965 15.0224 20.7812 15.3125 20.7812H19.6875C19.9776 20.7812 20.2558 20.8965 20.4609 21.1016C20.666 21.3067 20.7813 21.5849 20.7813 21.875V27.3437C20.7813 28.214 21.127 29.0486 21.7423 29.6639C22.3577 30.2793 23.1923 30.625 24.0625 30.625H27.3438C28.214 30.625 29.0486 30.2793 29.6639 29.6639C30.2793 29.0486 30.625 28.214 30.625 27.3437V15.1593C30.6249 14.7129 30.5336 14.2711 30.3568 13.8611C30.18 13.4511 29.9215 13.0816 29.5969 12.775L19.0028 2.75622V2.7606Z" fill="white"/>
          </svg>
          </Link>
          
        </button>
        <button type="button"><Link to="/create/"><img src={addImage} alt="add" /></Link></button>
        
        

      </ActionsButtons>
    </NavMenu>
  );
}

export default Nav;