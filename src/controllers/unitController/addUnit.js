import { prisma } from "../../../prisma/main.js";

const addUnit = async (req, res) => {
  const {
    name,
    bathroom,
    bedroom,
    balcony,
    netArea,
    commonArea,
    totalArea,
    payments,
    available,
    siteId,
    images,
    price,
    total,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
      error: true,
    });
  }

  if (!siteId) {
    return res.status(400).json({
      message: "Please provide required fields",
      error: true,
    });
  }

  try {
    const unit = await prisma.unit.create({
      data: {
        name,
        siteId,
        bathroom,
        bedroom,
        balcony,
        netArea,
        commonArea,
        totalArea,
        payments,
        price,
        total,
        images,
        available,
      },
    });

    return res.status(200).json({
      message: "Unit created successfully",
      unit,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error, please try again!",
      error: true,
    });
  } finally {
    prisma.$disconnect();
  }
};

export default addUnit;
