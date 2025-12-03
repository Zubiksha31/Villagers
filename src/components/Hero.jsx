import React from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { Leaf, Award, Sparkles } from "lucide-react";
import FallingLeaf from "./FallingLeaf";
<<<<<<< HEAD
// import Homepageimage from "../assets/Homepageimage.png";
=======
import Homepageimage from "../assets/Homepageimage.png";
>>>>>>> 6a21724c88f19eaf173165ac0b1f1c86f37db4ca
import HomePage from "../assets/HomePage.png";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Home = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900 pt-14 relative overflow-hidden">
      {/* <FallingLeaf delay={0} size={6} left="10%" />
      <FallingLeaf delay={2} size={8} left="25%" />
      <FallingLeaf delay={4} size={5} left="40%" />
      <FallingLeaf delay={1} size={7} left="55%" />
      <FallingLeaf delay={3} size={6} left="70%" />
      <FallingLeaf delay={5} size={8} left="85%" /> */}
      {/* --- FALLING LEAVES --- */}
      {/* Small falling leaves in the background */}
      {/* Small, dim falling leaves in the background */}
      {/* Small, interactive, dim falling leaves */}
      {[...Array(20)].map((_, i) => (
        <FallingLeaf
          key={i}
          delay={Math.random() * 20}
          size={0.8 + Math.random() * 1} // smaller leaves
          left={`${Math.random() * 100}%`}
        />
      ))}

      <section className="relative w-full min-h-screen px-6 sm:px-12 md:px-28 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-r from-emerald-50 to-white overflow-hidden">
        {/* Falling Leaves (behind content) */}
        {[...Array(10)].map((_, i) => (
          <FallingLeaf
            key={i}
            delay={Math.random() * 20}
            size={0.6 + Math.random() * 1} // smaller leaves on mobile
            left={`${Math.random() * 100}%`}
          />
        ))}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10  md:text-left"
        >
          <h1>
            <div className="flex flex-col  md:items-start">
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5  md:justify-start">
                <BlurText
                  text="Welcome to"
                  delay={150}
                  animateBy="chars"
                  direction="top"
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800"
                />
                <BlurText
                  text="Villa"
                  delay={250}
                  animateBy="chars"
                  direction="top"
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-emerald-600"
                />
              </div>
              <div className="mt-2">
                <BlurText
<<<<<<< HEAD
                  text="Glob"
=======
                  text="Globe"
>>>>>>> 6a21724c88f19eaf173165ac0b1f1c86f37db4ca
                  delay={350}
                  animateBy="chars"
                  direction="top"
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-emerald-700"
                />
              </div>
            </div>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-full md:max-w-xl">
<<<<<<< HEAD
            Incorporated in <b>2019</b>, <b>Villagers Glob</b> is an Indian
=======
            Incorporated in <b>2019</b>, <b>Villagers Global</b> is an Indian
>>>>>>> 6a21724c88f19eaf173165ac0b1f1c86f37db4ca
            eco-friendly products manufacturing company driven by a vision to
            bring <b>sustainability</b> into daily life. Our mission is to help
            people live better while preserving nature for the next generation
            by avoiding plastic.
          </p>

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-full sm:max-w-md mx-auto md:mx-0">
            <h3 className="font-semibold text-emerald-700 text-base sm:text-lg flex items-center gap-2">
              🌿 Latest Offer!
            </h3>
            <p className="text-gray-700 mt-1 text-sm sm:text-base">
              Get <b>15% OFF</b> on all bamboo and coconut shell products —
              Limited Time Offer!
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-6 sm:mt-8">
            <a
              href="/materials"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white font-medium rounded-xl shadow-xl hover:bg-emerald-700 transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Products
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative z-10 mt-8 md:mt-0"
        >
          <img
            src={HomePage}
            alt="eco products"
            className="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Leaf Accent - Top Left */}
          <div className="absolute -top-4 left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-200 rounded-full rotate-45 animate-pulse opacity-70"></div>

          {/* Floating Leaf Accent - Bottom Right */}
          <div className="absolute -bottom-6 right-2 w-12 h-12 sm:w-16 sm:h-20 md:w-24 md:h-24 bg-emerald-300 rounded-full rotate-12 animate-pulse opacity-50"></div>
        </motion.div>
      </section>

      {/* --- ABOUT US --- */}

      <motion.section
        className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-24 px-6 text-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-40"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-green-700 mb-10 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-400 transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We aim to achieve wellness in everyone’s life and preserve the
            environment through sustainable practices. Our mission is simple:
            <span className="font-semibold text-green-700">
              {" "}
              “To help people live better and sustain our planet.”
            </span>
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-600 mt-6 leading-relaxed max-w-3xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            We established{" "}
            <span className="font-semibold text-green-700">
<<<<<<< HEAD
              Villagers Glob
=======
              Villagers Global
