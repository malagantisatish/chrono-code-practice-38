// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {
    categoryId,
    courseTitle,
    description,
    duration,
    tagsList,
    title,
  } = courseDetails
  console.log(tagsList)
  return (
    <div className="course-card-container">
      <div className="course-title-duration">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-container">
        {tagsList.map(each => (
          <li>
            <button type="button" className="tags">
              {each.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
