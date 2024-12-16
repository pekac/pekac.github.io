export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium pt-12 self-center">
        Predrag Popović
      </h1>
      <p className="self-center text-center">
        Passionate software engineer who loves to learn and build stuff
      </p>

      <h2 className="text-2xl font-medium self-center text-center">
        Work experience
      </h2>

      <div className="relative flex flex-col gap-y-6 self-center text-center">
        <div className="flex flex-wrap justify-center gap-x-2">
          <span>Founder & Full-stack Engineer</span>
          <span className="text-gray-600">@Maxwell Engineering</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <span>Co-founder & Community Leader</span>
          <span className="text-gray-600">@Niš JS</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <span>Front-end Engineer & Front-end Tech Lead</span>
          <span className="text-gray-600">@HTEC Group</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <span>Full-stack Engineer</span>
          <span className="text-gray-600">
            @GIS Lab, Faculty of Electronic Engineering, Niš
          </span>
        </div>

        <div className="w-px bg-gray-300 mx-8"></div>
      </div>
    </>
  );
}
