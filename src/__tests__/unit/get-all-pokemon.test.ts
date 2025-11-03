import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAllPokemon } from "@/lib/get-pokemon";

describe("getAllPokemon", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches the correct page and returns data", async () => {
    const mockData = {
      count: 1281,
      next: null,
      previous: null,
      results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
    };

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    }));

    const result = await getAllPokemon(2, 50);

    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=50&offset=50");
    expect(result).toEqual({
      count: 1281,
      page: 2,
      pageSize: 50,
      totalPages: Math.ceil(1281 / 50),
      next: null,
      previous: null,
      results: mockData.results,
    });
  });

  it("uses default page and pageSize", async () => {
    const mockData = { count: 100, next: "x", previous: null, results: [] };

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    }));

    await getAllPokemon();

    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  });

  it("throws if response is not ok", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    await expect(getAllPokemon()).rejects.toThrow("Unable to get Pokemon resource");
  });
});
