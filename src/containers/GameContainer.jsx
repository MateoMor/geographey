import Country from "../components/Country";

function GameContainer() {
    return (
        <div
            id="gameContainer"
            className="bg-[#8a87879b] absolute w-[70%] h-[20%] pointer-events-none right-[50%] translate-x-[50%] px-6 py-2 "
        >
            <Country/>
        </div>
    );
}

export default GameContainer;
