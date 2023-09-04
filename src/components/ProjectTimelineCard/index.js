// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    categoryId,
    title,
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = projectDetails
  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="image-size" />
      <div className="title-duration-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
