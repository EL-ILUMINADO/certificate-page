import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DateComponent from "./DateComponent";
import YearComponent from "./YearComponent";

import signature from "../assets/signature.png";
import CommunityLeadSignature from "../assets/signatureLead.png";

const Certificate: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  const [name, setName] = useState<string>("");
  const [certificateId, setCertificateId] = useState<string>("");

  // Generate random certificate ID on mount
  useEffect(() => {
    const randomId = Array.from({ length: 14 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    setCertificateId(randomId);
  }, []);

  return (
    <section id="certificate-section" className="text-center py-16">
      <h2 className="text-3xl font-bold mb-4 text-[#ff0004]">
        Your Certificate of Completion
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        <strong>
          Congratulations on Successfully Completing the 6-Week AI RAG Bootcamp!
        </strong>{" "}
        <br />
        We commend your dedication and commitment throughout this intensive
        program. Your personalized certificate of achievement is now available
        here.
      </p>

      {/* certificate */}
      <div className="flex flex-col items-center justify-center w-full px-4 py-8">
        {/* Editable input */}
        <input
          type="text"
          placeholder="Please Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md text-center mb-4 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0004] focus:outline-none"
        />

        {/* Download button */}
        <button
          onClick={reactToPrintFn}
          disabled={!name.trim()}
          className={`px-6 py-3 rounded-lg text-white text-sm font-medium mb-12 transition duration-300 select-none ${
            name.trim()
              ? "bg-[#ff0004] hover:bg-[#ff0004]/85 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Download Certificate
        </button>

        {/* Certificate */}
        <div
          ref={contentRef}
          className="bg-white border border-gray-400 md:flex flex-col items-center justify-between text-center px-4 py-8 overflow-hidden select-none"
          style={{
            maxWidth: "1200px",
            width: "100%",
            aspectRatio: "1123 / 790", // maintains A4 landscape
          }}
        >
          {/* Top Row */}
          <div className="w-full flex justify-between items-center px-6 mb-10 md:mb-16">
            <span className="text-xs sm:text-sm md:text-lg font-medium">
              <DateComponent />
            </span>
            <img
              src="/logo.svg"
              alt="NSK.AI Logo"
              className="w-14 sm:w-32 md:w-40"
            />
            <span className="text-xs sm:text-sm md:text-lg font-medium">
              <YearComponent />
            </span>
          </div>

          {/* Title */}
          <div className="mb-6">
            {/* Certificate ID */}
            <p className="text-[10px] mt-2 text-gray-600">
              CERTIFICATE ID: {certificateId}
            </p>
            <h1 className="text-lg sm:text-3xl md:text-5xl font-bold font-accent">
              Certificate of Achievement
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mt-2 md:mb-20">
              This certificate is presented to:
            </p>
          </div>

          {/* Name */}
          <div className="w-full flex flex-col items-center mb-8">
            <h2
              className="text-xl sm:text-3xl md:text-5xl italic font-semibold mb-2"
              style={{ fontFamily: "Great Vibes" }}
            >
              {name || "Recipient Name"}
            </h2>
            <div className="h-px bg-black w-4/5"></div>
          </div>

          {/* Message */}
          <p className="text-xs sm:text-sm md:text-lg leading-relaxed px-4 mb-4">
            Congratulations on successfully completing the AI RAG Bootcamp 2025.
            This achievement highlights your dedication, discipline, and
            commitment to mastering advanced concepts in Retrieval-Augmented
            Generation (RAG) and artificial intelligence. May the knowledge and
            skills you have gained empower you to contribute meaningfully to the
            future of AI.
          </p>

          <div className="flex items-center justify-center">
            {/* Center */}
            <img
              src="/certsvg.svg"
              alt="Certificate Icon"
              className="w-10 sm:w-16 md:w-20"
            />
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center w-full px-6 mt-auto">
            {/* Left */}
            <div className="flex flex-col items-center max-w-sm">
              <img
                width={400}
                src={CommunityLeadSignature}
                alt="Signature for NSK.AI Founder"
              />
              <div className="h-px bg-black w-50 mt-1"></div>
              <span className="text-xs sm:text-sm md:text-lg font-medium">
                COMMUNITY LEAD, <br /> Chukwuebuka Chukwudi
              </span>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center max-w-sm">
              <img
                width={100}
                src={signature}
                alt="Signature for NSK.AI Founder"
              />
              <div className="h-px bg-black w-50 mt-1"></div>
              <span className="text-xs sm:text-sm md:text-lg font-medium">
                FOUNDER, <br /> Ifeanyi Okala
              </span>
              {/* <div className="h-px bg-black w-full mt-1"></div>
              <span className="text-xs sm:text-sm">Awarded by:</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
