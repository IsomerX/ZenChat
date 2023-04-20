/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import { loubagFontClassname } from "./_app";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZenChat</title>
        <meta name="description" content="AI Powered Pre-therapy Companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-b">
        <section className="isolate flex h-screen justify-center" id="banner">
          <img
            src="/images/banner_circle.svg"
            alt=""
            className="absolute left-1/2 -z-10 -translate-x-1/2"
          />
          <div className="mx-auto">
            <nav className="flex items-center justify-center gap-16 py-16 font-pop font-semibold text-e">
              <div>
                <a href="#banner">Home</a>
              </div>
              <div>
                <a href="#problems">Problem</a>
              </div>
              <div>
                <a href="#product">Product</a>
              </div>
              <img src="/images/Logo.png" alt="logo" />
              <div>
                <a href="#advantages">Advantages</a>
              </div>
              <div>
                <a href="#team">Team</a>
              </div>
              <div>
                <a href="#contact">Contact</a>
              </div>
            </nav>
            <div className="relative mt-20 space-y-10">
              <div className="relative">
                <img
                  src="/images/shape_1.png"
                  alt="shape"
                  className="absolute left-1/2 top-1/2 -z-10 h-[200px] -translate-x-1/2 -translate-y-1/2"
                />
                <h1
                  className={`${loubagFontClassname} text-center text-9xl font-bold text-e`}
                >
                  ZenChat
                </h1>
              </div>
              <p className="text-center font-pop text-lg text-e">
                Your go-to mental health support, available anytime, anywhere.
              </p>
            </div>
          </div>
        </section>
        <section className="relative isolate" id="problems">
          {/* <img
            src="/images/shape.svg"
            alt=""
            className="relative z-10 w-full"
          /> */}
          <div className="relative w-full bg-c py-36 shadow-inner">
            <div className="space-y-6">
              <h1
                className={`${loubagFontClassname} text-center text-8xl font-bold text-b`}
              >
                The Problems
              </h1>
              <p className="text-center font-pop text-lg text-d">
                Your go-to mental health support, available anytime, anywhere.{" "}
              </p>
            </div>
            <div className="mx-auto flex w-1/2 justify-between pt-16">
              <div>
                <img src="/images/p1.png" alt="" />
                <p className="text-center font-pop text-xl text-a">
                  Stigma & Shame
                </p>
              </div>
              <div>
                <img src="/images/p2.png" alt="" />
                <p className="text-center font-pop text-xl text-a">
                  Time Consuming
                </p>
              </div>
              <div>
                <img src="/images/p3.png" alt="" />
                <p className="text-center font-pop text-xl text-a">
                  Expensive & Cumbersome
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="isolate flex justify-center" id="product">
          {/* <img
            src="/images/weird_shape.svg"
            alt=""
            className="absolute left-1/2 -z-10 w-full -translate-x-1/2"
          /> */}
          <div className="mx-auto w-full">
            <div className="mt-36 space-y-6">
              <h1
                className={`${loubagFontClassname} text-center text-8xl font-bold text-e`}
              >
                Our Product
              </h1>
              <p className="text-center font-pop text-lg text-e/90">
                Your go-to mental health support, available anytime, anywhere.{" "}
              </p>
            </div>
            <div className="mx-auto flex w-2/3 flex-wrap justify-center py-16">
              <div className="w-1/3 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                >
                  Pre-therapy AI Companion
                </h3>
                <p className="text-center font-pop text-xl text-a">
                  Connect with Certified Therapist
                </p>
              </div>
              <div className="w-1/3 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                >
                  Book Therapist Session
                </h3>
                <p className="text-center font-pop text-xl text-a">
                  Connect with Certified Therapist
                </p>
              </div>
              <div className="w-1/3 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                >
                  Multilingual Support{" "}
                </h3>
                <p className="text-center font-pop text-xl text-a">
                  Supports all major languages of the world
                </p>
              </div>
              <div className="w-1/3 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                >
                  Privacy Centric
                </h3>
                <p className="text-center font-pop text-xl text-a">
                  No Data of Users is collected without their concern
                </p>
              </div>
              <div className="w-1/3 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                >
                  Red Alert
                </h3>
                <p className="text-center font-pop text-xl text-a">
                  Authorities are contacted automatically in extreme situations{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="isolate flex justify-center" id="advantages">
          {/* <img
            src="/images/weird_shape_2.svg"
            alt=""
            className="absolute left-1/2 -z-10 w-full -translate-x-1/2"
          /> */}
          <div className="mx-auto w-full bg-c py-40 shadow-inner">
            <div className=" space-y-6">
              <h1
                className={`${loubagFontClassname} text-center text-8xl font-bold text-b`}
              >
                Competitive Advantages
              </h1>
              <p className="text-center font-pop text-lg text-d">
                Your go-to mental health support, available anytime, anywhere.{" "}
              </p>
            </div>
            <div className="mx-auto flex w-2/3 flex-wrap justify-center pt-24">
              <div className="w-1/2 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-a`}
                >
                  Human like chatbot
                </h3>
                <p className="text-center font-pop text-xl text-d">
                  Realistic, therapeutic and friendly
                </p>
              </div>
              <div className="w-1/2 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-a`}
                >
                  Anonymous
                </h3>
                <p className="text-center font-pop text-xl text-d">
                  We never collect user data without their consent
                </p>
              </div>
              <div className="w-1/2 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-a`}
                >
                  Personalization
                </h3>
                <p className="text-center font-pop text-xl text-d">
                  The bot will remember the context each time you login
                </p>
              </div>
              <div className="w-1/2 space-y-2 p-10">
                <h3
                  className={`${loubagFontClassname} text-center text-3xl font-bold text-a`}
                >
                  Pre-therapy focus
                </h3>
                <p className="text-center font-pop text-xl text-d">
                  Helps user identify if they actually need professional therapy
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="isolate flex justify-center" id="team">
          {/* <img
            src="/images/weird_shape.svg"
            alt=""
            className="absolute left-1/2 -z-10 w-full -translate-x-1/2"
          /> */}
          <div className="mx-auto w-full">
            <div className="mt-36 space-y-6">
              <h1
                className={`${loubagFontClassname} text-center text-8xl font-bold text-e`}
              >
                Our Team
              </h1>
              <p className="text-center font-pop text-lg text-e/90">
                Your go-to mental health support, available anytime, anywhere.{" "}
              </p>
            </div>
            <div className="mx-auto grid w-2/3 grid-cols-4 justify-center py-16">
              <div className="w-full space-y-8 p-10">
                <img
                  src="/images/t1.jpg"
                  className="mx-auto rounded-full"
                  alt=""
                />
                <div>
                  <h3
                    className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                  >
                    Sarthak Gupta
                  </h3>
                  <p className="text-center font-pop text-xl text-a">
                    Business Head
                  </p>
                </div>
              </div>
              <div className="w-full space-y-8 p-10">
                <img
                  src="/images/t2.jpg"
                  className="mx-auto rounded-full"
                  alt=""
                />
                <div>
                  <h3
                    className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                  >
                    Shivam Mittal{" "}
                  </h3>
                  <p className="text-center font-pop text-xl text-a">
                    App Developer
                  </p>
                </div>
              </div>
              <div className="w-full space-y-8 p-10">
                <img
                  src="/images/t3.jpg"
                  className="mx-auto rounded-full"
                  alt=""
                />
                <div>
                  <h3
                    className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                  >
                    Dhruv Bakshi
                  </h3>
                  <p className="text-center font-pop text-xl text-a">
                    Web Head
                  </p>
                </div>
              </div>
              <div className="w-full space-y-8 p-10">
                <img
                  src="/images/t4.jpg"
                  className="mx-auto rounded-full"
                  alt=""
                />
                <div>
                  <h3
                    className={`${loubagFontClassname} text-center text-3xl font-bold text-c`}
                  >
                    Mansi Joshi
                  </h3>
                  <p className="text-center font-pop text-xl text-a">
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="isolate flex justify-center" id="contact">
          <div className="mx-auto w-full bg-c pb-16 pt-40 shadow-inner">
            <div className="space-y-6">
              <h1
                className={`${loubagFontClassname} text-center text-8xl font-bold text-b`}
              >
                Reach Out
              </h1>
              <p className="text-center font-pop text-lg text-d">
                Your go-to mental health support, available anytime, anywhere.{" "}
              </p>
            </div>
            <form
              action="https://formspree.io/f/xdovyezg"
              method="POST"
              className="mx-auto flex w-1/2 flex-wrap justify-between pt-16"
            >
              <div className="w-1/2 px-5">
                <h3
                  className={`${loubagFontClassname} text-3xl font-bold text-b`}
                >
                  Name
                </h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-sm bg-d p-2 text-3xl font-black text-e/60"
                  name="name"
                />
              </div>
              <div className="w-1/2 px-5">
                <h3
                  className={`${loubagFontClassname} text-3xl font-bold text-b`}
                >
                  Contact
                </h3>
                <input
                  type="number"
                  className="mt-3 w-full rounded-sm bg-d p-2 text-3xl font-black text-e/60"
                  name="contact"
                />
              </div>
              <div className="mt-7 w-full px-5">
                <h3
                  className={`${loubagFontClassname} text-3xl font-bold text-b`}
                >
                  Message
                </h3>
                <textarea
                  className="mt-3 h-40 w-full rounded-sm bg-d p-2 text-3xl font-black text-e/60"
                  cols={100}
                  rows={10}
                  name="message"
                />
                <button className="mt-7 rounded-sm bg-a px-4 py-3 text-center text-xl font-black text-b">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
