import './UserCard.css';

const UserCard = ({ data }) => {
  return (
    <div className='card-container'>

      <div className='avatar-box'>
        <img className="avatar" src={data.avatar} alt=""/>
      </div>

      <div className='card-body'>       
        <h2>{data.first_name}</h2>        
        <h2>{data.email}</h2>
      </div>   

    </div>
  )
}

export default UserCard;