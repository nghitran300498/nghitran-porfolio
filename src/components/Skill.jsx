/**
 * @copyright 2025 nghitran
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/skill/Pr.svg',
    label: 'Adobe Premiere',
    desc: 'Dựng phim'
  },
  {
    imgSrc: '/images/skill/Ae.svg',
    label: 'After Effect',
    desc: '2D Motion Graphic & VFX'
  },
  {
    imgSrc: '/images/skill/DaVinci_Resolve_Studio.png',
    label: 'Davinci Resolve',
    desc: 'Color Granding'
  },
  {
    imgSrc: '/images/skill/Logo_Blender.svg',
    label: 'Blender',
    desc: '3D Motion Graphic & VFX'
  },
  {
    imgSrc: '/images/skill/Pt.svg',
    label: 'Subtance 3D Painter',
    desc: 'Texturing'
  },
  {
    imgSrc: '/images/skill/Ps.svg',
    label: 'Adobe Photoshop',
    desc: 'Photography'
  },
  {
    imgSrc: '/images/skill/Ai.svg',
    label: 'Adobe Illustrator',
    desc: 'Graphic Design'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Công cụ tôi dùng
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Khám phá các công cụ và công nghệ mạnh mẽ tôi sử dụng để tạo ra các sản phẩm sáng tạo
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill