import dbConnect from "../../../utils/dbConnect";
import Angpau from "../../../models/ririk-roy/Angpau";

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const angpaus = await Angpau.find();

        res.status(200).json({ success: true, data: angpaus });
      } catch (error) {
        res.status(400).json({ message: error, success: false });
      }
      break;
    case "POST":
      try {
        const angpau = await Angpau.create(req.body);

        res.status(201).json({
          status: 201,
          message: "Berhasil mengirim Angpau!",
          success: true,
          data: angpau,
        });
      } catch (error) {
        res.status(400).json({
          status: 400,
          message: error.message,
          success: false,
        });
      }
      break;
    default:
      res.status(400).json({
        status: 400,
        message: "Gagal mengirim Angpau!",
        success: false,
      });
      break;
  }
};
