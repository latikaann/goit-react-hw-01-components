import PropTypes from 'prop-types'; // ES6
import css from './FriendList.module.css';
import {FriendListItem} from './FriendListItem';



export const FriendList = ({friends}) => {
 
 return <ul className={css.friendList}>
    {friends.map(({ avatar, name, id, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
    ))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
   
}