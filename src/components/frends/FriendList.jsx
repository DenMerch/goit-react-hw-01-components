

import { FriendItem } from "./FriendItem";
export const FriendList = ({ friends }) => {
    return (
        <div>
            <h2>FriendList</h2>
            < ul className="friend-list" >
                <FriendItem friends={friends} />

            </ul >
        </div>
    )
}
