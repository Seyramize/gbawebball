import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { notFound } from "next/navigation"

const posts = [
  {
    id: 1,
    title: "Defensive Principles: The Hunter's Approach",
    coach: "Coach Daniel Adjei",
    date: "April 5, 2023",
    description: "Breaking down our defensive philosophy and key principles that make our defense elite.",
    content: "Defense is the foundation of our program at Gbawe Basketball Academy. While offensive skills often get the spotlight, it's our commitment to defense that has led to our success over the years.\n\nOur defensive philosophy is built on five key principles:\n\n1. **Pressure the Ball** - We believe in making every dribble, every pass, and every shot difficult for our opponents. This starts with relentless on-ball pressure.\n\n2. **Help and Recover** - Basketball is a team game, and our defense reflects that. We teach our players to help their teammates while maintaining the ability to recover to their own assignments.\n\n3. **Deny the Next Pass** - By denying the next logical pass, we disrupt offensive flow and force teams into uncomfortable situations.\n\n4. **Box Out and Rebound** - A defensive possession isn't complete until we secure the rebound. Every player, regardless of position, is expected to box out and contribute to our rebounding efforts.\n\n5. **Communicate** - Perhaps the most important principle is communication. Our players are constantly talking, calling out screens, switches, and rotations.\n\nIn practice, we dedicate significant time to defensive drills that reinforce these principles. Our shell drill, which you can see in the video, is a staple of our training regimen. It teaches players proper positioning, rotations, and help defense concepts in a controlled environment.\n\nWe also emphasize individual defensive techniques such as proper stance, footwork, and hand positioning. These fundamentals, when mastered, allow our players to execute our defensive system effectively.\n\nRemember, great defense isn't just about physical ability—it's about effort, intelligence, and teamwork. When our players commit to our defensive principles, they become part of something greater than themselves: a defensive unit that moves, thinks, and reacts as one.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=basketball+defense+drill",
    category: "Defense",
  },
  {
    id: 2,
    title: "Building Basketball IQ: Reading the Game",
    coach: "Coach Mercy Tagoe",
    date: "March 22, 2023",
    description: "How we develop decision-making skills and game intelligence in our players.",
    content: "Basketball IQ is often discussed but rarely taught systematically. At Gbawe Basketball Academy, we believe that game intelligence can be developed through deliberate practice and guided experience.\n\nWhat exactly is basketball IQ? It's the ability to read the game, make quick decisions, and execute the right play at the right time. It's knowing when to shoot, when to pass, when to drive, and when to pull back. It's understanding spacing, timing, and game situations.\n\nHere's how we develop basketball IQ in our players:\n\n1. **Film Study** - We regularly review game footage with our players, breaking down decisions and discussing alternatives. This helps players see the game from a different perspective and understand the consequences of various choices.\n\n2. **Decision-Making Drills** - We use specific drills designed to put players in decision-making situations. For example, our 3-on-2, 2-on-1 continuous drill forces players to make quick decisions in transition situations.\n\n3. **Conceptual Teaching** - Rather than just teaching set plays, we teach concepts and principles. This allows players to adapt to different situations rather than following rigid patterns.\n\n4. **Questioning Approach** - Instead of always telling players what to do, we often ask questions: 'What did you see there?' 'What other options did you have?' 'Why did you make that decision?' This encourages players to think critically about their choices.\n\n5. **Game Simulations** - We create game-like situations in practice, complete with score, time, and specific scenarios. This helps players understand situational basketball and develop a feel for game management.\n\nOne of my favorite exercises is what we call 'Pause and Process.' During scrimmages, coaches occasionally blow the whistle to freeze the action. Players must then verbalize what they see, what options they have, and what decision they would make. This develops the habit of constantly reading the game.\n\nRemember, basketball IQ isn't about being the smartest person off the court—it's about making smart decisions on the court. With deliberate practice and proper guidance, every player can improve their basketball intelligence.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "/placeholder.svg?height=600&width=800&query=basketball+coach+teaching",
    category: "Player Development",
  },
]

