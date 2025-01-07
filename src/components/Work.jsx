/**
 * @copyright 2025 nghitran
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project/bnhv banner.jpg',
    title: 'Gameshow Bước nhảy hoàn vũ 2024',
    tags: ['Video Editor'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project/paradise_island.jpg',
    title: 'Gameshow Đảo thiên đường Season 1',
    tags: ['Video Editor', 'Compositor'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project/Saotalk-intro.png',
    title: 'Series Saotalk',
    tags: ['Video Editor',],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project/thieunientoasang.webp',
    title: 'Gamshow Thiếu niên tỏa sáng',
    tags: ['Video Editor'],
    projectLink: '#'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Portfolio của tôi
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work