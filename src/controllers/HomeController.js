class HomeController {
  async index(req, res) {
    return res.json({ success: "ok" });
  }
}

export default new HomeController();
