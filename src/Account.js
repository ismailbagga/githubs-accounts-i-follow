import React from "react";

const Account = ({ login, avatar_url, html_url }) => {
  return (
    <div className="Account">
      <img src={avatar_url} alt="account" />
      <h3>{login}</h3>
      <a href={html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default Account;
