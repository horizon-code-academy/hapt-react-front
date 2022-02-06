interface InfoPropsType {
  user: {
    firstName: string;
    lastName: string;
    birthDate: string;
    address: string;
  };
  subject: {
    label: string;
    nb_hour: number;
  };
}

const Info = (props: InfoPropsType) => {
  return (
    <>
      <h2 style={{ color: "gray" }}>Information: {props.user.address}</h2>
      <h3>Birth date: {props.user.birthDate}</h3>
      <h3>
        Formation: {props.subject.label} - {props.subject.nb_hour} hours
      </h3>
    </>
  );
};

export default Info;
