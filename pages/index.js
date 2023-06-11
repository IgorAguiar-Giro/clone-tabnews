import React from "react";
import YouTube from "react-youtube";

const Home = () => {
  const videoId = "p3sotuSCoAc";
  return (
    <div>
      <h1>Message to jojo</h1>
      <p>
        I just want to tell you that I love you A LOT, you are everything to me!
        Im using the exclamation point to show more emotion hehe I love you
      </p>
      <iframe
        src="https://giphy.com/embed/KztT2c4u8mYYUiMKdJ"
        width="480"
        height="373"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/cute-cats-kawaii-KztT2c4u8mYYUiMKdJ"></a>
      </p>
      <p>
        <YouTube videoId={"p3sotuSCoAc"} />
      </p>
    </div>
  );
};

export default Home;
