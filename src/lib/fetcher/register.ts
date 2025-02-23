import axios from "axios";

type props = {
  url: string;
  arg: {
    username: string;
    email: string;
    password: string;
  };
};

export async function registerUser(url: string, { arg }: Pick<props, "arg">) {
  const res = await axios.post(url, arg, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}
