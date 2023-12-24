import React from "react";
import Yes from "./Yes";
import Question from "./Question";

const App: React.FC = (): JSX.Element => {
  const [isAgree, setIsAgree] = React.useState(false);

  return isAgree ? <Yes /> : <Question onYes={() => setIsAgree(true)} />;
};

export default App;
