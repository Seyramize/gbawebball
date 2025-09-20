import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const dreamDiaries = [
  {
    id: 1,
    title: "From Hunter Elites to Vipers: My Journey",
    author: "Wilfred Oko Sackey, Height: 6'4\"",
    date: "September 20, 2025",
    excerpt: "When I first came to Gbawe Academy, I was scared to even shoot the ball. Now I'm a starting guard for the Vipers team.",
    content: "Dear Dream Diary,\n\nMy name is Wilfred Oko Sackey, and I'm 19 years old. I've been at Gbawe Basketball Academy for almost six years now, and I can't believe how far I've come. When I first came here as a 13-year-old, I was so scared. I was scared of the ball, scared of the other kids, scared of making mistakes. I would pass the ball as soon as I got it, even if I was wide open. I didn't want anyone to see me miss.\n\nCoach David noticed this and started working with me after practice. He told me something I'll never forget: 'The only shots you're guaranteed to miss are the ones you don't take.' He made me shoot 50 shots every day after practice, and he wouldn't let me leave until I finished. At first, I missed a lot, and I felt embarrassed. But Coach David never got mad or disappointed. He just helped me fix my form and encouraged me to keep shooting.\n\nSlowly, I started making more shots. And the more shots I made in practice, the more confident I felt in games. I started taking open shots when my teammates passed to me. Sometimes they went in, sometimes they didn't, but my teammates always high-fived me and told me to keep shooting.\n\nLast year, something amazing happened. After graduating from the Hunter Elites program, I was selected to join the Vipers team - our senior team that competes in Accra Division 2. When Coach David called my name during team selection, I almost couldn't believe it. I was going to be playing with the best players in our academy, wearing jersey number 15, and representing Gbawe at the highest level.\n\nMy first game with the Vipers was against the Tema Warriors. I was nervous, but when I looked at my teammates - Emmanuel, William, Jeffery, Clement - they all nodded like they believed in me. I came off the bench and scored 12 points in my debut, including a crucial three-pointer in the fourth quarter that helped us secure the win.\n\nThat moment changed everything for me. Now I'm a regular contributor for the Vipers, and Coach says if I keep working hard, I could even get looks from college scouts. But the best part isn't the points or the wins—it's knowing that I conquered my fear and made it to the top level of our academy.\n\nMy dream is to play for the Ghana national team someday and maybe even get a college scholarship. I know that's a big dream, but Coach David says big dreams are good because they make you work harder. So every day, I'm working on my game, getting stronger, and building my confidence.\n\nTo any young player who's scared like I was: don't be afraid to shoot your shot—in basketball and in life. You might miss sometimes, but you'll make more than you think, and each shot makes you stronger. The journey from Hunter Cubs to Vipers is possible if you believe in yourself and work hard.\n\n- Wilfred",
    image: "/oko.jpg?height=400&width=600&query=young+basketball+player+confidence",
    category: "Personal Growth",
  },
  {
    id: 2,
    title: "Leading the Vipers to Victory",
    author: "Emmanuel Basepoaw, Height: 6'1\"",
    date: "September 20, 2025",
    excerpt: "As a combo guard for the Vipers, I never thought I'd be the one leading our team to championship glory. The feeling of lifting that trophy was something I'll never forget.",
    content: "Dear Dream Diary,\n\nLast weekend was the most exciting weekend of my life! After two years with the Vipers team, I found myself in a position I never expected - leading our team as the starting combo guard in the Accra Division 2 Championship Finals. When Coach David called my name during the starting lineup announcement, I felt a mix of excitement and responsibility that I'd never experienced before.\n\nThe championship game was held at the National Sports Stadium, which is so much bigger than our academy court. When we walked in for the final game, my legs were shaking, but not from fear - from anticipation. There were actual spectators in the stands—parents, other teams, scouts, and even some college coaches. The court seemed enormous, and the stakes felt even bigger.\n\nOur opponents were the defending champions, the Tema Warriors, one of the most respected teams in the division. During player introductions, when they called 'Starting at guard, number 5, Emmanuel Basepoaw from Gbawe Academy Vipers,' I felt like I was floating. My family was in the stands, cheering louder than anyone. My little brother had made a sign with my name and number.\n\nThe game itself was intense from start to finish. I remember making my first basket—a three-pointer from the corner—and hearing the crowd erupt. I remember Coach David's voice guiding us through our plays and encouraging us when we made mistakes. I remember the exhaustion in the fourth quarter, my lungs burning but refusing to ask for a substitution because I wanted to lead my team to victory.\n\nWith 30 seconds left, we were down by 2 points. Coach called a timeout and drew up a play for me to take the final shot. I was nervous, but when I looked at my teammates - William, Jeffery, Clement, Samuel - they all nodded like they believed in me. I came off a screen, caught the pass, and found myself open at the three-point line. Without thinking, I shot the ball just like I had practiced thousands of times. The ball went through the net with a perfect swish! We won the championship!\n\nThe feeling of winning the championship, huddling with my teammates afterward, all of us jumping and celebrating—it was better than any birthday or holiday. When they handed me the championship trophy, I couldn't believe that I, Emmanuel Basepoaw, was holding it as the leader of the Vipers.\n\nOn the bus ride home, Coach David sat next to me and asked about my experience. I told him it was the best weekend ever. He smiled and said, 'This is just the beginning, Emmanuel. Keep working, and there will be many more championships, bigger stages, and brighter lights in your future.'\n\nMy dream is to play basketball at the university level and maybe even professionally someday. Before this championship, that dream felt distant and maybe impossible. Now it feels like a path I'm already walking on. Each practice, each drill, each game is a step on that path.\n\nI can't wait to see where basketball takes me next.\n\n- Emmanuel",
    image: "/amb.jpg?height=400&width=600&query=basketball+player+championship",
    category: "Tournaments",
  },
]

