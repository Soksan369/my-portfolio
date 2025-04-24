export default function Resume() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
              Resume
            </h1>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition mb-4"
            >
              Download PDF
            </a>
            <div className="w-full flex flex-col gap-8">
              {/* Experience */}
              <section>
                <h2 className="text-xl font-bold text-blue-500 mb-2">Experience</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Frontend Developer</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Tech Solutions Co., Ltd.</span>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-1 text-sm">
                      <li>Developed and maintained React web applications.</li>
                      <li>Collaborated with designers to deliver beautiful UIs.</li>
                      <li>Implemented responsive and accessible features.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Intern Web Developer</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2022</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Creative Studio</span>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-1 text-sm">
                      <li>Assisted in building landing pages and dashboards.</li>
                      <li>Learned modern JavaScript and CSS frameworks.</li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Education */}
              <section>
                <h2 className="text-xl font-bold text-purple-500 mb-2">Education</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">B.Sc. in Computer Science</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Bangkok University</span>
                  </div>
                </div>
              </section>
              {/* Skills */}
              <section>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    React
                  </span>
                  <span className="px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-sm font-medium">
                    TailwindCSS
                  </span>
                  <span className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                    MongoDB
                  </span>
                  <span className="px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm font-medium">
                    Express
                  </span>
                </div>
              </section>
              {/* Contact */}
              <section>
                <h2 className="text-xl font-bold text-green-500 mb-2">Contact</h2>
                <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:jane.doe@email.com"
                      className="text-blue-500 hover:underline"
                    >
                      jane.doe@email.com
                    </a>
                  </span>
                  <span>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/janedoe"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-500 hover:underline"
                    >
                      github.com/janedoe
                    </a>
                  </span>
                  <span>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://linkedin.com/in/janedoe"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-500 hover:underline"
                    >
                      linkedin.com/in/janedoe
                    </a>
                  </span>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    );
  }