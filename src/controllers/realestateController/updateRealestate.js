import { PrismaClient } from "@prisma/client";

const updateRealestate = async (req, res) => {
  const { id, name, images } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Missing required fields!",
      error: true,
    });
  }

  if (!name && (!images || images?.length == 0)) {
    return res.status(400).json({
      message: "Missing required fields!",
      error: true,
    });
  }

  const query = {};
  if (name) query.name = name;
  if (images) query.images = images;
  const prisma = new PrismaClient();

  const realestate = await prisma.realEstate.update({
    where: { id },
    data: query,
  });

  return res.status(200).json(realestate);
};

export default updateRealestate;
