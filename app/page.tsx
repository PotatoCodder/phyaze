import Feed from "@components/Feed";
export const Home = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h1 className="head_text text-5xl font-bold">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient"> AI-Powered Promts</span>
      </h1>
      <p>
        is a open source ai powered app that will help you navigate answers to you rquestion without using chat gpt while maaintaing the use of ai
      </p>

      {/*Feed*/}
      <Feed />
    </section>

  )
}

export default Home;
