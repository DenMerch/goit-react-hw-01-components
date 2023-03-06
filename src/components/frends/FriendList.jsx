
import { FriendItem } from "./FriendItem";
export const FriendList = ({ friends }) => {
    return (
        <div>
            <h2>FriendList</h2>
            < ul className="friend-list" >
                {friends.map((friend) => {
                    return (<li key={friend.id}>
                        <FriendItem friend={friend} />
                    </li>)

                })}



            </ul >
        </div>
    )
}
