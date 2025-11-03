import { describe, it, expect, vi } from "vitest";
import { getPokemonByName } from "@/lib/get-pokemon";

describe("getPokemonByName", () => {
  it("returns undefined if name is empty", async () => {
    const result = await getPokemonByName("");
    expect(result).toBeUndefined();
  });

  it("fetches the correct pokemon", async () => {
    const mockData = { name: "pikachu", id: 25 };
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    }));

    const result = await getPokemonByName("pikachu");

    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/pikachu");
    expect(result).toEqual(mockData);
  });

  it("throws an error if fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    await expect(getPokemonByName("mewtwo")).rejects.toThrow("Unable to get Pokemon resource");
  });
});