>>>>>>> 6a21724c88f19eaf173165ac0b1f1c86f37db4ca
            </span>{" "}
            with a vision — “To make a difference to our routine life via
            sustainable sources.”
          </motion.p>

          {/* Decorative Eco Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                🌿 Eco-Living
              </h3>
              <p className="text-gray-600">
                Encouraging mindful choices that nurture our environment and
                promote a healthy planet.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                🌱 Sustainability
              </h3>
              <p className="text-gray-600">
                Building harmony between people and nature through sustainable
                innovations.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                💧 Wellness
              </h3>
              <p className="text-gray-600">
                Promoting wellness in body, mind, and planet — because care
                starts from within.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- WHY VILLAGERS --- */}

      <motion.section
        className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-24 px-6 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-20 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-16 right-20 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-40"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-green-700 mb-10 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
<<<<<<< HEAD
            Why Villa Glob?
=======
            Why Villa Globe?
>>>>>>> 6a21724c88f19eaf173165ac0b1f1c86f37db4ca
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-400 transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          {/* Highlight Box */}
          <motion.div
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-10 border-l-4 border-green-500 mx-auto max-w-4xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Buying a single eco-friendly product might not change the world
              overnight, but it’s a powerful start{" "}
              <span className="text-2xl">🌍</span>. We believe in creating
              meaningful impact through small, conscious actions.
            </p>

            <p className="text-base md:text-lg text-gray-600 mt-6 leading-relaxed italic">
              We can even customize your order and print your logo or name on
              the product.{" "}
              <span className="font-semibold text-green-700">
                Because sustainability should also feel personal!
              </span>
            </p>
          </motion.div>

          {/* Decorative Icons Row */}
          <motion.div
            className="flex justify-center gap-8 mt-12 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-100 p-5 rounded-full shadow-md"
            >
              🌱
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-100 p-5 rounded-full shadow-md"
            >
              🌍
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-100 p-5 rounded-full shadow-md"
            >
              💧
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-100 p-5 rounded-full shadow-md"
            >
              🌿
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- VALUES & ACHIEVEMENTS --- */}
      <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 overflow-hidden">
        {/* Floating Glow Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center px-6"
        >
          <h2 className="text-5xl font-extrabold text-emerald-800 mb-10 flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-emerald-700" />
            Awards & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Award Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg border border-emerald-100 p-8 text-left hover:shadow-emerald-200 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-emerald-600 w-8 h-8" />
                <h3 className="text-2xl font-semibold text-emerald-800">
                  South Indian Business Award 2019 🏆
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Proud winner of <b>SIBA 2019</b> for
                <i> “Best Eco-Friendly Manufacturer in Tirupur.”</i>
              </p>
            </motion.div>

            {/* Expo Recognition */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg border border-emerald-100 p-8 text-left hover:shadow-emerald-200 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-emerald-600 w-8 h-8" />
                <h3 className="text-2xl font-semibold text-emerald-800">
                  Excellence in Sustainability
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Honored in various expos for{" "}
                <b>innovation in sustainable products</b> and dedication to
                eco-conscious design.
              </p>
            </motion.div>
          </div>

          {/* Our Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-16 bg-emerald-700 text-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-4">
              <Leaf className="w-12 h-12 text-lime-200" />
              <h3 className="text-3xl font-bold tracking-wide">
                Our Values 🌱
              </h3>
              <p className="text-lg text-emerald-50 leading-relaxed mt-3">
                We never compromise on <b>quality</b>. Every product is designed
                to be
                <b> 100% biodegradable</b> — ensuring <b>zero waste</b> and
                complete harmony with nature. Because we believe sustainability
                is not a trend, it’s a responsibility. 🌿
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SUSTAINABILITY SECTION --- */}

      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-100">
        {/* Decorative glowing eco blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Floating leaves animation (subtle motion) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-1/3"
        >
          <Leaf className="text-emerald-500 opacity-40 w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-10 right-1/4"
        >
          <Leaf className="text-lime-500 opacity-40 w-8 h-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-emerald-800 mb-6 flex items-center justify-center gap-3">
            <Sparkles className="text-emerald-600 w-8 h-8" />
            Sustainable Design for a Better Tomorrow
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            We believe in product designs that serve the environment, human
            health, and society without compromising quality or accessibility.
            Clean air, renewable resources, and a toxin-free planet are not
            luxuries — they’re necessities.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 text-xl font-semibold text-emerald-800"
          >
            Join hands with us — <b>Villagers</b> — to enhance your health and
            support our planet 🌏
          </motion.p>

          {/* Highlight card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-10 bg-white border border-emerald-100 shadow-lg shadow-emerald-100 rounded-3xl py-6 px-10 inline-block"
          >
            <p className="text-emerald-700 font-medium">
              🌱 Every product you choose contributes to a cleaner, greener
              world.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
