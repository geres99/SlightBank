import { createGlobalState } from "react-hooks-global-state";

let initialState = { array: [["marcin", "marcin99"]] };
let { useGlobalState } = createGlobalState(initialState);

export let useGlobalAccount = useGlobalState;
