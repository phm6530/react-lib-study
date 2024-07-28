import { useEffect, useState } from "react";

// View
const View = ({ data }: { data: string }) => {
  return <>{data}</>;
};

//서비스 로직
const fetchFunc = async () => {
  try {
    const response = await fetch("url");
    if (!response.ok) {
      throw new Error("서버오류");
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

// Adaptor
const Adaptor = () => {
  const [data, setData] = useState<string>();

  let arr: [string, number?, boolean?] = ["string", 1, false];
  arr = ["strings", 1];

  const test: (t: number) => void = (t) => {
    return t + 1;
  };
  test(1);

  console.log(arr);

  useEffect(() => {
    const fetching = async () => fetchFunc();
    fetching().then((data) => setData(data));
  }, []);

  return <>{data && <View data={data} />}</>;
};

export default Adaptor;
