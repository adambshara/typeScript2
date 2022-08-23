interface PersonProps {
  //   fName: string;
  //   lName: string;
  name: {
    first: string;
    last: string;
  };
}

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>
        First Name is {props.name.first} and Last Name is {props.name.last}
      </h2>
    </div>
  );
};
