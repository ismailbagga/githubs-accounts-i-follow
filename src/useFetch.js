import { useState, useEffect, useCallback } from "react";
const followingUrl = "https://api.github.com/users/ismailbagga/following";
// const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const paginate = (data) => {
  let numberOfAcoountInPage = 10;
  let pages = [];
  let temparr = [];
  let c = 0;
  data.forEach((item, index) => {
    temparr.push(item);
    if (
      index - c * numberOfAcoountInPage >= numberOfAcoountInPage - 1 ||
      index === data.length - 1
    ) {
      pages.push(temparr);
      temparr = [];
      c++;
    }
  });

  return pages;
};
const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const res = await fetch(followingUrl);
    const info = await res.json();

    setData(paginate(info.reverse()));
    setLoading(false);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return { loading, data };
};

export default useFetch;
