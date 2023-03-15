import { UserAvatarFragment } from '../../generated/graphql';
import "./UserAvatar.css";

export const UserAvatar = ({user}:{user: UserAvatarFragment}) => {
  if (user.avatarUrl) {
    return <div className="user-avatar" style={{backgroundImage: `url(${user.avatarUrl})`}} />;
  }

  return <div className="user-avatar">{user.name.split(" ").map(name => name[0]).join("")}</div>;
}