export default async function CoachDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const postId = Number.parseInt(id)
  const post = posts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts.filter((p) => p.id !== postId).slice(0, 3)

  return React.createElement("div", { className: "flex flex-col min-h-screen" },
    React.createElement("section", { className: "relative w-full py-20 bg-amber-950 text-white overflow-hidden" },
      React.createElement("div", { className: "absolute inset-0 z-0 opacity-20" },
        React.createElement(Image, {
          src: post.thumbnailUrl || "/placeholder.svg",
          alt: post.title,
          fill: true,
          className: "object-cover",
          sizes: "100vw"
        })
      ),
      React.createElement("div", { className: "container relative z-10 px-4 mx-auto text-center" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("span", { className: "inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4" },
            post.category
          ),
          React.createElement("h1", { className: "mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" },
            post.title
          ),
          React.createElement("div", { className: "flex justify-center items-center space-x-4 text-gray-200" },
            React.createElement("span", { className: "text-lg font-medium" }, post.coach),
            React.createElement("span", { className: "text-gray-400" }, "•"),
            React.createElement("span", { className: "text-lg" }, post.date)
          )
        )
      )
    ),
    React.createElement("section", { className: "py-4 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("nav", { className: "flex items-center space-x-2 text-sm" },
          React.createElement(Link, { href: "/blog", className: "text-amber-600 hover:text-amber-700" }, "Blog & Media"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement(Link, { href: "/blog/coach", className: "text-amber-600 hover:text-amber-700" }, "Coach's Corner"),
          React.createElement("span", { className: "text-gray-400" }, "/"),
          React.createElement("span", { className: "text-gray-600" }, post.title)
        )
      )
    ),
    React.createElement("section", { className: "py-12 bg-white" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("div", { className: "max-w-4xl mx-auto" },
          React.createElement("div", { className: "aspect-video relative mb-8 rounded-lg overflow-hidden shadow-lg" },
            React.createElement(VideoPlayer, {
              videoUrl: post.videoUrl,
              thumbnailUrl: post.thumbnailUrl,
              title: post.title
            })
          ),
          React.createElement("article", { className: "prose prose-amber max-w-none" },
            React.createElement("div", { className: "text-lg text-gray-600 mb-8 leading-relaxed" },
              post.description
            ),
            React.createElement("div", { className: "whitespace-pre-line text-gray-700 leading-relaxed" },
              post.content
            )
          ),
          React.createElement("div", { className: "mt-12 flex flex-wrap justify-between items-center gap-4" },
            React.createElement("div", { className: "flex space-x-4" },
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Share"),
              React.createElement(Button, { variant: "outline", size: "sm", className: "border-amber-500 text-amber-500" }, "Download")
            ),
            React.createElement(Button, { asChild: true, className: "bg-amber-500 hover:bg-amber-600 text-amber-950" },
              React.createElement(Link, { href: "/contact" }, "Ask a Question")
            )
          )
        )
      )
    ),
    relatedPosts.length > 0 && React.createElement("section", { className: "py-16 bg-gray-50" },
      React.createElement("div", { className: "container px-4 mx-auto" },
        React.createElement("h2", { className: "mb-8 text-3xl font-bold text-center text-gray-900" }, "More from Coach's Corner"),
        React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
          relatedPosts.map((relatedPost) =>
            React.createElement("div", { key: relatedPost.id, className: "bg-white rounded-lg shadow-sm overflow-hidden" },
              React.createElement("div", { className: "aspect-video relative" },
                React.createElement(Image, {
                  src: relatedPost.thumbnailUrl || "/placeholder.svg",
                  alt: relatedPost.title,
                  fill: true,
                  className: "object-cover",
                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                }),
                React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center" },
                  React.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-12 w-12 text-white opacity-80",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  },
                    React.createElement("path", {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                      clipRule: "evenodd"
                    })
                  )
                )
              ),
              React.createElement("div", { className: "p-6" },
                React.createElement("span", { className: "text-sm text-amber-600 font-medium" }, relatedPost.coach),
                React.createElement("div", { className: "flex justify-between items-center mb-2" },
                  React.createElement("h3", { className: "text-xl font-bold text-amber-900" }, relatedPost.title),
                  React.createElement("span", { className: "text-sm text-gray-500" }, relatedPost.date)
                ),
                React.createElement("p", { className: "text-gray-600 mb-4" }, relatedPost.description),
                React.createElement("div", { className: "flex justify-between items-center" },
                  React.createElement("span", { className: "inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium" },
                    relatedPost.category
                  ),
                  React.createElement(Link, { href: `/blog/coach/${relatedPost.id}`, className: "text-amber-600 hover:text-amber-700 font-medium" },
                    "Read full breakdown →"
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
          React.createElement(Link, { href: "/blog/coach" }, "← Back to Coach's Corner")
        )
      )
    )
  )
}