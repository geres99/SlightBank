import { createGlobalState } from "react-hooks-global-state";

let initialState = { popUp: [] };
let { useGlobalState } = createGlobalState(initialState);

export let useGlobalPopUp = useGlobalState;