export default async function DreamDiaryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const diaryId = Number.parseInt(id)
  const diary = dreamDiaries.find((d) => d.id === diaryId)

  if (!diary) {
    notFound()
  }

  const relatedEntries = dreamDiaries.filter((d) => d.id !== diaryId).slice(0, 3)

  return React.createElement("div", { className: "flex flex-col min-h-screen" },
    React.createElement("section", { className: "relative w-full py-20 bg-amber-950 text-white overflow-hidden" },
      React.createElement("div", { className: "absolute inset-0 z-0 opacity-20" },
        React.createElement(Image, {
          src: diary.image || "/placeholder.svg",
          alt: diary.title,
          fill: true,
          className: "object-cover",
          sizes: "100vw"
        })
      ),
      React.createElement("div", { className: "container relative z-10 px-4 mx-auto text-center" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("span", { className: "inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4" },
            diary.category
          ),
          React.createElement("h1", { className: "mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" },
            diary.title
          ),
          React.createElement("div", { className: "flex justify-center items-center space-x-4 text-gray-200" },
            React.createElement("span", { className: "text-lg font-medium" }, diary.author),
            React.createElement("span", { className: "text-gray-400" }, "•"),
            React.createElement("span", { className: "text-lg" }, diary.date)
          )
        )
      )
    ),
    React.createElement("section", { className: "py-4 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("nav", { className: "flex items-center space-x-2 text-sm" },
          React.createElement(Link, { href: "/blog", className: "text-amber-600 hover:text-amber-700" }, "Blog & Media"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement(Link, { href: "/blog/dream", className: "text-amber-600 hover:text-amber-700" }, "Dream Diaries"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement("span", { className: "text-gray-600" }, diary.title)
        )
      )
    ),
    React.createElement("section", { className: "py-12 bg-white" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("div", { className: "relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg" },
            React.createElement(Image, {
              src: diary.image || "/placeholder.svg",
              alt: diary.title,
              fill: true,
              className: "object-cover",
              sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            })
          ),
          React.createElement("article", { className: "prose prose-amber max-w-none" },
            React.createElement("div", { className: "text-lg text-gray-600 mb-8 leading-relaxed" },
              diary.excerpt
            ),
            React.createElement("div", { className: "whitespace-pre-line text-gray-700 leading-relaxed" },
              diary.content
            )
          ),
          React.createElement("div", { className: "mt-12 flex flex-wrap justify-between items-center gap-4" },
            React.createElement("div", { className: "flex space-x-4" },
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Share"),
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Download")
            ),
            React.createElement(Button, { asChild: true, className: "bg-amber-500 hover:bg-amber-600 text-amber-950" },
              React.createElement(Link, { href: "/blog/submit" }, "Share Your Dream")
            )
          )
        )
      )
    ),
    relatedEntries.length > 0 && React.createElement("section", { className: "py-16 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("h2", { className: "mb-8 text-3xl font-bold text-center text-gray-900" }, "More from Dream Diaries"),
        React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
          relatedEntries.map((relatedEntry) =>
            React.createElement("div", { key: relatedEntry.id, className: "bg-white rounded-lg shadow-sm overflow-hidden" },
              React.createElement("div", { className: "relative h-48" },
                React.createElement(Image, {
                  src: relatedEntry.image || "/placeholder.svg",
                  alt: relatedEntry.title,
                  fill: true,
                  className: "object-cover",
                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                })
              ),
              React.createElement("div", { className: "p-6" },
                React.createElement("span", { className: "text-sm text-amber-600 font-medium" }, relatedEntry.author),
                React.createElement("div", { className: "flex justify-between items-center mb-2" },
                  React.createElement("h3", { className: "text-xl font-bold text-amber-900" }, relatedEntry.title),
                  React.createElement("span", { className: "text-sm text-gray-500" }, relatedEntry.date)
                ),
                React.createElement("p", { className: "text-gray-600 mb-4" }, relatedEntry.excerpt),
                React.createElement("div", { className: "flex justify-between items-center" },
                  React.createElement("span", { className: "inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium" },
                    relatedEntry.category
                  ),
                  React.createElement(Link, { href: `/blog/dream/${relatedEntry.id}`, className: "text-amber-600 hover:text-amber-700 font-medium" },
                    "Read full diary →"
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement("section", { className: "py-8 bg-white" },
      React.createElement("div", { className: "container px-4 mx-auto text-center" },
        React.createElement(Button, { asChild: true, size: "lg", className: "bg-amber-500 hover:bg-amber-600 text-amber-950" },
          React.createElement(Link, { href: "/blog/dream" }, "← Back to Dream Diaries")
        )
      )
    )
  )
}