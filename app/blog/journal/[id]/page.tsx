import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const journalEntries = [
  {
    id: 1,
    title: "The Mental Game: Preparing for Pressure",
    author: "Kwesi Amankwah, Team Captain",
    date: "April 2, 2023",
    excerpt: "How I prepare mentally for big games and high-pressure moments on the court.",
    content: "Basketball is as much a mental game as it is physical. As team captain, I've learned that mental preparation is often what separates good players from great ones, especially in high-pressure situations.\n\nMy mental preparation begins long before game day. During practice, I intentionally put myself in pressure situations. I'll ask Coach Daniel to set up scenarios where I need to make a free throw to 'win' the scrimmage, or where our team needs to execute a play perfectly with only seconds remaining. By simulating pressure in practice, the real thing becomes more manageable.\n\nThe night before a big game, I have a specific routine. I visualize different game scenarios, imagining myself making the right decisions and executing successfully. I see the ball going through the hoop, I feel the perfect pass leaving my fingertips, I hear the communication with my teammates. This visualization creates a mental blueprint that my body can follow during the actual game.\n\nOn game day, I focus on controlling what I can control. I can't control the referees, the crowd, or even whether every shot goes in. But I can control my effort, my attitude, and my response to adversity. This perspective takes some of the pressure off and allows me to play freely.\n\nI also rely heavily on my pre-game routine. The consistency of this routine—from the music I listen to, to the stretches I do, to the prayers I say—helps center me and signals to my body and mind that it's time to perform.\n\nDuring the game, especially in crucial moments, I use deep breathing to stay calm. Three deep breaths can make a world of difference when the pressure is mounting. I also have a mantra that I repeat to myself: 'Present and poised.' This reminds me to stay in the moment and maintain my composure regardless of the situation.\n\nPerhaps most importantly, I've learned to embrace pressure rather than fear it. Pressure situations are opportunities to prove yourself, to help your team, to create memories. When you reframe pressure as opportunity, it becomes something to welcome rather than avoid.\n\nTo the young players reading this: developing mental toughness takes time and intentional practice, just like developing your jump shot or ball-handling. Start small, put yourself in uncomfortable situations during practice, and gradually build your capacity to perform under pressure. The mental game might not show up on the stat sheet, but it's often what determines the outcome when the game is on the line.",
    image: "/placeholder.svg?height=600&width=800&query=basketball+player+focus",
    category: "Mental Preparation",
  },
  {
    id: 2,
    title: "My Journey: From Hunter Cub to Viper",
    author: "Samuel Boateng, Power Forward",
    date: "March 18, 2023",
    excerpt: "Reflecting on my 10-year journey through the Gbawe Academy system and the lessons learned.",
    content: "Ten years ago, I walked into Gbawe Basketball Academy as a skinny, uncoordinated 8-year-old who had barely touched a basketball. Today, I'm a starting power forward for the Vipers, our senior team. The journey between those two points has been filled with challenges, growth, and countless lessons that extend far beyond the basketball court.\n\nI still remember my first day as a Hunter Cub. I couldn't make a layup, couldn't dribble with my left hand, and was terrified of the older kids. Coach Benjamin saw something in me though—not skill, certainly, but perhaps determination. He took me under his wing and patiently taught me the fundamentals of the game.\n\nProgress was slow at first. While some kids seemed naturally gifted, I had to work twice as hard for every small improvement. There were many days when I wanted to quit, when the gap between where I was and where I wanted to be seemed impossibly wide. But my parents and coaches encouraged me to persist, to focus on my own journey rather than comparing myself to others.\n\nBy age 12, I had developed into a solid player and moved up to the Hunter Apprentices. This is where my love for the game really blossomed. Coach Mercy pushed us hard but also made the game fun. She helped me understand the strategic aspects of basketball and find my identity as a player. I wasn't the fastest or the most skilled, but I was tough, smart, and willing to do the unglamorous work that helps teams win.\n\nThe transition to Hunter Elites at age 15 was a wake-up call. Suddenly, I was competing against bigger, stronger, more experienced players. I struggled initially, often finding myself on the bench. This was perhaps the most valuable period of my development—learning to contribute in limited minutes, to stay ready, to support my teammates even when I wasn't on the court.\n\nCoach Daniel taught me that basketball is a game of roles, and that embracing your role, whatever it may be, is the mark of a true player. I embraced my role as an energy player, a rebounder, a defender. Gradually, my role expanded as my skills improved.\n\nMaking the Vipers last year was the realization of a dream I've had since I first picked up a basketball. But I know this isn't the end of the journey—it's just another step. Now I have new goals, new challenges, new aspects of my game to develop.\n\nTo the young players just starting their journey: trust the process. There will be setbacks, frustrations, and moments of doubt. But if you stay committed to improvement and open to coaching, you'll look back years from now and be amazed at how far you've come. The journey itself—the daily grind, the relationships built, the obstacles overcome—is where the real value lies.",
    image: "/placeholder.svg?height=600&width=800&query=basketball+player+journey",
    category: "Player Journey",
  },
]

