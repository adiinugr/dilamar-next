import dbConnect from "../../../utils/dbConnect"
import Comment from "../../../models/siti-sigit/Comment"

export default async (req, res) => {
  const { method } = req

  await dbConnect()

  switch (method) {
    case "GET":
      try {
        const comments = await Comment.find()

        res.status(200).json({ success: true, data: comments })
      } catch (error) {
        res.status(400).json({ message: error, success: false })
      }
      break
    case "POST":
      try {
        const comment = await Comment.create(req.body)

        res.status(201).json({
          status: 201,
          message: "Berhasil menambahkan Comment!",
          success: true,
          data: comment
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
        message: "Gagal menambahkan Comment!",
        success: false
      })
      break
  }
}
