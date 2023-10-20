import { useState } from "react";

const Carousel = (props) => {
  const [currentIdx, setCurrentIdx] = useState(1);

  const testImgs = [
    { src: "https://img.freepik.com/premium-vector/modern-passionate-badminton-player-in-action-logo_293731-95.jpg" },
    { src: "https://png.pngtree.com/element_pic/17/03/03/b8ef40a996638082467a3e5a2e8c19de.jpg" },
    { src: "https://img.hani.co.kr/imgdb/resize/2017/0420/00500016_20170420.JPG" },
    { src: "https://png.pngtree.com/element_pic/17/03/03/b8ef40a996638082467a3e5a2e8c19de.jpg" },
  ]

  return (
    <div style={{ display: "flex", justifyContent: "center", }}>
      {/* {props.data.map((competition, index) => {
        return <div key={index}>{competition.title}</div>;
      })} */}
      <button onClick={() => { setCurrentIdx(currentIdx - 1); }}>뒤로</button>
      {/* <img src={testImgs[currentIdx].src} width="200px" height="200px" ></img> */}
      <div style={{ display: "flex", width: "200px", height: "200px", overflow: "hidden", }}>
        <div style={{ display: "flex", objectFit: "contain", transform: `translateX(${-1 * (100 * currentIdx)}%)`, transition: "all 500ms ease-in-out" }}>
          {testImgs.map((testImg, index) => (<img src={testImg.src} key={index} width="200px" height="200px"></img>))}
        </div>
      </div>
      <button onClick={() => { setCurrentIdx(currentIdx + 1); }}>앞으로</button>
    </div >
  );

};


export default Carousel;
