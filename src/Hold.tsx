const Hold: React.FC<{ isAlive: boolean; toggleIsAlive: () => void }> = ({
  isAlive,
  toggleIsAlive,
}) => {
  const handleClick = () => {
    toggleIsAlive();
  };
  return (
    <div onMouseOver={handleClick}>
      {/* <p className="bg-green-900 text-2xl text-center text-violet-200 h-8 w-8">
        {isAlive ? "▇" : " "}
      </p> */}
      <button className="rounded-full bg-slate-400">test</button>
    </div>
  );
};

export { Hold };
