import PropTypes from 'prop-types'; // ES6
import css from './FriendList.module.css';


export const FriendListItem = ({avatar, name, isOnline}) => {

 return (<li className={css.item}>
    {isOnline 
    ? <span className={`${css.statusOnline} ${css.status}`}></span> 
    : <span className={`${css.statusOffline} ${css.status}`}></span>}
 
 <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
 <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}