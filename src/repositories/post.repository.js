import { db } from "../database/db.js";

class PostRepository {
    async getall() {
        return await db("posts").select("*");
    }

    async getById(id) {
        return await db("posts").where({ id }).first();
    }

    async create(url_imagem, descricao, curtidas) {
        const res = await db("posts")
            .insert({ url_imagem, descricao, curtidas })
            .returning("*");

        return res[0];
    }

    async update(id, url_imagem, descricao, curtidas) {
        const res = await db("posts")
            .where({ id })
            .update({ url_imagem, descricao, curtidas })
            .returning("*");

        return res[0];
    }

    async delete(id) {
        return await db("posts").where({ id }).del();
    }
}

export const postRepository = new PostRepository();