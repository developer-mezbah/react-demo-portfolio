import profile from "../../assets/my.jpg"
const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={profile}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Mezbah Uddin!</h1>
            <p className="py-6">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <button className="btn btn-primary">Go More details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
