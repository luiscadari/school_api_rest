class PhotoController {
  async index(req, res) {
    return res.json({ success: "ok" });
  }
}

export default new PhotoController();
