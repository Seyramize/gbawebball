import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"

export default function CoachCornerPage() {
  // Sample coach's corner posts
  const posts = [
    {
      id: 1,
      title: "Defensive Principles: The Hunter's Approach",
      coach: "Coach David Nuertey Tetteh",
      date: "September 20, 2025",
      description: "Breaking down our defensive philosophy and key principles that make our defense elite.",
      content: `
        Defense is the foundation of our program at Gbawe Basketball Academy. While offensive skills often get the spotlight, 
        it's our commitment to defense that has led to our success over the years.
        
        Our defensive philosophy is built on five key principles:
        
        1. **Pressure the Ball** - We believe in making every dribble, every pass, and every shot difficult for our opponents. 
        This starts with relentless on-ball pressure.
        
        2. **Help and Recover** - Basketball is a team game, and our defense reflects that. We teach our players to help 
        their teammates while maintaining the ability to recover to their own assignments.
        
        3. **Deny the Next Pass** - By denying the next logical pass, we disrupt offensive flow and force teams into 
        uncomfortable situations.
        
        4. **Box Out and Rebound** - A defensive possession isn't complete until we secure the rebound. Every player, 
        regardless of position, is expected to box out and contribute to our rebounding efforts.
        
        5. **Communicate** - Perhaps the most important principle is communication. Our players are constantly talking, 
        calling out screens, switches, and rotations.
        
        In practice, we dedicate significant time to defensive drills that reinforce these principles. Our shell drill, 
        which you can see in the video, is a staple of our training regimen. It teaches players proper positioning, 
        rotations, and help defense concepts in a controlled environment.
        
        We also emphasize individual defensive techniques such as proper stance, footwork, and hand positioning. These 
        fundamentals, when mastered, allow our players to execute our defensive system effectively.
        
        Remember, great defense isn't just about physical ability—it's about effort, intelligence, and teamwork. When 
        our players commit to our defensive principles, they become part of something greater than themselves: a defensive 
        unit that moves, thinks, and reacts as one.
      `,
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      thumbnailUrl: "/images/gbawe-logo.png?height=600&width=800&query=basketball+defense+drill",
      category: "Defense",
    },
    {
      id: 2,
      title: "Building Basketball IQ: Reading the Game",
      coach: "Coach Kenneth Akpah",
      date: "September 20, 2025",
      description: "How we develop decision-making skills and game intelligence in our players.",
      content: `
        Basketball IQ is often discussed but rarely taught systematically. At Gbawe Basketball Academy, we believe that 
        game intelligence can be developed through deliberate practice and guided experience.
        
        What exactly is basketball IQ? It's the ability to read the game, make quick decisions, and execute the right 
        play at the right time. It's knowing when to shoot, when to pass, when to drive, and when to pull back. It's 
        understanding spacing, timing, and game situations.
        
        Here's how we develop basketball IQ in our players:
        
        1. **Film Study** - We regularly review game footage with our players, breaking down decisions and discussing 
        alternatives. This helps players see the game from a different perspective and understand the consequences of 
        various choices.
        
        2. **Decision-Making Drills** - We use specific drills designed to put players in decision-making situations. 
        For example, our 3-on-2, 2-on-1 continuous drill forces players to make quick decisions in transition situations.
        
        3. **Conceptual Teaching** - Rather than just teaching set plays, we teach concepts and principles. This allows 
        players to adapt to different situations rather than following rigid patterns.
        
        4. **Questioning Approach** - Instead of always telling players what to do, we often ask questions: "What did you 
        see there?" "What other options did you have?" "Why did you make that decision?" This encourages players to think 
        critically about their choices.
        
        5. **Game Simulations** - We create game-like situations in practice, complete with score, time, and specific 
        scenarios. This helps players understand situational basketball and develop a feel for game management.
        
        One of my favorite exercises is what we call "Pause and Process." During scrimmages, coaches occasionally blow 
        the whistle to freeze the action. Players must then verbalize what they see, what options they have, and what 
        decision they would make. This develops the habit of constantly reading the game.
        
        Remember, basketball IQ isn't about being the smartest person off the court—it's about making smart decisions on 
        the court. With deliberate practice and proper guidance, every player can improve their basketball intelligence.
      `,
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      thumbnailUrl: "/images/gbawe-logo.png?height=600&width=800&query=basketball+coach+teaching",
      category: "Player Development",
    },
    {
      id: 3,
      title: "Developing Elite Shooters: The Gbawe Method",
      coach: "Coach Nelly Nana Akosua Antwiwaa Antwi",
      date: "September 20, 2025",
      description: "Our systematic approach to developing consistent, confident shooters at all levels.",
      content: `
        Shooting is both an art and a science. At Gbawe Basketball Academy, we've developed a comprehensive approach to 
        shooting development that has produced some of the best shooters in the region.
        
        Our shooting philosophy is built on three pillars:
        
        1. **Perfect Technique** - We break down the shooting motion into its component parts: stance, grip, alignment, 
        balance, rhythm, release, and follow-through. Each element is taught, practiced, and refined until it becomes 
        second nature.
        
        2. **Consistent Repetition** - Great shooters are made through thousands of quality repetitions. We emphasize 
        quality over quantity, ensuring that each shot reinforces proper technique.
        
        3. **Game-Like Conditions** - Shooting in an empty gym is different from shooting in a game. We progressively 
        add game-like elements to our shooting drills: fatigue, defensive pressure, time constraints, and mental distractions.
        
        Our shooting development program is tailored to each player's age, physical development, and skill level. For 
        younger players, we focus on proper technique using appropriately sized balls and lower hoops if necessary. As 
        players develop, we increase the challenge and complexity of our shooting drills.
        
        One of our signature drills is the "Gbawe 100," where players must make 100 shots from various spots on the court, 
        with specific criteria for form and efficiency. This drill builds not only shooting skill but also mental toughness 
        and concentration.
        
        We also emphasize the mental aspects of shooting: confidence, focus, and routine. Each player develops a pre-shot 
        routine that serves as both a technical checklist and a mental reset button.
        
        Remember, great shooters aren't born—they're developed through proper instruction, deliberate practice, and 
        unwavering confidence. With the right approach, any player can become an effective shooter.
      `,
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      thumbnailUrl: "/images/gbawe-logo.png?height=600&width=800&query=basketball+shooting+form",
      category: "Shooting",
    },
    {
      id: 4,
      title: "Building Team Chemistry: Beyond X's and O's",
      coach: "Coach Kenneth Akpah",
      date: "September 20, 2025",
      description: "How we foster strong relationships and team unity that translates to success on the court.",
      content: `
        Basketball is a team sport, and the strength of those team bonds often determines success more than individual 
        talent. At Gbawe Basketball Academy, we intentionally build team chemistry through various methods and activities.
        
        Team chemistry isn't something that happens by accident—it's cultivated through shared experiences, mutual respect, 
        and a common purpose. Here's how we develop it:
        
        1. **Shared Hardship** - Our preseason conditioning program is intentionally challenging. When players push through 
        difficult workouts together, they develop a special bond. There's something powerful about knowing your teammates 
        have endured the same struggles.
        
        2. **Team Building Activities** - We regularly organize activities outside of basketball: community service projects, 
        team meals, movie nights, and other events that allow players to connect as people, not just teammates.
        
        3. **Leadership Development** - We identify and develop leaders within our teams. These players help establish team 
        culture and hold others accountable to our standards.
        
        4. **Clear Roles and Expectations** - Every player needs to understand and embrace their role. We have honest 
        conversations about how each player can best contribute to team success.
        
        5. **Celebrating Each Other's Success** - We emphasize the importance of genuinely celebrating teammates' accomplishments. 
        This creates a culture where players want each other to succeed.
        
        One of our favorite team-building exercises is what we call "Beyond the Ball." In this activity, players share 
        something about themselves that has nothing to do with basketball. This helps teammates see each other as complete 
        people with diverse interests, backgrounds, and experiences.
        
        We also use a "Teammate of the Week" program, where players nominate teammates who exemplified our values during 
        the week. This reinforces positive behaviors and helps players recognize each other's contributions.
        
        Remember, team chemistry isn't just about liking each other—it's about trusting each other, communicating effectively, 
        and being willing to sacrifice for the good of the team. When these elements are present, magic happens on the court.
      `,
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      thumbnailUrl: "/images/gbawe-logo.png?height=600&width=800&query=basketball+team+huddle",
      category: "Team Building",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-96 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/both.jpg?height=600&width=1920&query=basketball+coach+teaching"
            alt="Basketball coach teaching"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Coach&apos;s Corner</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Insights, strategies, and wisdom from our coaching staff
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Featured Post</h2>
          <div className="max-w-5xl mx-auto bg-amber-50 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-video relative">
              <VideoPlayer videoUrl={posts[0].videoUrl} thumbnailUrl={posts[0].thumbnailUrl} title={posts[0].title} />
            </div>
            <div className="p-6">
              <span className="text-sm text-amber-600 font-medium">{posts[0].coach}</span>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold text-amber-900">{posts[0].title}</h3>
                <span className="text-sm text-gray-500">{posts[0].date}</span>
              </div>
              <p className="text-gray-700 mb-4">{posts[0].description}</p>
              <div className="flex justify-between items-center">
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {posts[0].category}
                </span>
                <Link href={`/blog/coach/${posts[0].id}`} className="text-amber-600 hover:text-amber-700 font-medium">
                  Read full breakdown →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">All Posts</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={post.thumbnailUrl || "/images/gbawe-logo.png"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white opacity-80"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-600 font-medium">{post.coach}</span>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{post.title}</h3>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <Link href={`/blog/coach/${post.id}`} className="text-amber-600 hover:text-amber-700 font-medium">
                      Read full breakdown →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drill of the Week */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Drill of the Week</h2>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Defensive Shell Drill</h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Coach David Nuertey Tetteh breaks down our signature defensive shell drill that builds communication, rotation,
                    and help defense principles.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Develops proper defensive stance and positioning</strong>
                    </li>
                    <li>
                      <strong>Teaches communication and team defense concepts</strong>
                    </li>
                    <li>
                      <strong>Builds defensive rotations and help principles</strong>
                    </li>
                    <li>
                      <strong>Simulates game-like defensive scenarios</strong>
                    </li>
                  </ul>
                  {/* <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Download Drill Sheet</Button> */}
                </div>
                <div className="aspect-video relative">
                  <VideoPlayer
                    videoUrl="https://www.youtube.com/@GbaweBasketballAcademy"
                    thumbnailUrl="/images/gbawe-logo.png?height=400&width=600&query=basketball+defensive+drill"
                    title="Defensive Shell Drill Demonstration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ask a Coach */}
      {/* <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Have a Question for Our Coaches?</h2>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Submit your basketball questions and our coaches will answer them in upcoming posts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                Ask a Question
              </Button>
            </Link>
            <Link href="/team#coaches" passHref>
              <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-100">
                Meet Our Coaches
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}
