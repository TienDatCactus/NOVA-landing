import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "~/components/ui/accordion";
import { Play } from "lucide-react";
import { useRef } from "react";
import  { TimelineContent } from "~/components/timeline-animation";
import VerticalCutReveal from "~/components/vertical-cut-reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How we will keep your data safe , secure and well maintance?",
    answer:
      "We specialize in custom AI solutions including chatbots, predictive analytics, computer vision, NLP, and automation workflows tailored to your business needs.",
  },
  {
    question: "How we will keep your data safe , secure and well maintance?",
    answer:
      "Absolutely! We offer seamless integration with CRMs, ERPs, databases, APIs, and other third-party tools your business relies on.",
  },
  {
    question: "How we will keep your data safe , secure and well maintance?",
    answer:
      "We conduct thorough testing and offer ongoing optimization post-launch. If something's off, we'll tweak it until it delivers results.",
  },
  {
    question: "How we will keep your data safe , secure and well maintance?",
    answer:
      "Yes, we provide clear documentation and offer team training to help you and your staff understand and make the most of the AI systems we implement.",
  },
  {
    question: "How we will keep your data safe , secure and well maintance?",
    answer:
      "Yes, we provide clear documentation and offer team training to help you and your staff understand and make the most of the AI systems we implement.",
  },
];

export default function Faqs3() {
  const faqsRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="sm:p-10 p-5 mx-auto w-full max-w-7xl shadow-sm grid md:grid-cols-2 gap-5"
      ref={faqsRef}
    >
      <div className="flex flex-col justify-between">
        <div>
          <TimelineContent
            as="span"
            animationNum={0}
            timelineRef={faqsRef}
            customVariants={revealVariants}
            className="text-sm  border p-1 px-2 bg-blue-600 text-white rounded-md font-normal"
          >
            UI-Layout Sass analytics
          </TimelineContent>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-black pt-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Frequently asked questions
            </VerticalCutReveal>
          </h1>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={faqsRef}
          customVariants={revealVariants}
          className="border border-neutral-200 p-4 rounded-lg bg-gradient-to-t text-white from-blue-50 to-blue-700 md:block hidden"
        >
          <h2 className="text-2xl font-semibold">Still have questions?</h2>
          <p className="text-sm py-2">
            Can't find the answer to your question? Send us an email and we'll
            get back to you as soon as possible!
          </p>
          <button className="active:shadow-none bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-600 text-white p-2 px-3 mt-5 rounded-md">
            Send email
          </button>
        </TimelineContent>
      </div>
      <div>
        <div className="mt-3">
          <Accordion defaultValue="item-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-0 bg-gray-100 border p-4 rounded-xl border-gray-200 w-full py-2 mt-4"
              >
                <TimelineContent
                  as="div"
                  animationNum={2 + index}
                  timelineRef={faqsRef}
                  customVariants={revealVariants}
                >
                  <AccordionHeader
                    customIcon
                    className="hover:no-underline p-0  py-2 relative data-[active]:bg-transparent hover:bg-transparent text-black  sm:text-base text-sm"
                  >
                    <span className="font-medium lg:text-lg">
                      {item.question}
                    </span>
                    <span className="relative bg-white p-3 -translate-x-1 rounded-xl border border-neutral-200">
                      <Play className="w-5 h-5 fill-blue-600 text-blue-600 group-data-[active]:rotate-90 -rotate-90 transition-all duration-300" />
                    </span>
                  </AccordionHeader>
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={2 + index}
                  timelineRef={faqsRef}
                  customVariants={revealVariants}
                >
                  <AccordionPanel
                    className="space-y-4 w-full mx-auto bg-neutral-100 px-0"
                    articleClassName="pt-2 px-0 bg-neutral-100"
                  >
                    <p className="text-sm lg:text-base text-neutral-700">
                      {item.answer}
                    </p>
                  </AccordionPanel>
                </TimelineContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={faqsRef}
          customVariants={revealVariants}
          className="border border-neutral-200 p-4 rounded-lg bg-gradient-to-t text-white from-blue-50 to-blue-700 md:hidden block mt-10"
        >
          <h2 className="text-2xl font-semibold">Still have questions?</h2>
          <p className="text-sm py-2">
            Can't find the answer to your question? Send us an email and we'll
            get back to you as soon as possible!
          </p>
          <button className="active:shadow-none bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-600 text-white p-2 px-3 mt-5 rounded-md">
            Send email
          </button>
        </TimelineContent>
      </div>
    </div>
  );
}
