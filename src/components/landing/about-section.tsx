export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-slate-200 dark:bg-slate-950 px-6 md:px-20 py-32 "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/illustrations/avatar-dev.svg" // Replace with your actual image path
            alt="Illustration of a developer"
            className="w-full max-w-md md:max-w-lg max-h-96 object-contain drop-shadow-xl"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 ">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm <strong>Vivek Kumar</strong>, a passionate full-stack developer
            with a love for clean code and creative UI. I enjoy building
            scalable web applications and solving real-world problems with
            technology.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With experience in <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>FastAPI</strong>, and{" "}
            <strong>Python</strong>, I love bringing ideas to life from frontend
            finesse to backend logic.
          </p>
          <p className="text-lg leading-relaxed">
            I'm currently exploring design thinking, open-source contributions,
            and pushing my limits as a lifelong learner.
          </p>
        </div>
      </div>
    </section>
  );
}
