import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
  let {
    fname,
    lname,
    email,
    phone,
    city,
    state,
    psum,
    oname1,
    pos1,
    place1,
    crole1,
    oname2,
    pos2,
    place2,
    crole2,
    schoolX,
    placeX,
    cgpaX,
    passX,
    schoolXII,
    placeXII,
    cgpaXII,
    passXII,
    college,
    cplace,
    course,
    degree,
    year,
    cgpa,
  } = useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);
  return (
    <>
      <div className="preview-container">
        <p id="name" className={`template-${templateCode}`}>
          {fname} {lname}
        </p>

        <p id="email" className={`template-${templateCode}`}>
          {email}
        </p>
        <p id="phone" className={`template-${templateCode}`}>
          {phone}
        </p>
        <p id="city-state" className={`template-${templateCode}`}>
          {city}, {state}
        </p>
        
        <p id="psum-h" className={`template-${templateCode}`}>PROFESSIONAL SUMMARY</p>

        <p id="psum" className={`template-${templateCode}`}>
          {psum}
        </p>

        <p id="psum-h" className={`template-${templateCode}`}>EMPLOYMENT HISTORY</p>

        <p id="oname1" className={`template-${templateCode}`}>
          {pos1}, {oname1}
        </p>

        <p id="place1" className={`template-${templateCode}`}>
          {place1}
        </p>

        <p id="crole1" className={`template-${templateCode}`}>
          {crole1}
        </p>

        <p id="oname2" className={`template-${templateCode}`}>
          {pos2}, {oname2}
        </p>

        <p id="place2" className={`template-${templateCode}`}>
          {place2}
        </p>

        <p id="crole2" className={`template-${templateCode}`}>
          {crole2}
        </p>

        <p id="psum-h" className={`template-${templateCode}`}>EDUCATION </p>
        <p id="ssc">
          <b>Secondary Education</b>
        </p>
        <p id="schoolX" className={`template-${templateCode}`}>
          {schoolX}
        </p>
        <p id="placeX" className={`template-${templateCode}`}>
          {placeX}
        </p>
        <p id="cgpaX" className={`template-${templateCode}`}>
          CGPA : {cgpaX}
        </p>
        <p id="passX" className={`template-${templateCode}`}>
          passed at {passX}
        </p>

        <p id="hsc">
          <b>Higher Secondary Education</b>
        </p>
        <p id="schoolXII" className={`template-${templateCode}`}>
          {schoolXII}
        </p>
        <p id="placeXII" className={`template-${templateCode}`}>
          {placeXII}
        </p>
        <p id="cgpaXII" className={`template-${templateCode}`}>
          CGPA : {cgpaXII}
        </p>
        <p id="passXII" className={`template-${templateCode}`}>
          passed at {passXII}
        </p>
        <p id="honr" className={`template-${templateCode}`}>HONORS</p>
        <p id="college" className={`template-${templateCode}`}>
          {college}
        </p>
        <p id="cplace" className={`template-${templateCode}`}>
          {cplace}
        </p>
        <p id="degree" className={`template-${templateCode}`}>
        {degree}
        </p>
        <p id="course" className={`template-${templateCode}`}>
        {course}
        </p>
        <p id="cgpa" className={`template-${templateCode}`}>
          CGPA : {cgpa}
        </p>
        <p id="year" className={`template-${templateCode}`}>
          Graduation Year : {year}
        </p>
      </div>
    </>
  );
};

export default Preview;
