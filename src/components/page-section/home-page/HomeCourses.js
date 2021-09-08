import React from "react";
import styled from "styled-components";
import Card from "../../common/cards/Card";

function HomeCourses() {
  return (
    <Courses>
      <h2 id="courses" className="courses">
        Courses
      </h2>
      <CourseCards>
        <div className="container">
          <Card
            title="HTML"
            text="Learn to structure your content with the help of HTML and get started on your development journey!"
            path="courses/html/htmlIntroduction"
          />
          <Card
            title="CSS"
            text="Without styling eyerything looks dull, right? So, let's master the language which styles the web."
            path="courses/css/CSSIntro"
          />
          <Card
            title="JavaScript"
            text="Learn to build interactive websites with javascript, after all what's there without interactivity."
            path="courses/javascript"
          />
        </div>
      </CourseCards>
    </Courses>
  );
}

const Courses = styled.div`
  .courses {
    text-align: center;
    font-size: clamp(1.8rem, 2.5vw, 3.4rem);
    margin-bottom: 0;
  }
`;

const CourseCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: black;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px 0;
  }
`;

export default HomeCourses;
