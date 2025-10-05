const UserGreeting = (props) => {
    // if (props.isLoggedIn) {
    //     return(<p>Welcome</p>);
    // }
    // else{
    //     return(<p>Not Authorized Please Log in</p>);
    // }
    return(
        props.isLoggedIn ? <p>Welcome</p> : <p>Not Authorized Please Log in</p>
    );
}

export default UserGreeting;