export default async function JournalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const entryId = Number.parseInt(id)
  const entry = journalEntries.find((e) => e.id === entryId)

  if (!entry) {
    notFound()
  }

  const relatedEntries = journalEntries.filter((e) => e.id !== entryId).slice(0, 3)

  return React.createElement("div", { className: "flex flex-col min-h-screen" },
    React.createElement("section", { className: "relative w-full py-20 bg-amber-950 text-white overflow-hidden" },
      React.createElement("div", { className: "absolute inset-0 z-0 opacity-20" },
        React.createElement(Image, {
          src: entry.image || "/placeholder.svg",
          alt: entry.title,
          fill: true,
          className: "object-cover",
          sizes: "100vw"
        })
      ),
      React.createElement("div", { className: "container relative z-10 px-4 mx-auto text-center" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("span", { className: "inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4" },
            entry.category
          ),
          React.createElement("h1", { className: "mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" },
            entry.title
          ),
          React.createElement("div", { className: "flex justify-center items-center space-x-4 text-gray-200" },
            React.createElement("span", { className: "text-lg font-medium" }, entry.author),
            React.createElement("span", { className: "text-gray-400" }, "•"),
            React.createElement("span", { className: "text-lg" }, entry.date)
          )
        )
      )
    ),
    React.createElement("section", { className: "py-4 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("nav", { className: "flex items-center space-x-2 text-sm" },
          React.createElement(Link, { href: "/blog", className: "text-amber-600 hover:text-amber-700" }, "Blog & Media"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement(Link, { href: "/blog/journal", className: "text-amber-600 hover:text-amber-700" }, "Hunter's Journal"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement("span", { className: "text-gray-600" }, entry.title)
        )
      )
    ),
    React.createElement("section", { className: "py-12 bg-white" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("div", { className: "relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg" },
            React.createElement(Image, {
              src: entry.image || "/placeholder.svg",
              alt: entry.title,
              fill: true,
              className: "object-cover",
              sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            })
          ),
          React.createElement("article", { className: "prose prose-amber max-w-none" },
            React.createElement("div", { className: "text-lg text-gray-600 mb-8 leading-relaxed" },
              entry.excerpt
            ),
            React.createElement("div", { className: "whitespace-pre-line text-gray-700 leading-relaxed" },
              entry.content
            )
          ),
          React.createElement("div", { className: "mt-12 flex flex-wrap justify-between items-center gap-4" },
            React.createElement("div", { className: "flex space-x-4" },
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Share"),
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Download")
            ),
            React.createElement(Button, { asChild: true, className: "bg-amber-500 hover:bg-amber-600 text-amber-950" },
              React.createElement(Link, { href: "/blog/submit" }, "Share Your Story")
            )
          )
        )
      )
    ),
    relatedEntries.length > 0 && React.createElement("section", { className: "py-16 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("h2", { className: "mb-8 text-3xl font-bold text-center text-gray-900" }, "More from Hunter's Journal"),
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
                  React.createElement(Link, { href: `/blog/journal/${relatedEntry.id}`, className: "text-amber-600 hover:text-amber-700 font-medium" },
                    "Read full story →"
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
          React.createElement(Link, { href: "/blog/journal" }, "← Back to Hunter's Journal")
        )
      )
    )
  )
}