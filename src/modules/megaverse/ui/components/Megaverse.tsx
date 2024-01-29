type MegaverseProps = {
  values: string[][];
};

export const Megaverse = ({ values }: MegaverseProps) => {
  const renderEmoji = (value: string) => {
    switch (value) {
      case "SPACE":
        return "🚀";
      case "POLYANET":
        return "🪐";
      case "SOLOON":
        return "🌤️";
      case "COMETH":
        return "☄️";

      default:
        return "";
    }
  };

  return (
    <section>
      <div className="text-3xl">
        {values.map((value, i) => {
          return (
            <p key={i}>
              {value.map((item, j) => {
                return <span key={j}>{renderEmoji(item)}</span>;
              })}
            </p>
          );
        })}
      </div>
    </section>
  );
};
