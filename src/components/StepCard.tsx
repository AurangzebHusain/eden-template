import React, { useState } from "react";
import { CardData } from "../interface/General";
import "./stepCard.styles.css";
import { TiTick } from "react-icons/ti";
const StepCard = ({ data }: { data: CardData }) => {
  const [activeCard, setactiveCard] = useState(null);
  console.log({ ...data });
  return (
    <div className="stepCardContainer">
      {data.title.toLocaleLowerCase().includes("congratulations") && (
        <div className="congrats-icon">
          <TiTick size={25}></TiTick>
        </div>
      )}
      <div className="stepCard-heading">
        <div className="heading-primary">{data.title}</div>
        <div className="heading-secondary">{data.subTitle}</div>
      </div>

      {data.inputFields != null &&
        data.inputFields.map((el, index) => {
          return (
            <div key={index} className="input-field">
              <div className="label">
                <label htmlFor={el.label}>
                  {el.label}
                  <span className="optional">{el.optionalText}</span>
                </label>
              </div>
              <div>
                {el.label.toLowerCase().includes("url") ? (
                  <div className="url-input">
                    <input placeholder={el.domain} disabled={el.disabled} />
                    <input
                      type={el.type}
                      name={el.label}
                      id=""
                      onChange={el.onChange}
                      placeholder={el.placeholder}
                    />
                  </div>
                ) : (
                  <input
                    type={el.type}
                    name={el.label}
                    id=""
                    onChange={el.onChange}
                    placeholder={el.placeholder}
                  />
                )}
              </div>
            </div>
          );
        })}
      <div className="plan-cards">
        {data.cards != null &&
          data.cards.map((card, index) => {
            return (
              <div
                key={index}
                className={
                  activeCard === index
                    ? "active-card plan-card"
                    : "inactive-card plan-card"
                }
                onClick={() => {
                  setactiveCard(index);
                }}
              >
                <div className="plan-card-icon">
                  <card.icon
                    style={{
                      color: activeCard === index ? "#664de5" : "black",
                    }}
                    size={25}
                  ></card.icon>
                </div>
                <div className="plan-card-title">{card.title}</div>
                <div className="plan-card-body">{card.body}</div>
              </div>
            );
          })}
      </div>

      {data.buttons != null &&
        data.buttons.map((el, index) => {
          return (
            <div key={index} className="custom-button">
              <button onClick={el.onClick}>{el.title}</button>
            </div>
          );
        })}
    </div>
  );
};

export default StepCard;
