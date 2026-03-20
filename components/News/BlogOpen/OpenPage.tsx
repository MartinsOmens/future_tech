"use client";

import { assets } from "@/lib/assets";
import { Hub } from "@/lib/hub";
import Image from "next/image";
import Captions from "../Headlines/Captions";
import CTASection from "@/components/Home/CTA/CTASection";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

interface OpenPropsPage {
  article: Hub;
}

const OpenPage = ({ article }: OpenPropsPage) => {
  return (
    <section className="w-full overflow-hidden">
      <main className="bg-[#141414] text-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-105 w-full border-b border-white/10">
          <Image
            src={assets.open_banner}
            alt="AI Healthcare"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl">
              {article.title}
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            {/* INTRO */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Artificial Intelligence (AI) has emerged as a transformative
                force in the healthcare industry, reshaping patient care,
                diagnostics, and research. In this blog post, we explore the
                profound impact of AI in healthcare, from revolutionizing
                diagnostic accuracy to enhancing patient outcomes.
              </p>
            </div>

            {/* AI SECTION */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-xl font-semibold mb-3">
                Artificial Intelligence (AI)
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
            </div>

            {/* CONTENT BOX */}
            <div className="bg-[#141414]  rounded-xl relative overflow-hidden">
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Predictive Analytics and Disease Prevention
              </h2>

              {/* TEXT */}
              <p className="text-gray-500 leading-relaxed max-w-3xl">
                One of the most prominent applications of AI in healthcare is in
                diagnostic imaging. AI algorithms have demonstrated remarkable
                proficiency in interpreting medical images such as X-rays, MRIs,
                and CT scans. They can identify anomalies and deviations that
                might be overlooked by the human eye.
              </p>

              {/* BUTTON */}
              <div className="flex justify-center mt-6">
                <button className="px-5 py-2.5 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white hover:text-black transition-all duration-300">
                  Read Full Blog ↓
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <aside className="space-y-6  lg:pl-10">
            <div className="flex gap-2 text-gray-400 text-xs pt-2 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full hover:border-yellow-400 transition">
                <FaRegHeart className="text-[#FF5500]" /> {article.likes}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full hover:border-yellow-400 transition">
                <FaRegComment /> {article.comments}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full hover:border-yellow-400 transition">
                <FiSend /> {article.shares}
              </span>
            </div>

            {/* META */}
            <div className="bg-[#141414] p-5 rounded-xl text-sm border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between pb-3">
                <span className="text-gray-400">Publication Date</span>
                <span>October 15, 2023</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">Reading Time</span>
                <span>10 Min</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">Category</span>
                <span>Healthcare</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-gray-400">Author</span>
                <span>{article.author}</span>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="bg-[#141414] p-5 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-3">Table of Contents</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Introduction</li>
                <li>• AI in Diagnostic Imaging</li>
                <li>• Predictive Analytics</li>
                <li>• Personalized Treatment</li>
                <li>• Drug Discovery</li>
                <li>• AI in Telemedicine</li>
                <li>• Ethical Considerations</li>
                <li>• Future of AI</li>
                <li>• Conclusion</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      {/* SIMILAR NEWS */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              Similar News
            </h2>
            <button className="bg-[#141414] px-3 py-1.5 border border-white/20 rounded flex items-center gap-2 text-white transition hover:border-yellow-400">
              View All
              <GoArrowUpRight size={20} className="text-yellow-400" />
            </button>
          </div>
          {/* -------- Captions ----------- */}
          <Captions />
        </div>
      </div>
      {/* -------------- CTASection ---------------- */}
      <CTASection />
    </section>
  );
};

export default OpenPage;
