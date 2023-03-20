import { InfiniteGridHelper } from "../InfiniteGridHelper";
import { Color, Mesh } from "three";

describe("InfiniteGridHelper", () => {
    it("should return Mesh object", () => {
        const grid = new InfiniteGridHelper(100, 1000, new Color("#9F9F9F"), 40000);
        expect(grid).toBeInstanceOf(Mesh);
    });
});