// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimeLineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const courseTimeLineList = timelineItemsList.filter(
      each => each.categoryId === 'COURSE',
    )
    const projectTimeLineList = timelineItemsList.filter(
      each => each.categoryId === 'PROJECT',
    )

    return (
      <div>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <Chrono mode="VERTICAL_ALTERNATING">
          {courseTimeLineList.map(each => (
            <CourseTimelineCard key={each.id} courseDetails={each} />
          ))}
          {projectTimeLineList.map(each => (
            <ProjectTimeLineCard key={each.id} projectDetails={each} />
          ))}
        </Chrono>
      </div>
    )
  }
}

export default TimeLineView
