import {model , Schema} from 'mongoose'

const courseSchema = new Schema ({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
    },
    modules : [{
        type: Schema.Types.ObjectId,
        ref: 'Module'
    }]
}, {timestamps : true})

const Course = model("Course" , courseSchema);

export default Course;