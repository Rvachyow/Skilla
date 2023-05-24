export const CallStatus = ({
  code,
  status,
}: {
  code: number;
  status: string;
}) => {
  if (status === "Не дозвонился")
    return <img src="./assets/callStatus/fail.svg" alt="" />;

  switch (code) {
    case 0:
      return <img src="./assets/callStatus/0.svg" alt="" />;
    case 1:
      return <img src="./assets/callStatus/1.svg" alt="" />;
  }
  return <></>;
};
