import { createGlobalState } from "react-hooks-global-state";

let initialState = {
  array: [
    ["Marcin", "marcin99"],
    ["x", "x"],
  ],
};
let { useGlobalState } = createGlobalState(initialState);

export let useGlobalAccount = useGlobalState;
