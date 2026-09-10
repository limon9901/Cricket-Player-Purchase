

const Subcribe = () => {
  return (
    <section className="container mx-auto mt-45  px-4 relative -mb-35 z-10">
      {/* Outer Border */}
      <div className="rounded-[18px] border border-white/80 p-3">
        
        {/* Main Newsletter Box */}
        <div
          className="
            relative overflow-hidden
            rounded-[15px]
            border border-white/70
            bg-linear-to-br
            from-white
            via-white
            to-orange-100
            px-6 py-14
            text-center
            shadow-sm
          "
        >
          {/* Blue Glow */}
          <div
            className="
              absolute -bottom-24 -left-20
              h-56 w-80
              rounded-full
              bg-sky-300/40
              blur-3xl
            "
          ></div>

          {/* Orange Glow */}
          <div
            className="
              absolute -top-20 -right-20
              h-52 w-72
              rounded-full
              bg-orange-300/40
              blur-3xl
            "
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 text-xl font-medium text-gray-600 mb-6">
              Get the latest updates and news right in your inbox!
            </p>

            {/* Form */}
            <form className="mt-4 flex justify-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-12 w-100
                  rounded-lg
                  border border-gray-200
                  bg-white/80
                  px-4
                  text-[16px]
                  text-[#131313]/40
                  outline-none
                  placeholder:text-gray-400
                  focus:border-gray-300
                "
              />

              <button
                type="submit"
                className="
                  h-12
                  rounded-lg
                  bg-linear-to-r
                  from-pink-300
                  via-pink-200
                  to-yellow-300
                  px-5
                  text-[16px]
                  font-bold
                  text-gray-900
                  shadow-sm
                  transition
                  hover:scale-105
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;