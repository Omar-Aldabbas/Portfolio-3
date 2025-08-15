import "./style/Testimonials.css";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Omar built our website with incredible attention to detail and creativity. Highly recommend!",
      author: "Sarah K.",
    },
    {
      text: "The web app Omar created is super responsive and easy to navigate. Our users love it.",
      author: "Alex P.",
    },
    {
      text: "Working with Omar was seamless. He communicates clearly and delivers on time.",
      author: "Nina R.",
    },
    {
      text: "Omar has a great eye for design. The final product exceeded our expectations.",
      author: "Liam D.",
    },
    {
      text: "His knowledge of full-stack development helped us solve complex problems efficiently.",
      author: "Emily S.",
    },
    {
      text: "Even after launch, Omar was available for tweaks and support. Truly reliable.",
      author: "Jordan M.",
    },
  ];

  return (
    <section className="testimonials-sec">
      <div className="intro-text">
        <h2>What Clients Say</h2>
        <p>
          Here’s some feedback from clients and collaborators I’ve worked with.
          Their words reflect my approach to building clean, user-friendly,
          and robust applications.
        </p>
      </div>

      <div className="testimonials-list">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">- {item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
