import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JournalPage() {
  // Sample journal entries
  const journalEntries = [
    {
      id: 1,
      title: "The Mental Game: Preparing for Pressure",
      author: "Clement Nana Osei Dodoo, Vipers Combo Guard",
      date: "September 20, 2025",
      excerpt: "How I prepare mentally for big games and high-pressure moments on the court as a Vipers player.",
      content: `
        Basketball is as much a mental game as it is physical. As a combo guard for the Vipers, I've learned that mental preparation 
        is often what separates good players from great ones, especially in high-pressure situations in Accra Division 2.
        
        My mental preparation begins long before game day. During practice, I intentionally put myself in pressure 
        situations. I'll ask Coach David to set up scenarios where I need to make a free throw to "win" the scrimmage, 
        or where our team needs to execute a play perfectly with only seconds remaining. By simulating pressure in 
        practice, the real thing becomes more manageable.
        
        The night before a big game, I have a specific routine. I visualize different game scenarios, imagining myself 
        making the right decisions and executing successfully. I see the ball going through the hoop, I feel the perfect 
        pass leaving my fingertips, I hear the communication with my teammates. This visualization creates a mental 
        blueprint that my body can follow during the actual game.
        
        On game day, I focus on controlling what I can control. I can't control the referees, the crowd, or even whether 
        every shot goes in. But I can control my effort, my attitude, and my response to adversity. This perspective 
        takes some of the pressure off and allows me to play freely.
        
        I also rely heavily on my pre-game routine. The consistency of this routine—from the music I listen to, to the 
        stretches I do, to the prayers I say—helps center me and signals to my body and mind that it's time to perform.
        
        During the game, especially in crucial moments, I use deep breathing to stay calm. Three deep breaths can make 
        a world of difference when the pressure is mounting. I also have a mantra that I repeat to myself: "Present and 
        poised." This reminds me to stay in the moment and maintain my composure regardless of the situation.
        
        Perhaps most importantly, I've learned to embrace pressure rather than fear it. Pressure situations are opportunities 
        to prove yourself, to help your team, to create memories. When you reframe pressure as opportunity, it becomes 
        something to welcome rather than avoid.
        
        To the young players reading this: developing mental toughness takes time and intentional practice, just like 
        developing your jump shot or ball-handling. Start small, put yourself in uncomfortable situations during practice, 
        and gradually build your capacity to perform under pressure. The mental game might not show up on the stat sheet, 
        but it's often what determines the outcome when the game is on the line.
      `,
      image: "/cle.jpg?height=600&width=800&query=basketball+player+focus",
      category: "Mental Preparation",
    },
    {
      id: 2,
      title: "My Journey: From Hunter Cub to Viper",
      author: "Samuel Akakpo, Vipers Small Forward",
      date: "September 20, 2025",
      excerpt: "Reflecting on my 10-year journey through the Gbawe Academy system and the lessons learned as a Vipers player.",
      content: `
        Ten years ago, I walked into Gbawe Basketball Academy as a skinny, uncoordinated 8-year-old who had barely 
        touched a basketball. Today, I'm a starting small forward for the Vipers, our senior team competing in Accra Division 2. The journey between 
        those two points has been filled with challenges, growth, and countless lessons that extend far beyond the basketball court.
        
        I still remember my first day as a Hunter Cub. I couldn't make a layup, couldn't dribble with my left hand, and 
        was terrified of the older kids. Coach David saw something in me though—not skill, certainly, but perhaps 
        determination. He took me under his wing and patiently taught me the fundamentals of the game.
        
        Progress was slow at first. While some kids seemed naturally gifted, I had to work twice as hard for every small 
        improvement. There were many days when I wanted to quit, when the gap between where I was and where I wanted to 
        be seemed impossibly wide. But my parents and coaches encouraged me to persist, to focus on my own journey rather 
        than comparing myself to others.
        
        By age 12, I had developed into a solid player and moved up to the Hunter Apprentices. This is where my love for 
        the game really blossomed. Coach Kenneth pushed us hard but also made the game fun. He helped me understand the 
        strategic aspects of basketball and find my identity as a player. I wasn't the fastest or the most skilled, but 
        I was tough, smart, and willing to do the unglamorous work that helps teams win.
        
        The transition to Hunter Elites at age 15 was a wake-up call. Suddenly, I was competing against bigger, stronger, 
        more experienced players. I struggled initially, often finding myself on the bench. This was perhaps the most 
        valuable period of my development—learning to contribute in limited minutes, to stay ready, to support my teammates 
        even when I wasn't on the court.
        
        Coach David taught me that basketball is a game of roles, and that embracing your role, whatever it may be, is 
        the mark of a true player. I embraced my role as an energy player, a rebounder, a defender. Gradually, my role 
        expanded as my skills improved.
        
        Making the Vipers last year was the realization of a dream I've had since I first picked up a basketball. But I 
        know this isn't the end of the journey—it's just another step. Now I have new goals, new challenges, new aspects 
        of my game to develop.
        
        To the young players just starting their journey: trust the process. There will be setbacks, frustrations, and 
        moments of doubt. But if you stay committed to improvement and open to coaching, you'll look back years from now 
        and be amazed at how far you've come. The journey itself—the daily grind, the relationships built, the obstacles 
        overcome—is where the real value lies.
      `,
      image: "/osko.jpg?height=600&width=800&query=basketball+player+journey",
      category: "Player Journey",
    },
    {
      id: 3,
      title: "Finding My Role: The Power of Acceptance",
      author: "Wisdom Emmanuel Oyedeji, Vipers Forward",
      date: "September 20, 2025",
      excerpt:
        "How I learned to embrace my role as a defensive specialist and found joy in contributing to Vipers team success.",
      content: `
        Growing up, every young basketball player dreams of being the star—the one taking the last shot, leading the team 
        in scoring, making the highlight plays. I was no different. When I joined Gbawe Academy, I envisioned myself as 
        the next great scorer, the player fans would come to see.
        
        Reality had different plans. Despite my best efforts and countless hours in the gym, I never developed into the 
        offensive threat I aspired to be. My shooting was inconsistent, my ball-handling merely adequate. For a while, 
        this was a source of frustration and disappointment. I felt like I was failing to reach my potential.
        
        The turning point came during my second year with Hunter Elites. Coach David called me into his office for a 
        conversation that would change my perspective entirely. Instead of focusing on my offensive limitations, he 
        highlighted my defensive abilities—my lateral quickness, my anticipation, my tenacity, my willingness to take on the toughest assignments. He explained that every championship team needs defensive specialists, players who take pride in stopping the opponent's best scorer.
        
        At first, I was resistant. Defense doesn't get the glory. Nobody puts defensive highlights on Instagram. But Coach David challenged me to redefine success on my own terms rather than society's. He introduced me to film of great defensive players who changed games without scoring—players like Dennis Rodman, Tony Allen, and Draymond Green.
        
        Gradually, I began to embrace this new identity. I set goals related to defensive metrics: deflections, steals, contested shots, charges taken. I studied offensive players' tendencies and developed strategies to disrupt them. I took pride in assignments that others avoided.
        
        A beautiful thing happens when you fully accept your role: you stop fighting against yourself. The energy I had been using to lament my offensive limitations was now channeled into maximizing my defensive impact. And ironically, once I stopped forcing my offense, my shooting percentages improved and I found ways to contribute offensively within the flow of the game.
        
        The ultimate validation came last season when we faced the top-ranked team in Accra Division 2. Their star player, who had been averaging 25 points per game, managed just 11 points on 4-of-17 shooting with me guarding him. We won by 3 points. After the game, several teammates told me I was the reason we won, despite my modest stat line of 6 points.
        
        That moment crystallized what I had come to understand: impact isn't always measured in points. Value isn't always visible in traditional statistics. There are many ways to help a team win, and the willingness to embrace a role that others might shun is itself a form of leadership.
        
        To players struggling to find their place: your path might not be what you envisioned, but that doesn't mean it can't be meaningful and fulfilling. Identify what you do well, commit to excellence in those areas, and trust that your contributions matter—even if they don't always make the highlight reel.
      `,
      image: "/ss1.jpg?height=600&width=800&query=basketball+defense+specialist",
      category: "Player Development",
    },
    {
      id: 4,
      title: "Basketball and Academics: My Balancing Act",
      author: "Derek Ameti, Vipers Center",
      date: "September 20, 2025",
      excerpt:
        "How I manage to excel both on the court and in the classroom as a Vipers player, and why I believe both are equally important.",
      content: `
        The alarm goes off at 5:00 AM. By 5:30, I'm in the gym putting up shots before school. Classes from 8:00 AM to 3:00 PM. Team practice from 4:00 to 6:30 PM. Dinner, then homework until 10:00 PM. Repeat.
        
        This has been my schedule for the past three years as I've pursued excellence both as a basketball player and as a student. It's not easy, but I've come to believe that my development in both areas is interconnected—the discipline, time management, and growth mindset required for one directly benefits the other.
        
        Many young players see academics and athletics as competing priorities. I used to think this way too. But Coach David and my parents helped me understand that education isn't just a backup plan—it's a parallel path that makes me a better athlete and a more complete person.
        
        Basketball has a finite timeline. Even for those lucky enough to play professionally, careers typically last only a decade or so. Education is forever. The knowledge, critical thinking skills, and credentials you gain through academics will serve you long after your playing days are over.
        
        But beyond the practical benefits, I've found that being a serious student makes me a better basketball player in several ways:
        
        1. **Analytical Thinking** - The same skills I use to analyze literature or solve math problems help me read defenses and understand game strategy.
        
        2. **Discipline and Time Management** - With limited hours in the day, I've had to become extremely efficient with my time. This discipline translates to focused, efficient workouts and practice sessions.
        
        3. **Growth Mindset** - In both academics and athletics, progress comes through embracing challenges and learning from failures. This mindset has helped me bounce back from both poor test scores and poor shooting nights.
        
        4. **Balance** - Having multiple areas of focus in my life means I don't put excessive pressure on myself in either domain. A bad game doesn't ruin my week because I have academic goals to pursue, and vice versa.
        
        My approach to balancing these demands is built on a few key principles:
        
        - **Prioritization** - I constantly evaluate what needs my attention most urgently and allocate my time accordingly.
        
        - **Efficiency** - I maximize small pockets of time throughout the day. Bus rides are for reviewing notes, breaks between classes might be for stretching or visualization.
        
        - **Communication** - I maintain open communication with both my teachers and coaches about my commitments and occasionally need to make adjustments.
        
        - **Self-care** - I protect my sleep and build in small windows for recovery and relaxation to prevent burnout.
        
        Currently, I'm maintaining a 3.8 GPA while contributing significantly to our Vipers team in Accra Division 2. I've received interest from several universities that would allow me to continue both my academic and athletic pursuits. This balance didn't happen by accident—it required intentional planning, support from mentors, and daily discipline.
        
        To young players: don't fall into the trap of thinking you must choose between academics and athletics. With the right approach, each can enhance the other. The same character traits that make great students—discipline, focus, resilience, curiosity—also make great athletes. Pursue excellence in both arenas, and you'll be prepared for success regardless of where your basketball journey leads.
      `,
      image: "/1.jpg?height=600&width=800&query=student+athlete+studying",
      category: "Student-Athlete Life",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=basketball+player+writing"
            alt="Basketball player writing"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Hunter&apos;s Journal</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Personal stories, reflections, and insights from our players
          </p>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            {journalEntries.map((entry, index) => (
              <div key={entry.id} className={`mb-16 ${index !== 0 && "pt-16 border-t border-gray-200"}`}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src={entry.image || "/placeholder.svg"}
                        alt={entry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm text-amber-600 font-medium">{entry.author}</span>
                    <div className="flex justify-between items-center mb-3">
                      <h2 className="text-2xl font-bold text-amber-900">{entry.title}</h2>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <div className="prose prose-amber max-w-none mb-4">
                      <p className="text-gray-700">{entry.excerpt}</p>
                      <p className="text-gray-700">{entry.content.split("\n\n")[0]}...</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {entry.category}
                      </span>
                      <Link
                        href={`/blog/journal/${entry.id}`}
                        className="text-amber-600 hover:text-amber-700 font-medium"
                      >
                        Read full story →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Submit Your Story</h2>
            <p className="mb-8 text-lg text-gray-600">
              Are you a Hunter with a story to tell? We want to hear about your journey, your challenges, your
              victories, and your dreams. Share your experience with the Hunter community.
            </p>
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
              <Link href="/blog/submit">Submit Your Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
