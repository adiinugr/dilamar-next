import dbConnect from "utils/dbConnect"
import Rsvp from "models/eka-zaqi/Rsvp"

export default async (req, res) => {
  const { method } = req

  await dbConnect()

  switch (method) {
    case "GET":
      try {
        const rsvps = await Rsvp.find()

        res.status(200).json({ success: true, data: rsvps })
      } catch (error) {
        res.status(400).json({ message: error, success: false })
      }
      break
    case "POST":
      try {
        const rsvp = await Rsvp.create(req.body)

        res.status(201).json({
          status: 201,
          message: "Berhasil menambahkan Rsvp!",
          success: true,
          data: rsvp
        })
      } catch (error) {
        res.status(400).json({
          status: 400,
          message: error.message,
          success: false
        })
      }
      break
    default:
      res.status(400).json({
        status: 400,
        message: "Gagal menambahkan Rsvp!",
        success: false
      })
      break
  }
}
