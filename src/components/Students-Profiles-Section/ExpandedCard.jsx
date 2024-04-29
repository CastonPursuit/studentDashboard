import React from "react";
import "./expandedcard.scss";

const ExpandedCard = ({
  assignments,
  projects,
  assessments,
  currentTotal,
  currentLastWeek,
  goalTotal,
  resume,
  linkedin,
  github,
  mockInterview,
}) => {
  return (
    <article className="expanded-card">
      <section className="expanded-card__section expanded-card__section--codewars">
        <h3 className="expanded-card__title">Codewars</h3>
        <p className="expanded-card__detail expanded-card__detail--current-total">
          Current total:{" "}
          <span className="expanded-card__data">{currentTotal}</span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--last-week">
          Last Week:{" "}
          <span className="expanded-card__data">{currentLastWeek}</span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--goal">
          Goal: <span className="expanded-card__data">{goalTotal}</span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--percent-achieved">
          Percent of Goal Achieved:{" "}
          <span className="expanded-card__data">{`${Math.round(
            (currentTotal / goalTotal) * 100
          )}%`}</span>
        </p>
      </section>
      <section className="expanded-card__section expanded-card__section--scores">
        <h3 className="expanded-card__title">Scores</h3>
        <p className="expanded-card__detail expanded-card__detail--assignments">
          Assignments:{" "}
          <span className="expanded-card__data">{assignments}</span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--projects">
          Projects: <span className="expanded-card__data">{projects}</span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--assessments">
          Assessments:{" "}
          <span className="expanded-card__data">{assessments}</span>
        </p>
      </section>
      <section className="expanded-card__section expanded-card__section--certifications">
        <h3 className="expanded-card__title">Certifications</h3>
        <p className="expanded-card__detail expanded-card__detail--resume">
          Resume:{" "}
          <span className="expanded-card__data">
            {resume ? (
              <span style={{ color: "green" }}>&#10003; </span>
            ) : (
              <span style={{ color: "red" }}>&#10007; </span>
            )}
          </span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--linkedin">
          Linkedin:{" "}
          <span className="expanded-card__data">
            {linkedin ? (
              <span style={{ color: "green" }}>&#10003; </span>
            ) : (
              <span style={{ color: "red" }}>&#10007; </span>
            )}
          </span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--mock-interview">
          Mock Interview:{" "}
          <span className="expanded-card__data">
            {mockInterview ? (
              <span style={{ color: "green" }}>&#10003; </span>
            ) : (
              <span style={{ color: "red" }}>&#10007; </span>
            )}
          </span>
        </p>
        <p className="expanded-card__detail expanded-card__detail--github">
          Github:{" "}
          <span className="expanded-card__data">
            {github ? (
              <span style={{ color: "green" }}>&#10003; </span>
            ) : (
              <span style={{ color: "red" }}>&#10007; </span>
            )}
          </span>
        </p>
      </section>

    </article>
  );
};

export default ExpandedCard;
