import multerConfig from "../config/multerConfig";
import multer from "multer";
const upload = multer(multerConfig).single("photo");

class PhotoController {
  async index(req, res) {
    return res.json({ success: "ok" });
  }
  async store(req, res) {
    upload.single("file")(req, res, (err) => {
      if (err) res.json({ error: "Tipo de arquivo inválido" });
    });
    return res.json(req.file);
  }
}

export default new PhotoController();
