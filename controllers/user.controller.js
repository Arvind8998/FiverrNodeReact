import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      next(createError("404", "No User found"));
    }
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(createError(403, "User not found"));
  }
  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User deleted");
};
