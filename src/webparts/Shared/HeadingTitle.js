const HeadingTitle = ({ title }) => {
  return (<section id="carousel-title" className="p-5 mt-5">
    <div className="container">
      <div className="carousel-section-title text-center">
        <h3>{title}</h3>
      </div>
    </div>
  </section>)
}

export default HeadingTitle;