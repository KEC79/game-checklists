export const useGameStore = () => {
    const getGames = () => {
        return JSON.parse(localStorage.getItem("games"));
    };

    const setGames = (games) => {
        localStorage.setItem("games", JSON.stringify(games));
    };

    return { getGames, setGames };
};
