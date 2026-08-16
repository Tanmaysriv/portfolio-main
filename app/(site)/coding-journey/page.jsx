const journey = [
  {
    year: "2022",
    title: "Started Coding",
    description:
      "Started my Computer Science journey and built my programming fundamentals around Java, Python, C++ and JavaScript.",
    skills: ["Java", "Python", "C++", "JavaScript", "OOPS", "SQL"],
  },
  {
    year: "2023",
    title: "Started DSA",
    description:
      "Started taking Data Structures and Algorithms seriously and began consistently solving programming problems.",
    skills: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "Graphs",
      "Recursion",
      "Dynamic Programming",
    ],
  },
  {
    year: "2023–2024",
    title: "First Real Projects",
    description:
      "Moved from solving programming problems to building real applications.",
    skills: [
      "To-Do List",
      "Quiz App",
      "Heart Attack Analysis",
      "3D iPhone E-Commerce",
      "Ele-Types",
    ],
  },
  {
    year: "2024",
    title: "Industry Experience",
    description:
      "Gained practical experience through internships in web development and machine learning.",
    skills: [
      "AIT Bangkok",
      "Techoctanet Pvt. Ltd.",
      "Python",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    year: "2024–2025",
    title: "AI / ML Exploration",
    description:
      "Explored Machine Learning, Deep Learning and Generative AI through practical projects.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "TensorFlow",
      "Keras",
      "Python",
    ],
  },
  {
    year: "2025–2026",
    title: "450+ Problems Solved",
    description:
      "Problem solving became a consistent part of my development journey across LeetCode and GeeksforGeeks.",
    skills: [
      "LeetCode",
      "GeeksforGeeks",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    year: "2025–2026",
    title: "Building ARVANA",
    description:
      "Started building ARVANA, an AR virtual try-on and immersive e-commerce platform.",
    skills: [
      "React",
      "Vite",
      "Three.js",
      "MediaPipe",
      "TensorFlow.js",
      "WebXR",
      "Node.js",
    ],
  },
  {
    year: "Now",
    title: "Exploring DevOps & Cloud",
    description:
      "Currently expanding my engineering skills into DevOps, cloud, automation and deployment.",
    skills: [
      "Linux",
      "Git",
      "CI/CD",
      "Cloud",
      "Automation",
      "DevOps",
    ],
  },
];

export default function CodingJourneyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16">
          <p className="mb-3 text-sm text-muted-foreground">
            MY JOURNEY
          </p>

          <h1 className="text-5xl font-bold">
            Coding Journey
          </h1>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            From my first lines of code to 450+ problems solved.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl border p-6">
            <p className="text-3xl font-bold">450+</p>
            <p className="mt-2 text-sm text-muted-foreground">
              DSA Problems
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="text-3xl font-bold">240</p>
            <p className="mt-2 text-sm text-muted-foreground">
              LeetCode Solved
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="text-3xl font-bold">280</p>
            <p className="mt-2 text-sm text-muted-foreground">
              GFG Solved
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="text-3xl font-bold">62</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Max Streak
            </p>
          </div>
        </div>

        <div className="mb-16 flex gap-3">
          <a
            href="https://leetcode.com/u/salvatore007/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-3 text-sm"
          >
            View LeetCode →
          </a>

          <a
            href="https://github.com/Tanmaysriv"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-3 text-sm"
          >
            View GitHub →
          </a>
        </div>

        <div className="relative border-l pl-8">
          {journey.map((item, index) => (
            <div key={index} className="relative mb-16">

              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />

              <p className="text-sm font-medium text-primary">
                {item.year}
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}