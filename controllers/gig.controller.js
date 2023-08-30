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

export const deleteGig = async (req, res, next) => {};

export const getGig = async (req, res, next) => {};

export const getGigs = async (req, res, next) => {};
