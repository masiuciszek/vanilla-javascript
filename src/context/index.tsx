import { createContext, FC, Reducer, useContext, useReducer } from "react";

const PER_PAGE = 10;

type CurrentState = "idle" | "pending" | "resolved" | "rejected";
interface State {
  currentState: CurrentState;
  hasMore: boolean;
  data: any[];
  after: number;
}
type Action = { type: "START" } | { type: "LOADED"; payload: any };
type Dispatch = (action: Action) => void;

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case "START":
      return { ...state, currentState: "pending" };
    case "LOADED":
      return {
        ...state,
        currentState: "resolved",
        date: [...state.data, ...action.payload],
        hasMore: state.data.length === PER_PAGE,
      };

    default:
      throw new Error("unreadable action type ");
  }
};

const Context = createContext<State | undefined>(undefined);
const Dispatch = createContext<Dispatch | undefined>(undefined);

const ScrollProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentState: "idle",
    hasMore: true,
    data: [],
    after: 0,
  });

  return (
    <Context.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Context.Provider>
  );
};

export const useScrollState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("ScrollStateContext must be wrapped under the ScrollProvider ");
  }
  return context;
};
export const useScrollDispatch = () => {
  const context = useContext(Dispatch);
  if (!context) {
    throw new Error("ScrollDispatchContext must be wrapped under the ScrollProvider ");
  }
  return context;
};

export default ScrollProvider;
