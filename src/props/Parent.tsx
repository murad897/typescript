import Child from "./Child";

const Parent = () => {
  return (
    <div>
      Parent
      <Child onClick={() => console.log("fsfsd")} color="red" />
    </div>
  );
};

export default Parent;
