import css from './Friends.module.css'
import PropTypes from "prop-types";
export const FriendList = ({ friends }) => {
    return (
        <div>
            <h2>FriendList</h2>
            < ul className="friend-list" >
                {friends.map(friend => {
                    return <li className={css.item} key={friend.id}>
                        {friend.isOnline ? <span className={css.green}></span> : <span className={css.red}></span>}
                        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                        <p className="name">{friend.name}</p>
                    </li>
                })}
            </ul >
        </div>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ])))
}