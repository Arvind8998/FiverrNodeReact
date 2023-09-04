import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "Only Seller are allowed to create Gigs"));
  }

  const newGig = new Gig({ userId: req.userId, ...req.body });
  try {
    const savedGig = await newGig.save();
    return res.status(201).send(savedGig);
  } catch (e) {
    console.log(e);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId != req.userId) {
      return res.status(403).send("You can only delete your gig");
    }

    await Gig.deleteOne({ id: req.params.id });
    res.status(200).send("Gig has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createError(404, "Gig not found"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const query = req.query;

  try {
    const filters = {};

    if (query.userId) {
      filters.userId = query.userId;
    }

    if (query.cat) {
      filters.cat = { $regex: query.cat, $options: "i" };
    }

    if (query.min || query.max) {
      filters.price = {};

      if (query.min) {
        filters.price.$lt = query.min;
      }

      if (query.max) {
        filters.price.$gt = query.max;
      }
    }

    if (query.search) {
      filters.title = { $regex: query.search, $options: "i" };
    }

    const gigs = await Gig.find(filters);
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};
