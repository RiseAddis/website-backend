import { prisma } from "../../../prisma/main.js";

const deleteArticles = async (req, res) => {
  const { articleIds } = req.body;

  if (!articleIds || articleIds?.length === 0) {
    return res.json({
      message: "Missing required fields",
      error: true,
    });
  }

  try {
    prisma.article
      .deleteMany({
        where: {
          id: {
            in: articleIds,
          },
        },
      })
      .then((data) => {
        return res.json({
          message: `Deleted article${data.length > 1 ? "s" : ""} successfully`,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          message: "Server error, please try again!",
          error: true,
        });
      });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Server error, please try again!",
      error: true,
    });
  }
};

export default deleteArticles;
