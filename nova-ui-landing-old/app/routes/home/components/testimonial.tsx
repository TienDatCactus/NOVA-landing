import { motion, type Variants } from "motion/react";
import { ProgressiveBlur } from "~/components/progressive-blur";

function ClientFeedback() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <>
      <section className="relative  h-full  max-w-screen-xl 2xl:px-0 px-4 mx-auto rounded-lg  py-14 bg-white">
        <article
          className={"max-w-screen-md lg:px-0 px-4 mx-auto text-center space-y-2 pb-7"}
        >
          <h1 className={"text-4xl  font-medium"}>
            What our client think about us
          </h1>
          <p className={"mx-auto text-gray-500"}>
            Let's hear how holidayout client's feels about our service
          </p>
        </article>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={"visible"}
        >
          {/* Stats card */}
          <motion.div
            className="bg-blue-600 rounded-2xl p-8 flex flex-col justify-between"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-white/80 text-sm mb-2">Review</p>
            <div>
              <motion.h3
                className="text-4xl font-bold text-white pb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                Easy
              </motion.h3>
              <div>
                <h3 className="lg:text-xl text-sm font-bold text-white">
                  I never thought Holiday booking is that easy, thanks for
                  holidaout
                </h3>
                <p className="text-white/80 mt-4">- John Dale</p>
              </div>
            </div>
          </motion.div>
          {/* Main testimonial */}
          <motion.div
            className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative h-[400px] group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop"
              alt="Friends taking selfie"
              className="object-cover"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full "
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white">
                  "Thanks to holidaout, I was able to create lifelong memories"
                </h3>
                <p className="text-white/80 mt-2">- Cynthia Morgan</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Passport image */}
          <motion.div
            className="rounded-2xl overflow-hidden relative aspect-square group"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Passports"
              className="object-cover h-full"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full "
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white">
                  "it's easy to make holidy if it's even for 6 hours"
                </h3>
                <p className="text-white/80 mt-2">- Steven Sunny</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Review card */}
          <motion.div
            className="bg-[#0d422e] rounded-2xl p-8 flex flex-col justify-between aspect-square"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-white/70 text-sm mb-4">Review</p>
            <div>
              <h3 className="lg:text-xl text-sm font-bold text-white">
                Holidayalot.com provided me with a wealth of information about
                visa-free countries.
              </h3>
              <p className="text-white/80 mt-4">- John Dale</p>
            </div>
          </motion.div>

          {/* Traveler image */}
          <motion.div
            className="rounded-2xl overflow-hidden relative aspect-square group"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1659901981145-dbc056431a8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Traveler with luggage"
              className="object-cover h-full"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full "
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white">
                  "Let's Make Unbelieveable Moment with holidyout"
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Main testimonial */}
          <motion.div
            className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative h-[400px] group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521232002294-6d1cb35b6f8c?q=80&w=2105&auto=format&fit=crop"
              alt="Friends taking selfie"
              className="object-cover"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full "
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white">
                  "Thanks to Holidayalot, I was able to create lifelong
                  memories"
                </h3>
                <p className="text-white/80 mt-2">- Cynthia Morgan</p>
              </motion.div>
            </div>
          </motion.div>
          {/* Stats card */}
          <motion.div
            className="bg-blue-600 rounded-2xl p-8 flex flex-col justify-between"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-white/80 text-sm mb-2">Facts and Numbers</p>
            <div>
              <motion.h3
                className="text-6xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                30%
              </motion.h3>
              <p className="text-white lg:text-4xl text-2xl mt-4">
                Of customers recommended Holidayalot.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default ClientFeedback;
