import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const dreamDiaries = [
  {
    id: 1,
    title: "Finding My Confidence",
    author: "Kofi, Height: 5'10",
    date: "April 5, 2023",
    excerpt: "When I first came to Gbawe Academy, I was scared to even shoot the ball. Now I'm leading my team in scoring.",
    content: "Dear Dream Diary,\n\nMy name is Kofi, and I'm 12 years old. I've been at Gbawe Basketball Academy for almost two years now. When I first came here, I was so scared. I was scared of the ball, scared of the other kids, scared of making mistakes. I would pass the ball as soon as I got it, even if I was wide open. I didn't want anyone to see me miss.\n\nCoach Benjamin noticed this and started working with me after practice. He told me something I'll never forget: 'The only shots you're guaranteed to miss are the ones you don't take.' He made me shoot 50 shots every day after practice, and he wouldn't let me leave until I finished. At first, I missed a lot, and I felt embarrassed. But Coach Benjamin never got mad or disappointed. He just helped me fix my form and encouraged me to keep shooting.\n\nSlowly, I started making more shots. And the more shots I made in practice, the more confident I felt in games. I started taking open shots when my teammates passed to me. Sometimes they went in, sometimes they didn't, but my teammates always high-fived me and told me to keep shooting.\n\nLast month, something amazing happened. We were playing in the Hunter Cubs tournament, and our team was down by 2 points with only 30 seconds left. Coach called a timeout and drew up a play... for me! He wanted ME to take the last shot! I was nervous, but when I looked at my teammates, they all nodded like they believed in me.\n\nWhen the play started, everything seemed to move in slow motion. I came off a screen, caught the pass, and found myself open at the three-point line. Without thinking, I shot the ball just like I had practiced hundreds of times with Coach Benjamin. The ball went through the net with a perfect swish! We won the game, and my teammates lifted me onto their shoulders.\n\nThat moment changed everything for me. Now I'm one of the leading scorers on my team, and Coach says if I keep working hard, I could make the Hunter Elites team in a few years. But the best part isn't the points or the wins—it's knowing that I conquered my fear. I'm not scared anymore.\n\nMy dream is to play for the Ghana national team someday. I know that's a big dream, but Coach Benjamin says big dreams are good because they make you work harder. So every day, I'm working on my game, getting stronger, and building my confidence.\n\nTo any kid who's scared like I was: don't be afraid to shoot your shot—in basketball and in life. You might miss sometimes, but you'll make more than you think, and each shot makes you stronger.\n\n- Kofi",
    image: "/placeholder.svg?height=400&width=600&query=young+basketball+player+confidence",
    category: "Personal Growth",
  },
  {
    id: 2,
    title: "My First Tournament",
    author: "Ama, Height: 5'10",
    date: "March 20, 2023",
    excerpt: "I never thought I'd play in a real tournament. The feeling of wearing that jersey was something I'll never forget.",
    content: "Dear Dream Diary,\n\nLast weekend was the most exciting weekend of my life! After six months of training with the Hunter Apprentices, Coach Mercy selected me to be part of the team for the Regional Youth Tournament. When she called my name during practice and handed me my jersey—a real Gbawe Academy jersey with my name on it—I almost cried. I slept with that jersey next to my pillow all week.\n\nThe tournament was held at the National Sports Stadium, which is so much bigger than our academy court. When we walked in for our first game, my legs were shaking. There were actual spectators in the stands—parents, other teams, and even a few scouts from senior teams. The court seemed enormous, and the basket looked a million miles away during warm-ups.\n\nOur first game was against the Tema Tigers, one of the top youth teams in the region. During player introductions, when they called 'Starting at guard, number 15, Ama Owusu from Gbawe Academy,' I felt like I was floating. My family was in the stands, cheering louder than anyone. My little brother had made a sign with my name and number.\n\nThe game itself is mostly a blur. I remember making my first basket—a layup after stealing the ball—and hearing my teammates cheer. I remember Coach Mercy's voice guiding us through our plays and encouraging us when we made mistakes. I remember the exhaustion in the fourth quarter, my lungs burning but refusing to ask for a substitution because I wanted to stay on that court as long as possible.\n\nWe lost that first game by 12 points, but Coach Mercy wasn't upset. She said she was proud of how we competed and that tournaments are about learning and growing. Our second game that afternoon went better. I scored 8 points and had 5 assists, and we won by 3 points! The feeling of winning a real tournament game, huddling with my teammates afterward, all of us jumping and celebrating—it was better than any birthday or holiday.\n\nWe ended up winning two games and losing two games in the tournament, which Coach said was impressive for our first time. We didn't advance to the finals, but I didn't care. Just being there, competing, wearing that jersey—it was everything I had dreamed about since I first picked up a basketball.\n\nOn the bus ride home, Coach Mercy sat next to me and asked about my experience. I told her it was the best weekend ever. She smiled and said, 'This is just the beginning, Ama. Keep working, and there will be many more tournaments, bigger stages, and brighter lights in your future.'\n\nMy dream is to play basketball at the university level and maybe even professionally someday. Before this tournament, that dream felt distant and maybe impossible. Now it feels like a path I'm already walking on. Each practice, each drill, each game is a step on that path.\n\nI can't wait to see where basketball takes me next.\n\n- Ama",
    image: "/placeholder.svg?height=400&width=600&query=girl+basketball+player+tournament",
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