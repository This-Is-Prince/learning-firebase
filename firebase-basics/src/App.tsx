import { ChangeEvent, useState } from "react";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const App = () => {
  const auth = getAuth(app);
  const [data, setData] = useState<{ [key: string]: string }>({});
  const collectionRef = collection(database, "users");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = async () => {
    try {
      const res = await addDoc(collectionRef, {
        email: data.email,
        password: data.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const res = await getDocs(collectionRef);
      res.forEach((doc) => {
        console.log(doc);
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.log("Error: ", error);
    }
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
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={getData}>Get</button>
      </article>
    </section>
  );
};

export default App;
