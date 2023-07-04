import { useGlobalState } from "../context/GlobalState";

function Country() {
    const { score } = useGlobalState();

    return <div>{score}</div>;
}

export default Country;
