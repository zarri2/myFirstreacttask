function Profile(props) {
    const {Name, gender,age,education,city} =props;
return(
    <>
    <div className="Heading" >
    <h1 style={{color:"yellow"}}>My Bio</h1>
    
    <p> {Name}</p>
    <p>Recently Completed Bachelor In {education} </p>
    <p>Living In {city} </p>
    <p>Age is {age} </p>
    <p>Gender is {gender} </p>
    
    </div>
    </>
)
}

export default Profile;

