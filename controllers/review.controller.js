import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createReview = async (req, res, next) => {
  try {
    if (req.isSeller) {
      return next(createError(403, "Seller can't create a review!"));
    }
    const newReview = new Review({
      userId: req.userId,
      gigId: req.body.gigId,
      desc: req.body.desc,
      star: req.body.star,
    });

    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (review) {
      return next(createError(403, "You already created the review"));
    }
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: {
        totalStars: req.body.star,
        starNumber: 1,
      },
    });
    res.status(201).send(savedReview);
    console.log("here");
  } catch (err) {
    next(err);
  }
};

export const getReviews = (req, res, next) => {
  try {
    const reviews = Review.find({ gigId: req.body.gigId });
    res.status(201).send(reviews);
  } catch (err) {}
};

export const deleteReview = (req, res, next) => {
  try {
    
  } catch (err) {}
};
