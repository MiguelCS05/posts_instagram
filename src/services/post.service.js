import { postRepository } from "../repositories/post.repository.js";

class PostService {
    async getall() {
        return await postRepository.getall();
    }

    async getById(id) {
        return await postRepository.getById(id);
    }

    async create(url_imagem, descricao, curtidas) {
        return await postRepository.create(
            url_imagem,
            descricao,
            curtidas
        );
    }

    async update(id, url_imagem, descricao, curtidas) {
        return await postRepository.update(
            id,
            url_imagem,
            descricao,
            curtidas
        );
    }

    async delete(id) {
        return await postRepository.delete(id);
    }
}

export const postServices = new PostService();