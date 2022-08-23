interface GreetProps {
  name: string;
  messageCount?: number;
  isloggedin: boolean;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isloggedin
          ? `welcome ${props.name} to your website you have ${props.messageCount} messages`
          : "welcome Guest"}
      </h2>
    </div>
  );
};
