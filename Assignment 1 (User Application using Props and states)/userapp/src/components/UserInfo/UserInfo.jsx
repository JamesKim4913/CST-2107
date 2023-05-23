import UserCard from "../UserCard/UserCard";
import './UserInfo.css';

const UserInfo = ({ data }) => {  

  const userList = data[0].data;

  return (
    <div className='user-card-container'>
      {
        userList.map((userData) => {
          return  <UserCard data={userData} />
        })
      }
    </div>
  )
}

export default UserInfo;