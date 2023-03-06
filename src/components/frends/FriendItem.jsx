import PropTypes from "prop-types";
import css from './Friends.module.css'
export const FriendItem = ({ friend }) => {
    return (
        <div className={css.item}>
            <div className={friend.isOnline ? css.green : css.red}   ></div>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name} </p>
        </div>)



}
FriendItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ])))
}