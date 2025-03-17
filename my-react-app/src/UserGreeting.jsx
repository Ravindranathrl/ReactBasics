import PropTypes from 'prop-types'; // ES6


function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return<h2> Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2> Please Login to Contine</h2>
    // }
    const welcomemsg = <h2 className='Welcome-Message'>Welcome {props.userName}</h2>
    const loginerror =  <h2 className='login-prompt'> Please login to continue</h2>
    return(props.isLoggedIn ? welcomemsg : loginerror )
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}
export default UserGreeting
