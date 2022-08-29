import { HoldStatusEnum } from "./Enums";

const Hold: React.FC<{
  holdStatus: HoldStatusEnum;
  toggleHoldStatus: () => void;
}> = ({ holdStatus, toggleHoldStatus }) => {
  const handleClick = () => {
    console.log("clicked");
    toggleHoldStatus();
  };
  return (
    <div onClick={handleClick}>
      {/* <p className="bg-green-900 text-2xl text-center text-violet-200 h-8 w-8">
        {isAlive ? "▇" : " "}
      </p> */}

      <button className="rounded-full bg-slate-400 text-xl">test</button>
      {/* TODO use hold status to update color */}
    </div>
  );
};

export { Hold };
