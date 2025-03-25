const BranchSection = () => {
    return (
      <section className="py-16 bg-gray-100 dark:bg-[#82cce986] max-w-7xl mx-auto rounded-md">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            আমাদের রয়েছে দুইটি ব্রাঞ্চ
          </h2>
     
        </div>
  
        <div className="mt-8 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {/* ক্যাম্পাস ১ */}
          <div className="bg-white dark:bg-neutral-800 shadow-lg w-[95%] md:w-full mx-auto  rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              📍 ক্যাম্পাস ১
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              কলেজ দ্বিতীয় তলা, মানিকগঞ্জ সদর, মানিকগঞ্জ
            </p>
          </div>
  
          {/* ক্যাম্পাস ২ */}
          <div className="bg-white dark:bg-neutral-800 shadow-lg w-[95%] md:w-full mx-auto rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800  dark:text-gray-200">
              📍 ক্যাম্পাস ২
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              বেওথা রোড, বিজয় মেলা মাঠ সংলগ্ন দক্ষিণ পাশের ভবন, মানিকগঞ্জ পৌরসভা, মানিকগঞ্জ
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default BranchSection;
  