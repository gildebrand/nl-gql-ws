import { useCurrentUserQuery } from '../../generated/graphql';
import { UserAvatar, UserAvatarSize } from '../UserAvatar/UserAvatar';

export const CurrentUser = () => {
  const {data} = useCurrentUserQuery();

  if (!data) {
    return null;
  }

  const user = data.getCurrentUser;

  return <div style={{
    display: "flex",
    gap: "8px",
    alignItems: "center",
  }}>
    <UserAvatar user={user} size={UserAvatarSize.Large}/>
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    }}>
      <div style={{fontSize: "15px", fontWeight: "bold"}}>{user.name}</div>
      <div style={{fontSize: "12px", textTransform: "uppercase"}}>{user.email}</div>
    </div>
  </div>
};
