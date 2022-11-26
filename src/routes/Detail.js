import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(JSON.stringify(json.data.movie));
    setLoading(false);
    // console.log(JSON.stringify(json));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return loading ? <h1>Loading...</h1> : <p>{detail}</p>;
}

export default Detail;
