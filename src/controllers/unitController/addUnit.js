import { PrismaClient } from "@prisma/client";

const addUnit = async (req, res) => {
  const {
    bathroom,
    bedroom,
    balcony,
    netArea,
    commonArea,
    totalArea,
    payments,
    available,
    // images,
    siteId,
    images,
  } = req.body;

  console.log(req.body);

  if (
    !siteId ||
    !bathroom ||
    !bedroom ||
    !balcony ||
    !netArea ||
    !commonArea ||
    !totalArea ||
    !payments ||
    !available
  ) {
    return res.status(400).json({
      message: "Please provide all the required fields",
      error: false,
    });
  }

  const prisma = new PrismaClient();

  try {
    const unit = await prisma.unit.create({
      data: {
        // images,
        siteId,
        bathroom,
        bedroom,
        balcony,
        netArea,
        commonArea,
        totalArea,
        payments,
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
      message: error.message,
      error: true,
    });
  } finally {
    prisma.$disconnect();
  }
};

export default addUnit;
