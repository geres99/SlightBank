import { createGlobalState } from "react-hooks-global-state";

let initialState = { account: [] };
let { useGlobalState } = createGlobalState(initialState);

export let useGlobalAccountLogged = useGlobalState;
