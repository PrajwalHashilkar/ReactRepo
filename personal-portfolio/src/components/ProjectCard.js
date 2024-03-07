import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}


export const EducationCard = ({ institution, degree, year, score, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Educational Institution" />
        <div className="proj-txtx">
          <h4>{institution}</h4>
          <p>{degree}</p>
          <span>{year}</span> <br />
          {score && <span>Score: {score}</span>}
        </div>
      </div>
    </Col>
  )
}
export const ExperienceCard = ({ company, position, duration, location, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Company Logo" />
        <div className="proj-txtx">
          <h4>{company}</h4>
          <h5>{position}</h5>
          <span>{duration}</span> <br />
          <span>{location}</span> <br />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
