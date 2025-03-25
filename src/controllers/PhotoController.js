import multerConfig from "../config/multerConfig";
import multer from "multer";
import Photo from "../models/Photo";
const upload = multer(multerConfig).single("photo");

class PhotoController {
  async index(req, res) {
    return res.json({ success: "ok" });
  }
  async store(req, res) {
    return upload.single("file")(req, res, async (err) => {
      if (err)
        return res.status(400).json({ error: "Tipo de arquivo inválido" });
      try {
        const { originalname, filename } = req.file;
        const { id } = req.body;
        if (!id || !originalname || !filename)
          return res.status(400).json({ error: "Params are required" });
        const photo = await Photo.create({ originalname, filename, id });
        return res.status(200).json(photo);
      } catch (e) {
        console.error(e);
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
    });
  }
}

export default new PhotoController();
