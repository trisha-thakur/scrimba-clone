const Home = () => {
  return (
    <div className="content">
      <h3 className="content1">Featured Path: Frontend Developer</h3>
      <h1 className="content2">
        Don't spend $15K on a<span className="coding"> coding bootcamp</span>
      </h1>
      <h3 className="content3">
        Our Frontend Career Path helps motivated students
        <span className="become">
          become hireable developers for a fraction of the cost
        </span>
      </h3>
      <button className="btn1"> Visit Path </button>
      <div classNam="crowd">
        <img
          src="images/crowd (3).svg"
          className="crowdImage"
          alt="crowd "
        ></img>
      </div>
      <div className="content4">
        <img
          src="images/wsitting.svg"
          className="sittingImage"
          alt="crowd"
        ></img>
        <div>
          <div className="section2">
            <h3 className="join">Join a rapidly growing job market</h3>
            <span>
              <p className="demand">
                Demand for frontend developers is projected to grow 8% per year,
                which indicates that all companies — not just Silicon Valley big
                shots — are evolving to become tech companies.
              </p>
            </span>
          </div>
          <div className="median">
            The median salary for frontend web developers in the US is $77,874
          </div>
          <p className="bureau">Bureau of Labor Statistics, May 2020</p>
        </div>
      </div>
      <div className="content5">
        <h1 className="over">Join over 500,000 students</h1>
        <p className="sign">
          Sign up for a free Scrimba account today to get access to 40+ free
          courses, a community of learners, and live events every week.
        </p>
        <button className="btn2"> Create a Free Account</button>
      </div>
      <div className="content6">
        <h1 className="qualities">Scrimba course qualities</h1>
        <div className="grid-container">
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3162/3162297.png"
              alt="puzzle"
              className="grid-images"
            ></img>
            <p className="grid-title">Project Based</p>
            <p className="grid-content">Build real projects while learning</p>
          </div>
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5812/5812594.png"
              alt="pencil"
              className="grid-images"
            ></img>
            <p className="grid-title">Job-focused</p>
            <p className="grid-content">Learn industry-relevant skills</p>
          </div>
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2951/2951033.png"
              alt="message"
              className="grid-images"
            ></img>
            <p className="grid-title">Peer-to-peer</p>
            <p className="grid-content">Get help and support from your peers</p>
          </div>
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/776/776006.png"
              alt="clock"
              className="grid-images"
            ></img>
            <p className="grid-title">Self Paced</p>
            <p className="grid-content">Learn at your own pace</p>
          </div>
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135763.png"
              alt="certificate"
              className="grid-images"
            ></img>
            <p className="grid-title">Certification</p>
            <p className="grid-content">Finish the path to get certificate</p>
          </div>
          <div className="grid-element">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1611/1611179.png"
              alt="money"
              className="grid-images"
            ></img>
            <p className="grid-title">Affordable</p>
            <p className="grid-content">1% of the price of a bootcamp</p>
          </div>
        </div>
      </div>
      <div className="content7">
        <span className="faq">F </span>
        <span className="to-the"> to the</span>
        <span className="faq"> A</span>
        <img src="images/wsitting.svg" alt="sitting" className="faq-img"></img>
        <span className="to-the"> to the </span>
        <span className="faq"> Q</span>
      </div>
      <div className="content8">
        <div className="grid-container">
          <div className="gird-element">
            <p className="grid-title">Is Scrimba a coding bootcamp?</p>
            <p className="grid-content">
              In short, no we are not. We aim to offer the same value, but at
              100X lower price, so there are differences. Scrimba allows you to
              study where you want, when you want. We also substitute the
              classroom teaching experience with interactive screencast, live
              events, and peer-to-peer help between students.
            </p>
          </div>
          <div className="gird-element">
            <p className="grid-title">Do I get in-person help from teachers?</p>
            <p className="grid-content">
              Getting help at Scrimba is done peer-to-peer, meaning students
              help and support each other, instead of teacher-to-student. This
              is an important ingredient in being able to charge 1% of what
              coding bootcamps charge.
            </p>
          </div>
          <div className="gird-element">
            <p className="grid-title">When do the courses start?</p>
            <p className="grid-content">
              Whenever you want. Our courses are all self-paced, meaning you
              follow your own schedule. Sign up and get started today if you
              would like!
            </p>
          </div>
          <div className="gird-element">
            <p className="grid-title">Do you have team plans?</p>
            <p className="grid-content">
              We sure do! Complete The Team Plans Form and our team will get
              back to you within 48 hours.
            </p>
          </div>
          <div className="gird-element">
            <p className="grid-title">How long does the career path take?</p>
            <p className="grid-content">
              You can complete the career path in three months if you are fast.
              But it will realistically take you 6-12 months to reach a hireable
              level as a frontend developer.
            </p>
          </div>
          <div className="gird-element">
            <p className="grid-title">I have more questions. Who can I ask?</p>
            <p className="grid-content">
              Please join our Discord server and ask in the #general channel.
              There, you will be replies from both the community and Team
              Scrimba.
            </p>
          </div>
        </div>
      </div>
      <div className="content9">
        <button className="btn3">Visit Path</button>
      </div>
    </div>
  );
};

export default Home;
