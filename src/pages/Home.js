import React from "react";
import Tabbs from "../components/Tabbs";
import Title from "../components/Title";
import DefaultLayout from "../layouts/DefaultLayout";
import Carousel from "../components/Carousel";
import Project from "../components/Project";
const Home = () => {
  return (
    <DefaultLayout>
      <Project></Project>

      <div>
        <img alt="wintonlogo" src="img/winton.png"></img>
      </div>
      <Title title="지역별 대회"></Title>
      <Tabbs city={city}></Tabbs>
      {/* <Carousel data={competition}></Carousel> */}
    </DefaultLayout>
  );
};

const city = [
  {
    name: "서울",
    image: "",
  },
  {
    name: "해외",
    image: "",
  },
  {
    name: "부산",
    image: "",
  },
  {
    name: "대구",
    image: "",
  },
  {
    name: "인천",
    image: "",
  },
  {
    name: "광주",
    image: "",
  },
  {
    name: "대전",
    image: "",
  },
  {
    name: "울산",
    image: "",
  },
  {
    name: "세종",
    image: "",
  },
  {
    name: "경기",
    image: "",
  },
  {
    name: "강원",
    image: "",
  },
  {
    name: "충북",
    image: "",
  },
];

const competition = [
  {
    city: "부산",
    title: "동서대총장배 사상구 배드민턴협장기",
    period: "2023.10.15 ~ 2023. 10. 15",
    place: "강서주경기장",
    img: "Z:winotonwintonpublic\favicon.ico",
  },
  {
    city: "부산",
    title: "동서대총장배 사상구 배드민턴협장기",
    period: "2023.10.15 ~ 2023. 10. 15",
    place: "강서주경기장",
    img: "Z:winotonwintonpublic\favicon.ico",
  },
  {
    city: "부산",
    title: "동서대총장배 사상구 배드민턴협장기",
    period: "2023.10.15 ~ 2023. 10. 15",
    place: "강서주경기장",
    img: "Z:winotonwintonpublic\favicon.ico",
  },
];
export default Home;
