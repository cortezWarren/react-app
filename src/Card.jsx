import profilePic from './assets/react.svg'
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';

const Card = () => {
    const name = "Squidward";
    return ( 
        <div className="card">
            <img src={profilePic} className="card-image" alt="profile picture"></img>
            <h2>Card</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti porro nihil explicabo sit, pariatur blanditiis hic libero officia commodi. Magnam molestias in ipsa eum, voluptatem fugit unde enim saepe.</p>
            <Student name={name} age={20} isStudent={true} />
            <UserGreeting isLoggedIn={false} />
            <Button/>
        </div>
    );
}
 
export default Card;