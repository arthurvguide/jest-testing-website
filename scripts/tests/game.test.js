   
/**
 * @jest-environment jsdom
 */
const { game, newGame, showScore, addTurn} = require("..//game");
beforeAll( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
});

describe("new game works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1, 2, 3, 4];
        game.playerMoves = [1, 2, 3, 4, 5];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should add one move to the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should clear playerMoves", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("should display 0 to element with id score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});
