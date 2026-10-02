import { favorites } from "@/lib/db";
import { addFavorite, removeFavorite } from "@/lib/services/favoriteService";

beforeEach(() => {
  favorites.length = 0;
});

describe("favoriteService", () => {
  test("addFavorite berhasil menyimpan data valid", () => {
    const result = addFavorite({ id: 1, name: "Ayu" });

    expect(result.success).toBe(true);
    expect(result.status).toBe(201);
    expect(favorites).toHaveLength(1);
  });

  test("addFavorite gagal kalau id atau name kosong", () => {
    const result = addFavorite({ id: 1 });

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(favorites).toHaveLength(0);
  });

  test("addFavorite gagal kalau data sudah difavoritkan", () => {
    addFavorite({ id: 1, name: "Ayu" });
    const result = addFavorite({ id: 1, name: "Ayu" });

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(favorites).toHaveLength(1);
  });

  test("removeFavorite berhasil menghapus data yang ada", () => {
    addFavorite({ id: 1, name: "Ayu" });
    const result = removeFavorite("1");

    expect(result.success).toBe(true);
    expect(result.status).toBe(200);
    expect(favorites).toHaveLength(0);
  });

  test("removeFavorite gagal kalau data tidak ditemukan", () => {
    const result = removeFavorite("99");

    expect(result.success).toBe(false);
    expect(result.status).toBe(404);
  });
});
