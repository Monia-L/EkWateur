import React from "react";
import myPic from "../../asset/img/pic_Monia-LAOUFI.png";

const DetailsUser = () => {
  return (
    <>
      <div className="details__user__container">
        <div className="head_role">Compte client </div>
        <div className="details__user__progress">
          <div className="details__user__progress__img ">
            <img
              className="avatar"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1604307078258/S0WT07qlwq.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress"
              alt="client's pic"
            />
          </div>
        </div>
        <div className="details__user__infos">
          <h1 className="details__user__infos__title">
            <b>Monia LAOUFI</b>
          </h1>
          <h2 className="text--tiny">N° client : EKW000010016</h2>
        </div>
      </div>
    </>
  );
};

export default DetailsUser;
