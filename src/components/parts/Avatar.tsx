import User from "../../@types/User";

interface AvatarPropsType {
  user: User;
}

const Avatar = (props: AvatarPropsType) => (
  <span style={{ marginRight: 10 }}>
    {props.user.avatar ? (
      <img
        alt=""
        src={props.user.avatar}
        style={{ borderRadius: "50%", width: 36, height: 36 }}
      />
    ) : (
      <img
        alt=""
        src="/img/avatar.png"
        style={{ borderRadius: "50%", width: 36, height: 36 }}
      />
    )}
  </span>
);

export default Avatar;
