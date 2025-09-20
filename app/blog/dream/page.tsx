import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DreamDiariesPage() {
  // Sample dream diary entries
  const dreamDiaries = [
    {
      id: 1,
      title: "From Hunter Elites to Vipers: My Journey",
      author: "Wilfred Oko Sackey, Height: 6'4\"",
      date: "September 20, 2025",
      excerpt:
        "When I first came to Gbawe Academy, I was scared to even shoot the ball. Now I'm a starting guard for the Vipers team.",
      content: `
        Dear Dream Diary,
        
        My name is Wilfred Oko Sackey, and I'm 19 years old. I've been at Gbawe Basketball Academy for almost six years now, and I can't believe how far I've come. When I first came here as a 13-year-old, I was so scared. I was scared of the ball, scared of the other kids, scared of making mistakes. I would pass the ball as soon as I got it, even if I was wide open. I didn't want anyone to see me miss.
        
        Coach David noticed this and started working with me after practice. He told me something I'll never forget: "The only shots you're guaranteed to miss are the ones you don't take." He made me shoot 50 shots every day after practice, and he wouldn't let me leave until I finished. At first, I missed a lot, and I felt embarrassed. But Coach David never got mad or disappointed. He just helped me fix my form and encouraged me to keep shooting.
        
        Slowly, I started making more shots. And the more shots I made in practice, the more confident I felt in games. I started taking open shots when my teammates passed to me. Sometimes they went in, sometimes they didn't, but my teammates always high-fived me and told me to keep shooting.
        
        Last year, something amazing happened. After graduating from the Hunter Elites program, I was selected to join the Vipers team - our senior team that competes in Accra Division 2. When Coach David called my name during team selection, I almost couldn't believe it. I was going to be playing with the best players in our academy, wearing jersey number 15, and representing Gbawe at the highest level.
        
        My first game with the Vipers was against the Tema Warriors. I was nervous, but when I looked at my teammates - Emmanuel, William, Jeffery, Clement - they all nodded like they believed in me. I came off the bench and scored 12 points in my debut, including a crucial three-pointer in the fourth quarter that helped us secure the win.
        
        That moment changed everything for me. Now I'm a regular contributor for the Vipers, and Coach says if I keep working hard, I could even get looks from college scouts. But the best part isn't the points or the wins—it's knowing that I conquered my fear and made it to the top level of our academy.
        
        My dream is to play for the Ghana national team someday and maybe even get a college scholarship. I know that's a big dream, but Coach David says big dreams are good because they make you work harder. So every day, I'm working on my game, getting stronger, and building my confidence.
        
        To any young player who's scared like I was: don't be afraid to shoot your shot—in basketball and in life. You might miss sometimes, but you'll make more than you think, and each shot makes you stronger. The journey from Hunter Cubs to Vipers is possible if you believe in yourself and work hard.
        
        - Wilfred
      `,
      image: "/oko.jpg?height=400&width=600&query=young+basketball+player+confidence",
      category: "Personal Growth",
    },
    {
      id: 2,
      title: "Leading the Vipers to Victory",
      author: "Emmanuel Basepoaw, Height: 6'1\"",
      date: "September 20, 2025",
      excerpt:
        "As a combo guard for the Vipers, I never thought I'd be the one leading our team to championship glory. The feeling of lifting that trophy was something I'll never forget.",
      content: `
        Dear Dream Diary,
        
        Last weekend was the most exciting weekend of my life! After two years with the Vipers team, I found myself in a position I never expected - leading our team as the starting combo guard in the Accra Division 2 Championship Finals. When Coach David called my name during the starting lineup announcement, I felt a mix of excitement and responsibility that I'd never experienced before.
        
        The championship game was held at the National Sports Stadium, which is so much bigger than our academy court. When we walked in for the final game, my legs were shaking, but not from fear - from anticipation. There were actual spectators in the stands—parents, other teams, scouts, and even some college coaches. The court seemed enormous, and the stakes felt even bigger.
        
        Our opponents were the defending champions, the Tema Warriors, one of the most respected teams in the division. During player introductions, when they called "Starting at guard, number 5, Emmanuel Basepoaw from Gbawe Academy Vipers," I felt like I was floating. My family was in the stands, cheering louder than anyone. My little brother had made a sign with my name and number.
        
        The game itself was intense from start to finish. I remember making my first basket—a three-pointer from the corner—and hearing the crowd erupt. I remember Coach David's voice guiding us through our plays and encouraging us when we made mistakes. I remember the exhaustion in the fourth quarter, my lungs burning but refusing to ask for a substitution because I wanted to lead my team to victory.
        
        With 30 seconds left, we were down by 2 points. Coach called a timeout and drew up a play for me to take the final shot. I was nervous, but when I looked at my teammates - William, Jeffery, Clement, Samuel - they all nodded like they believed in me. I came off a screen, caught the pass, and found myself open at the three-point line. Without thinking, I shot the ball just like I had practiced thousands of times. The ball went through the net with a perfect swish! We won the championship!
        
        The feeling of winning the championship, huddling with my teammates afterward, all of us jumping and celebrating—it was better than any birthday or holiday. When they handed me the championship trophy, I couldn't believe that I, Emmanuel Basepoaw, was holding it as the leader of the Vipers.
        
        On the bus ride home, Coach David sat next to me and asked about my experience. I told him it was the best weekend ever. He smiled and said, "This is just the beginning, Emmanuel. Keep working, and there will be many more championships, bigger stages, and brighter lights in your future."
        
        My dream is to play basketball at the university level and maybe even professionally someday. Before this championship, that dream felt distant and maybe impossible. Now it feels like a path I'm already walking on. Each practice, each drill, each game is a step on that path.
        
        I can't wait to see where basketball takes me next.
        
        - Emmanuel
      `,
      image: "/amb.jpg?height=400&width=600&query=basketball+player+championship",
      category: "Tournaments",
    },
    {
      id: 3,
      title: "Dreams of College Basketball",
      author: "Jeffery Nana Sey, Height: 6'5\"",
      date: "September 20, 2025",
      excerpt:
        "Coach David says I have what it takes to play college basketball in America. As a Vipers combo guard, I'm working every day to make that happen.",
      content: `
        Dear Dream Diary,
        
        Something happened last week that I still can't believe. After practice, Coach David asked me to stay behind for a talk. My heart immediately started racing—was I in trouble? Did I do something wrong during practice? Instead, he sat me down and said words I'll never forget: "Jeffery, I believe you have what it takes to play college basketball in America."
        
        At first, I thought he was joking. Me? A kid from Gbawe, playing basketball in America? But Coach David was serious. He explained that he's been in contact with some of his connections—former teammates and coaches who now work with college programs in the U.S. He showed me videos of college games, the massive arenas filled with thousands of fans, the high level of play, the opportunities for education alongside basketball.
        
        Coach David said my combination of size (I'm 6'5" at 20 years old), athleticism, and work ethic makes me the type of prospect that American colleges look for. As a combo guard for the Vipers, I've already proven I can compete at a high level in Accra Division 2. But he was also honest about the challenges. My academics need to improve. My game needs to become more polished. And the competition for these opportunities is fierce—players from all over the world are fighting for the same scholarships.
        
        Since that conversation, I've been on fire with determination. I've started waking up at 5 AM to work on my game before school. I've asked my teachers for extra assignments to improve my grades. I've been watching college basketball games on YouTube whenever I can get internet access, studying the players, the systems, the level of play I need to reach.
        
        My parents were shocked when I told them about Coach David's assessment. We've never had anyone in our family travel outside Ghana, let alone go to university in America. My father was concerned about me being so far from home, but my mother immediately saw the opportunity—not just for basketball, but for education and a future beyond what might be possible here.
        
        Coach David has outlined a two-year plan to get me ready. He's increasing my training load, arranging for me to play with the senior Vipers team more often to face stronger competition, and working on getting me into international tournaments where I might be seen by college scouts. He's also connecting me with tutors to improve my English and prepare for the standardized tests I'll need to take.
        
        The path ahead is long and uncertain. Coach David made no promises—he said this is a possibility, not a guarantee. But for the first time, my dream of using basketball to create opportunities for myself and my family feels tangible, like something I can actually reach if I work hard enough.
        
        Every time I step on the court now, I imagine myself wearing a college jersey, playing in those huge arenas, earning a degree while playing the game I love. That vision pushes me through the exhaustion, through the drills, through the study sessions.
        
        My dream is no longer just a dream—it's becoming a plan. And I'm going to do everything in my power to make it happen.
        
        - Jeffery
      `,
      image: "/sey.jpg?height=400&width=600&query=tall+basketball+player+prospect",
      category: "College Aspirations",
    },
    {
      id: 4,
      title: "Learning to Lead the Vipers",
      author: "William Agyapong Ntiamoah, Height: 6'3\"",
      date: "September 20, 2025",
      excerpt:
        "Being named assistant captain of the Vipers was an honor, but I quickly learned that leadership is about much more than wearing a 'C' on my jersey.",
      content: `
        Dear Dream Diary,
        
        Three months ago, Coach David gathered our Vipers team and announced that I would be the assistant captain for the season. I was shocked and honored—and completely unprepared for what that responsibility would actually mean.
        
        I thought being captain was about leading warm-ups, speaking to referees, and maybe giving pep talks before games. I quickly learned it's so much more. After our first game—a disappointing loss where our team seemed disorganized and unmotivated—Coach David pulled me aside. "William," he said, "a title doesn't make you a leader. Your actions do."
        
        That conversation was the beginning of my real education in leadership. Coach David began meeting with me weekly to discuss the team, our dynamics, and my role in bringing out the best in my teammates. He taught me that different players need different types of leadership:
        
        - Wilfred, our youngest player, needs encouragement and confidence-building
        - Emmanuel, our team captain and most talented scorer, needs to be challenged and held accountable
        - Clement, who struggles with his temper, needs calm guidance during tense moments
        
        I started paying attention to these differences and adjusting my approach with each teammate. I began arriving early to practice to help set up and staying late to work with teammates who wanted extra reps. I made sure to check in with everyone, not just my close friends on the team.
        
        The hardest lesson came after a practice where I lost my cool and yelled at a teammate for taking bad shots. Coach David didn't say anything during practice, but afterward, he asked me a simple question: "Did that help the team?" It hadn't. The teammate had shut down for the rest of practice, and other teammates seemed tense and hesitant. Coach explained that as assistant captain, my emotions set the tone for everyone else. If I lose control, the team loses stability.
        
        Slowly, I've been growing into this role. Our team communication has improved. We've won three of our last four games. Players are starting to come to me with concerns or ideas before taking them to Coach. Yesterday, Wilfred told me that my belief in him has helped him play with more confidence.
        
        There are still difficult moments. Last week, I had to have a tough conversation with my friend Clement about his commitment to practice. I've had to learn to balance friendship with leadership, to give criticism without creating resentment, to push teammates without breaking their spirit.
        
        My dream has always been to play professionally someday, but now I'm developing a second dream: to be the kind of leader who brings out the best in others, who helps create something greater than what any of us could achieve alone. Coach David says the leadership skills I'm learning now will serve me throughout my life, whether in basketball or beyond.
        
        I'm still learning, still making mistakes, still growing into this role. But when I look at how far our team has come—not just in our record but in how we support each other, how we respond to adversity, how we function as a unit—I feel a different kind of pride than what comes from individual achievement. And that feeling is becoming as addictive as the thrill of making a game-winning shot.
        
        - William
      `,
      image: "/wil.jpg?height=400&width=600&query=young+basketball+team+captain",
      category: "Leadership",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-96 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/curr.jpg?height=600&width=1920&query=children+basketball+dreams"
            alt="Children with basketball dreams"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Dream Diaries</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Follow the journeys of our young dreamers as they pursue their basketball aspirations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">From First Dribble to First Dunk</h2>
            <p className="text-lg text-gray-700 mb-6">
              Every great journey begins with a dream. In this section, our young athletes share their personal stories,
              challenges, triumphs, and aspirations. These authentic voices remind us why we do what we do at Gbawe
              Basketball Academy—to nurture not just basketball skills, but dreams, character, and futures.
            </p>
          </div>
        </div>
      </section>

      {/* Dream Diaries Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dreamDiaries.map((diary) => (
              <div key={diary.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={diary.image || "/placeholder.svg"}
                    alt={diary.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-600 font-medium">{diary.author}</span>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{diary.title}</h3>
                  <p className="text-gray-600 mb-4">{diary.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{diary.date}</span>
                    <Link href={`/blog/dream/${diary.id}`} className="text-amber-600 hover:text-amber-700 font-medium">
                      Read full diary →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Dream */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Share Your Dream</h2>
                <p className="text-gray-700 mb-6">
                  Every great journey begins with a dream. If you&apos;re a young player with big dreams, we want to
                  hear from you. Share your basketball dreams and inspire others.
                </p>
                <p className="text-gray-700 mb-6">
                  Your story could be featured in our Dream Diaries section, encouraging other young players to pursue
                  their own basketball aspirations. Tell us about your goals, your challenges, your inspirations, and
                  your journey so far.
                </p>
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                  <Link href="/blog/dream/submit">Share Your Dream</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=child+basketball+dream"
                  alt="Young basketball player dreaming big"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach's Message */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">A Message from Coach Kenneth Akpah</h2>
            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                  <Image
                    src="/ac.jpg?height=200&width=200&query=basketball+youth+coach"
                    alt="Coach Kenneth Akpah"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">Coach Kenneth Akpah</h3>
                  <p className="text-amber-600">Head Girls Coach</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Dreams are the seeds of achievement. At Gbawe Basketball Academy, we don't just teach basketball
                skills—we nurture dreams. Every professional player, every college athlete, every successful coach once
                started as a young person with a dream. The path from dream to reality is paved with hard work,
                perseverance, and guidance. That's what we provide here: the environment, the coaching, and the support
                to help young dreamers transform their aspirations into achievements. Whether your dream is to play
                professionally, earn a college scholarship, or simply become the best player you can be, we're here to
                help you on that journey."
              </blockquote>
              <p className="text-gray-700">
                If you have a young dreamer in your life who loves basketball, we invite you to learn more about our
                youth programs and how we can help nurture their passion and potential.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                  <Link href="/programs#youth">Learn About Youth Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
