import { model, Schema } from "mongoose";

const mentorSchema = new Schema(
  {
    mentorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    menteeId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    startDate: { type: Date },
    endDate: { type: Date },
    goal: { type: String },
    notes: { type: String },
    progress: { type: String },
    milestones: [
      {
        title: { type: String, required: true },
        completed: { type: Boolean, default: false },
        completionDate: { type: Date },
      },
    ],
    sessions: [
      {
        date: { type: Date, default: Date.now },
        duration: { type: Number }, // in minutes
        notes: { type: String },
      },
    ],
    mentorFeedback: { type: String },
    menteeFeedback: { type: String },
    ratings: {
      mentorRating: { type: Number, min: 1, max: 5 },
      menteeRating: { type: Number, min: 1, max: 5 },
    },
    statusHistory: [
      {
        status: { type: String, enum: ["pending", "accepted", "rejected"] },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Mentor = model("Mentor", mentorSchema);
export default Mentor;
