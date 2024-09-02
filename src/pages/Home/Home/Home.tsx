import { useReducer, type ChangeEvent } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

type TAction = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName": {
      return { ...currentState, name: action.payload };
    }
    case "addAge": {
      return { ...currentState, age: action.payload };
    }
    case "addHobbies": {
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    }
    default:
      return currentState;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="px-3 py-2 border-2 border-black rounded-xl"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          className="px-3 py-2 border-2 border-black rounded-xl"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
      </div>
      <div>
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          className="px-3 py-2 border-2 border-black rounded-xl"
          type="hobbies"
          name="hobbies"
          id="hobbies"
          placeholder="hobby"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
