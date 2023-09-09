import "./newsCard.css";

export const NewsCard = ({ articles }) => {
  console.log(articles);
  return (
    <div className="cardcontainer p-5 flex ">
      {articles.map((newsObj, index) => {
        return (
          <div key={index} className="newscard m-2 ">
            <img src={newsObj.image_url} width="100%" alt="newsphoto"></img>
            <h1 className="title text-center "> {newsObj.title} </h1>

            <a href={newsObj.link} target="blank text-center">
              {" "}
              <button
                type="button"
                className="border-red-400 hover:text-yellow-400"
              >
                Readmore
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};
