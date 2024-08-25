import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  //   const display = false;
  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }

  // ELEMENT VARIABLES : TO ELIMINTATE THE USE OF MULTIPLE RETURN STATEMENTS
  //   //using element variable
  //   let message;
  //   const display = false;
  //   if (display) {
  //     message = <h1>This is message 1</h1>;
  //   } else {
  //     message = <h1>This is message 2</h1>;
  //   }
  //   return message;

  //USING TERNARY OPERATORS
  //   const display = false;
  //   return display ? <h1>This is message 1</h1> : <h1>This is message 2</h1>;

  // USING TERNARY WITH COMPONENTS
  const display = true;
  return display ? <Welcome /> : <Code />;
}
