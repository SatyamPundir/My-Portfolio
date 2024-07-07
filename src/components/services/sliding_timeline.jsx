import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import './SlidingTimeline.css';
import Card from './card';

import { Autoplay } from 'swiper/modules';
const thirdContent = (
  <div className='content_card_third'>
    <ul className='content_card_third_ul'>
      <li><h3>10th Percentage:- 91% (CBSE)</h3></li>
      <li className='item_list'><p>Kendriya Vidhyalaya AFS Amla</p></li>
      <li className='item_list'><p>Betul,Madhaya Pradesh</p></li>
      <li className="date">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cal-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>
        <p>07/2018-04/2019</p>
      </li>
    </ul>
  </div>
)

const secondContent = (
  <div className='content_card_third'>
    <ul className='content_card_third_ul'>
      <li><h3>12th Percentage:- 93% (CBSE)</h3></li>
      <li className='item_list'><p>PML SD Public School</p></li>
      <li className='item_list'><p>Sector 32C, Chandigarh, Punjab</p></li>
      <li className="date">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cal-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>
        <p>06/2020-05/2021</p>
      </li>
    </ul>
  </div>
)

const firstContent = (
  <div className='content_card_third'>
    <ul className='content_card_third_ul'>
      <li><h3>Btech- Information Technology (Current: 8.91/10.0)</h3></li>
      <li className='item_list'><p>Vellore Institute of Technology, Vellore</p></li>
      <li className='item_list'><p>Tamilnadu</p></li>
      <li className="date">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cal-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>
        <p>07/2021-Present</p>
      </li>
    </ul>
  </div>
)

const fourthContent = (
  <div className='content_card_third'>
    <ul className='content_card_third_ul'>
      <li><h3>AWS Certified Solutions Architect Associate</h3></li>
      <li className='item_list'><p>Amazon Web Services</p></li>
      <li className='item_list'><p>Score: 823</p></li>
      <li><a href="https://www.credly.com/badges/9f05244d-2839-4dd3-a558-95b8c7216e0d/public_url" target='_blank'>Verify Here!</a></li>
      <li className="date">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cal-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>
        <p>12/2023-12/2026</p>
      </li>
    </ul>
  </div>
)
const fifthContent = (
  <div className='content_card_third'>
    <ul className='content_card_third_ul'>
      <li><h3>Artificial Intelligence and Machine Learning </h3></li>
      <li className='item_list'><p>Smart Interns Externship Program</p></li>
      <li><a href="https://smartinternz.com/internships/google_developers/b41881c640370b91ef82212bb42e666b" target='_blank'>Verify Here!</a></li>
      <li className="date">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="cal-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>
        <p>12/2023-12/2026</p>
      </li>
    </ul>
  </div>
)


const timelineData = [
  { year: 'College', content: firstContent },
  {year: 'AWS Certificate' ,content:fourthContent },
  {year: 'AI/ML Certificate' ,content:fifthContent },
  { year: '12th', content: secondContent },
  { year: '10th', content: thirdContent },
];

const SlidingTimeline = () => {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const swiperRef = useRef(null);

  const handleYearClick = (year) => {
    setActiveYear(year);
    const index = timelineData.findIndex((item) => item.year === year);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div className="timeline-container">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setActiveYear(timelineData[swiper.activeIndex].year);
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true }} // autoplay configuration
        modules={[Autoplay]} // add Autoplay module
        className="timeline-swiper"
      >
        {timelineData.map((item) => (
          <SwiperSlide key={item.year}>
            <Card innerConent={item.content} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="timeline-years">
        {timelineData.map((item) => (
          <button
            key={item.year}
            className={`timeline-year ${activeYear === item.year ? 'active' : ''}`}
            onClick={() => handleYearClick(item.year)}
          >
            {item.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlidingTimeline;
