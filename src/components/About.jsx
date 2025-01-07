/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Dự án đã hoàn thành',
    number: 22
  },
  {
    label: 'Năm kinh nghiệm',
    number: 6
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Xin chào! Tôi là Nghị Trần, một chuyên gia dựng phim với 6 năm kinh nghiệm trong ngành, ngoài ra tôi cũng là một 3D Artist với hơn 1 năm kinh nghiệm. Tôi đam mê kể chuyện qua từng khung hình và tạo ra những sản phẩm 3D sống động, giúp truyền tải ý tưởng một cách độc đáo và ấn tượng. 
            <br />
            <br />
            Trong suốt hành trình làm nghề, tôi đã tham gia vào nhiều dự án khác nhau, từ sản xuất phim, video quảng cáo đến thiết kế mô hình 3D. Phong cách làm việc của tôi luôn tập trung vào sự sáng tạo, chú ý đến từng chi tiết và đảm bảo sản phẩm cuối cùng không chỉ đáp ứng mà còn vượt qua kỳ vọng của khách hàng.
            <br />
            <br />
            Nếu bạn đang tìm kiếm một người đồng hành để hiện thực hóa ý tưởng của mình, tôi rất hân hạnh được hỗ trợ!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo_svg.svg"
              alt="Logo"
              width={100}
              height={100}
              className="ml-auto md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About