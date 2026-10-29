import { postServices } from "../services/post.services.js";

export async function listar(req, res) {
    const posts = await postServices.getall();
    res.json(posts);
}

export async function buscarPorId(req, res) {
    const post = await postServices.getById(req.params.id);

    if (!post) {
        return res.status(404).json({ mensagem: "Post não encontrado" });
    }

    res.json(post);
}

export async function criar(req, res) {
    const { url_imagem, descricao, curtidas } = req.body;

    if (!url_imagem) {
        return res.status(400).json({
            mensagem: "A URL da imagem é obrigatória"
        });
    }

    const post = await postServices.create(
        url_imagem,
        descricao,
        curtidas ?? 0
    );

    res.status(201).json(post);
}

export async function atualizar(req, res) {
    const { url_imagem, descricao, curtidas } = req.body;

    if (!url_imagem || descricao === undefined || curtidas === undefined) {
        return res.status(400).json({
            mensagem: "Informe url_imagem, descricao e curtidas"
        });
    }

    const post = await postServices.update(
        req.params.id,
        url_imagem,
        descricao,
        curtidas
    );

    if (!post) {
        return res.status(404).json({ mensagem: "Post não encontrado" });
    }

    res.json(post);
}

export async function excluir(req, res) {
    const resultado = await postServices.delete(req.params.id);

    if (!resultado) {
        return res.status(404).json({ mensagem: "Post não encontrado" });
    }

    res.json({ mensagem: "Post excluído com sucesso" });
}