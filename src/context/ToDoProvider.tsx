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

type TAction =
  | { type: "addToDo"; payload: TInitial }
  | { type: "addCompleted"; payload: number };

const typeConstants = {
  ADD_TODO: "addToDo",
  ADD_COMPLETED: "addCompleted",
};

const initialState: TInitial[] = [];

const reducer = (currentState: TInitial[], action: TAction): TInitial[] => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstants.ADD_COMPLETED:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
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
