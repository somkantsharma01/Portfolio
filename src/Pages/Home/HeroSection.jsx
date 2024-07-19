export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Somkant</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Front End Developer proficient in creating dynamic <br /> and responsive
            web applications. Expertise in HTML, <br /> CSS, JavaScript, and React.js.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img
          src="https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?w=740&t=st=1709510811~exp=1709511411~hmac=1dcbf4a227226b36cf822a627c3e8c0577c6d8e42f1fc0b849d63917498d32d6"
          alt="Hero Section"
        />
      </div>
    </section>
  );
}
