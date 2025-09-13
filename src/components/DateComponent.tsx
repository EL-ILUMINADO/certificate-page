const DateComponent = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });

  const suffix = (day: number) => {
    if (day > 3 && day < 21) return "TH";
    switch (day % 10) {
      case 1:
        return "ST";
      case 2:
        return "ND";
      case 3:
        return "RD";
      default:
        return "TH";
    }
  };

  return <span>{`${day}${suffix(day)} ${month.toUpperCase()}`}</span>;
};

export default DateComponent;
