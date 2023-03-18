import { UserAvatarFragment } from '../../generated/graphql';
import "./UserAvatar.css";

export enum UserAvatarSize {
  Small= 24,
  Large= 36
}

export const UserAvatar = ({
  user,
  size
}:{
  user: UserAvatarFragment;
  size: UserAvatarSize;
}) => {
  const className = `user-avatar user-avatar--${size}`;

  if (user.avatarUrl) {
    return <div
      className={className}
      style={{backgroundImage: `url(${user.avatarUrl})`}}
    />;
  }

  return <div className={className}>
    {user.name.split(" ").map(name => name[0]).join("")}
  </div>;
}
