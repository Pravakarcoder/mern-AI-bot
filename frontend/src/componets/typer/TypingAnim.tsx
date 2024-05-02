import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to our site",
        1000,
        "This is MICKY here to assist you 🤖",
        1500,
        "Ask your query... ",
        2000,
      ]}
      speed={50}
      style={{
        fontSize: "30px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
