import React from "react";

const DetailsUser = () => {
  return (
    <>
      <div className="details__user__container">
        <div className="head_role">Compte client </div>
        <div className="details__user__progress">
          <div className="details__user__progress__img ">
            <img
              className="avatar"
              src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
              alt="client's pic"
            />
          </div>
        </div>
        <div className="details__user__infos">
          <h1 className="details__user__infos__title">
            <b>Marlene S.</b>
          </h1>
          <h2 className="text--tiny">N° client : EKW000010016</h2>
          <a href="/logout" className="button--link">
            Déconnexion
          </a>
        </div>
      </div>
      <a href="/details" className="button--more-details">
        Go !
      </a>
    </>
  );
};

export default DetailsUser;
