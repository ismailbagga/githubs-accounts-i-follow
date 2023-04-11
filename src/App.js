import React from "react";
import { useState } from "react";
import Account from "./Account";
import useFetch from "./useFetch";
const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const prevPage = () => {
    setPage((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };
  const nextPage = () => {
    setPage((prev) => {
      if (prev === data.length - 1) return prev;
      return prev + 1;
    });
  };
  if (loading) return <div className="loading"></div>;
  return (
    <section className="container">
      <h1 className="text-header">GitHub I Follow</h1>

      <div className="Account-container">
        {data[page].map((account) => {
          return <Account key={account.id} {...account} />;
        })}
      </div>
      <div className="pages-num">
        <button className="text-btn" onClick={prevPage}>
          Prev
        </button>
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={`num-btn ${index === page ? "active" : null}`}
              onClick={() => {
                setPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="text-btn" onClick={nextPage}>
          Next
        </button>
      </div>
    </section>
  );
};

export default App;
