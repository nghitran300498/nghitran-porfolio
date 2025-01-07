/**
 * @copyright 2025 nghitran
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Tuyệt vời quá anh ơi!',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Tuyệt vời quá anh ơi!',
    name: 'Văn Dũng',
    imgSrc: '/images/people-8.jpg',
    company: '3D Technical Artist'
  },
  {
    content: 'Đỉnh nóc kịch trần luôn a ơi',
    name: 'Hạo Li',
    imgSrc: '/images/people-9.jpg',
    company: '2D Artist'
  },
  {
    content: 'Video hay quá, đẳng cấp',
    name: 'Trần Quân',
    imgSrc: '/images/people-10.jpg',
    company: 'Video Editor, 2D Motion Graphic'
  },
  {
    content: 'Tôi xem chương trình này khoái nhất cách mấy ông dựng phim chuyển nhạc. Xem cuốn cực!',
    name: 'Kiên Trần',
    imgSrc: '/images/people-5.jpg',
    company: 'Đảo Thiên Đường Viewer'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/images/people-6.jpg',
    company: 'Skyline Digital'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
        Khách hàng nói gì về tôi
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review