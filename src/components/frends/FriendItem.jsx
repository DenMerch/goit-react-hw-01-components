import PropTypes from "prop-types";
import css from './Friends.module.css'
export const FriendItem = ({ friends }) => {
    return (
        friends.map(friend => {
            return <li className={css.item} key={friend.id}>
                <span className={friend.isOnline ? css.green : css.red} ></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        })
    )
}
FriendItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ])))
}