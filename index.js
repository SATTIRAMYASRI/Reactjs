const Button = (props) => {
  //  Write your code here.
  const { colorHex, message } = props;
  console.log(props.colorHex, props.message);
  return <button style={backgroundColor:`${colorHex}`}>{message}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="mainHeading">Social Button</h1>
    <div className="buttonContainer">
      <Button colorHex="#eab308" message="Like" />
      <Button colorHex="#ffffff" message="Comment" />
      <Button colorHex="#1d4ed8" message="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
