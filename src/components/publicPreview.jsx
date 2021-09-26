import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/preview.css";
import "./css/ppreview.css";

let PublicPreview = () => {
  let { rid } = useParams();

  let [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, []);

  return (
    <>
      {previewData && previewData.details.isPublic ? (
        <>
          <div className="p-preview-container">
            <div className="preview-container">
              <p id="name" className={`template-${previewData.code}`}>
                {previewData.details.fname} {previewData.details.lname}
              </p>

              <p id="email" className={`template-${previewData.code}`}>
                {previewData.details.email}
              </p>
              <p id="phone" className={`template-${previewData.code}`}>
                {previewData.details.phone}
              </p>
              <p id="city-state" className={`template-${previewData.code}`}>
                {previewData.details.city},  {previewData.details.state}
              </p>
   
              <p id="psum-h" className={`template-${previewData.code}`}>PROFESSIONAL SUMMARY</p>

              <p id="psum" className={`template-${previewData.code}`}>
                {previewData.details.psum}
              </p>

              <p id="psum-h" className={`template-${previewData.code}`}>EMPLOYMENT HISTORY</p>

              <p id="oname1" className={`template-${previewData.code}`}>
                {previewData.details.pos1}, {previewData.details.oname1}
              </p>

              <p id="place1" className={`template-${previewData.code}`}>
                {previewData.details.place1}
              </p>

              <p id="crole1" className={`template-${previewData.code}`}>
                {previewData.details.crole1}
              </p>

              <p id="oname2" className={`template-${previewData.code}`}>
                {previewData.details.pos2}, {previewData.details.oname2}
              </p>

              <p id="place2" className={`template-${previewData.code}`}>
                {previewData.details.place2}
              </p>

              <p id="crole2" className={`template-${previewData.code}`}>
                {previewData.details.crole2}
              </p>

              <p id="psum-h" className={`template-${previewData.code}`}>EDUCATION </p>

              <p id="ssc">
                <b>Secondary Education</b>
              </p>
              <p id="schoolX" className={`template-${previewData.code}`}>
                {previewData.details.schoolX}
              </p>
              <p id="placeX" className={`template-${previewData.code}`}>
                {previewData.details.placeX}
              </p>
              <p id="cgpaX" className={`template-${previewData.code}`}>
                CGPA : {previewData.details.cgpaX}
              </p>
              <p id="passX" className={`template-${previewData.code}`}>
                passed at {previewData.details.passX}
              </p>

              <p id="hsc">
                <b>Higher Secondary Education</b>
              </p>
              <p id="schoolXII" className={`template-${previewData.code}`}>
                {previewData.details.schoolXII}
              </p>
              <p id="placeXII" className={`template-${previewData.code}`}>
                {previewData.details.placeXII}
              </p>
              <p id="cgpaXII" className={`template-${previewData.code}`}>
                CGPA : {previewData.details.cgpaXII}
              </p>
              <p id="passXII" className={`template-${previewData.code}`}>
                passed at {previewData.details.passXII}
              </p>
              <p id="honr" className={`template-${previewData.code}`}>HONORS</p>
              <p id="college" className={`template-${previewData.code}`}>
                {previewData.details.college}
              </p>
              <p id="cplace" className={`template-${previewData.code}`}>
                {previewData.details.cplace}
              </p>
              <p id="degree" className={`template-${previewData.code}`}>
                {previewData.details.degree}
              </p>
              <p id="course" className={`template-${previewData.code}`}>
                {previewData.details.course}
              </p>
              <p id="cgpa" className={`template-${previewData.code}`}>
                CGPA : {previewData.details.cgpa}
              </p>
              <p id="year" className={`template-${previewData.code}`}>
                Graduation Year : {previewData.details.year}
              </p>
            </div>
          </div>
          <button class = "pdfbtn">Generate PDF</button>
        </>
      ) : (
        "Not available or not public"
      )}
    </>
  );
};

export default PublicPreview;
