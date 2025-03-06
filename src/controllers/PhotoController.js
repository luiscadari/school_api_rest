class PhotoController {
  async index(req, res) {
    return res.json({ success: "ok" });
  }
  async store(req, res) {
    return res.json(req.file);
  }
}

export default new PhotoController();
