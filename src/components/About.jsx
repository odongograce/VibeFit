export default function About() {
  return (
    <section id="about" >
      <h2 className="fw-bold mb-3">About Us</h2>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=60"
              className="img-fluid rounded shadow"
              alt="about gym"
            />
          </div>
          <div className="col-md-6">

            <p>
              At <span className="fw-semibold text-primary">VibeFit</span>, we help you achieve your dream body through expert coaching,
              customized fitness programs, and a supportive community that keeps you motivated.
              Our mission is to provide a supportive, motivating, and personalized
              environment for every individual, whether you're just
              starting your fitness journey or are an experienced athlete.
            </p>
            <p>Our philosophy is simple: <em>Your body can stand almost anything — it's your mind you have to convince.</em> At VibeFit, we provide the tools, guidance, and support to help you become the best
              version of yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
