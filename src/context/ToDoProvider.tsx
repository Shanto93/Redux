import { createContext, useReducer, type ReactNode } from "react";

export const ToDoContext = createContext<
  { state: TInitial[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TChildren = {
  children: ReactNode;
};

type TInitial = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TInitial;
};

const initialState: TInitial[] = [];

const reducer = (currentState: TInitial[], action: TAction) => {
  switch (action.type) {
    case "addToDo":
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

const ToDoProvider = ({ children }: TChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
