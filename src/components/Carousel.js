// import { transition } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Carousel = (props) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [OffTransition, setOffTransition] = useState(false);
  const testImgs = [
    { src: "https://img.freepik.com/premium-vector/modern-passionate-badminton-player-in-action-logo_293731-95.jpg" },
    { src: "https://png.pngtree.com/element_pic/17/03/03/b8ef40a996638082467a3e5a2e8c19de.jpg" },
    { src: "https://img.hani.co.kr/imgdb/resize/2017/0420/00500016_20170420.JPG" },
  ]

  const firstImg = testImgs[testImgs.length - 1];
  const lastImg = testImgs[0];
  const newImgs = [firstImg, ...testImgs, lastImg];



  // useEffect(() => {
  //   console.log("currentIdx");
  // }, [currentIdx]);

  if (currentIdx === newImgs.length - 1) {
    setOffTransition(true);
    setCurrentIdx(0);
  }
  console.log({ currentIdx });


  const transition = OffTransition ? "0s" : "500ms"

  return (
    <div style={{ display: "flex", justifyContent: "center", }}>
      {/* {props.data.map((competition, index) => {
        return <div key={index}>{competition.title}</div>;
      })} */}
      <button onClick={() => { setCurrentIdx(currentIdx - 1); }}>뒤로</button>
      {/* <img src={testImgs[currentIdx].src} width="200px" height="200px" ></img> */}
      <div style={{ display: "flex", width: "200px", height: "200px", overflow: "hidden", }}>
        <div style={{ display: "flex", objectFit: "contain", transform: `translateX(${-1 * (100 * currentIdx)}%)`, transition }}>
          {newImgs.map((testImg, index) => (<img alt="carousel" src={testImg.src} key={index} width="200px" height="200px"></img>))}
        </div>
      </div>
      <button onClick={() => { setCurrentIdx(currentIdx + 1); }}>앞으로</button>
    </div >
  );

};


export default Carousel;
