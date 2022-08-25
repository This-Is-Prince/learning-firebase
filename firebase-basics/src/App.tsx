import { ChangeEvent, useState } from "react";
import { app } from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const App = () => {
  const auth = getAuth(app);
  const [data, setData] = useState<{ [key: string]: string }>({});
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };
  const signUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <article>
        <input
          onChange={(e) => handleInput(e)}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => handleInput(e)}
          name="password"
          type="password"
          placeholder="Password"
        />
      </article>
      <article>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
      </article>
    </section>
  );
};

export default App;
