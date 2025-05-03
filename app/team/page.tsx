import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Basketball team"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Meet The Hunters</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            The leaders, mentors, and warriors who embody our philosophy of discipline, execution, and excellence.
          </p>
        </div>
      </section>

      {/* Team Tabs */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="coaches">Coaches</TabsTrigger>
                <TabsTrigger value="vipers">Vipers Team</TabsTrigger>
              </TabsList>
            </div>

            {/* Leadership Team */}
            <TabsContent value="leadership" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Leadership Team</h2>
                <p className="mt-4 text-lg text-gray-600">
                  The visionaries who established Gbawe Basketball Academy and continue to guide its mission.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    name: "Godwin Nii Okai Cofie",
                    role: "Co-Founder & Director",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Former national team player with a passion for developing young talent. Godwin established the academy with a vision to blend basketball excellence with cultural values.",
                    achievements: [
                      "Ghana National Team (2005-2010)",
                      "Coach of the Year (2018)",
                      "Youth Development Award (2020)",
                    ],
                  },
                  {
                    name: "Thomas Nii Adu Cofie",
                    role: "Co-Founder & Technical Director",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Basketball strategist and youth development specialist. Thomas brings tactical expertise and a deep understanding of player development pathways.",
                    achievements: [
                      "FIBA Africa Coaching License",
                      "Ghana Basketball Association Board Member",
                      "Youth Coach of the Year (2019)",
                    ],
                  },
                ].map((person, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={person.image || "/placeholder.svg"}
                          alt={person.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-amber-900">{person.name}</h3>
                        <p className="text-amber-700 mb-3">{person.role}</p>
                        <p className="text-gray-600 mb-4">{person.bio}</p>
                        <div className="space-y-1">
                          {person.achievements.map((achievement, j) => (
                            <Badge key={j} variant="outline" className="mr-1 mb-1">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Akosua Mensah",
                    role: "Operations Manager",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Ensures the smooth running of all academy programs and facilities.",
                  },
                  {
                    name: "Kwame Boateng",
                    role: "Community Outreach Director",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Builds partnerships with schools and community organizations across Ghana.",
                  },
                  {
                    name: "Abena Osei",
                    role: "Youth Development Coordinator",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Oversees the Hunter Cubs and Apprentices programs with a focus on holistic development.",
                  },
                ].map((person, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-amber-900">{person.name}</h3>
                      <p className="text-amber-700 mb-3">{person.role}</p>
                      <p className="text-gray-600">{person.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Coaching Staff */}
            <TabsContent value="coaches" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Coaching Staff</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our experienced coaches blend technical expertise with mentorship to develop complete athletes.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Coach Daniel Adjei",
                    role: "Head Coach, Vipers",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Former professional player with 15 years of coaching experience. Specializes in defensive systems and team culture building.",
                    specialties: ["Defense", "Team Strategy", "Leadership"],
                  },
                  {
                    name: "Coach Mercy Tagoe",
                    role: "Head Coach, Hunter Elite",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "National team veteran who brings international experience and tactical knowledge to our elite youth program.",
                    specialties: ["Player Development", "Game IQ", "Competitive Preparation"],
                  },
                  {
                    name: "Coach Emmanuel Quaye",
                    role: "Head Coach, Hunter Apprentices",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Youth development specialist focused on building strong fundamentals and basketball habits.",
                    specialties: ["Fundamentals", "Skill Development", "Team Concepts"],
                  },
                  {
                    name: "Coach Ama Nkrumah",
                    role: "Head Coach, Hunter Cubs",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Early childhood educator and basketball enthusiast who makes learning the game fun and engaging.",
                    specialties: ["Fun Learning", "Motor Skills", "Basketball Introduction"],
                  },
                  {
                    name: "Coach Kofi Mensah",
                    role: "Skills Development Coach",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Ball handling and shooting specialist who works with players across all age groups.",
                    specialties: ["Ball Handling", "Shooting", "Individual Skills"],
                  },
                  {
                    name: "Coach Sarah Owusu",
                    role: "Strength & Conditioning",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Certified strength coach who designs age-appropriate fitness programs for basketball performance.",
                    specialties: ["Athletic Development", "Injury Prevention", "Recovery"],
                  },
                ].map((coach, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={coach.image || "/placeholder.svg"}
                        alt={coach.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-amber-900">{coach.name}</h3>
                      <p className="text-amber-700 mb-3">{coach.role}</p>
                      <p className="text-gray-600 mb-4">{coach.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, j) => (
                          <Badge key={j} variant="secondary" className="bg-amber-100 text-amber-800">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Vipers Team */}
            <TabsContent value="vipers" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vipers Basketball Team</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our senior team competing in Accra Division 2, representing the pinnacle of the Hunter's journey.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-4xl font-bold text-amber-900">24-6</p>
                    <p className="text-sm text-gray-600">2023 Season Record</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-amber-900">2nd</p>
                    <p className="text-sm text-gray-600">League Standing</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-amber-900">86.4</p>
                    <p className="text-sm text-gray-600">Points Per Game</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-amber-900">3</p>
                    <p className="text-sm text-gray-600">Tournament Titles</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Kwesi Amankwah",
                    number: 5,
                    position: "Point Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'1\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "David Acheampong",
                    number: 23,
                    position: "Shooting Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'3\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Michael Osei",
                    number: 8,
                    position: "Small Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'5\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Samuel Boateng",
                    number: 34,
                    position: "Power Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'7\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Joseph Mensah",
                    number: 42,
                    position: "Center",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'9\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Eric Danso",
                    number: 11,
                    position: "Point Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'0\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Benjamin Owusu",
                    number: 15,
                    position: "Shooting Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'4\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Isaac Asante",
                    number: 21,
                    position: "Small Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'6\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Daniel Agyei",
                    number: 32,
                    position: "Power Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'8\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Francis Appiah",
                    number: 45,
                    position: "Center",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'10\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Richard Ofori",
                    number: 3,
                    position: "Point Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "5'11\"",
                    academy: "Hunter Elite Graduate",
                  },
                  {
                    name: "Emmanuel Addo",
                    number: 24,
                    position: "Shooting Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'2\"",
                    academy: "Hunter Elite Graduate",
                  },
                ].map((player, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute top-0 right-0 bg-amber-900 text-white text-xl font-bold w-10 h-10 flex items-center justify-center">
                        {player.number}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-amber-900">{player.name}</h3>
                      <p className="text-amber-700">{player.position}</p>
                      <div className="mt-2 flex justify-between text-sm text-gray-600">
                        <span>{player.height}</span>
                        <span>{player.academy}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">View Game Schedule</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Join the Hunt</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
            Interested in becoming part of the Gbawe Basketball Academy family? We're always looking for passionate
            players, coaches, and volunteers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-800">
              <a href="/programs">View Programs</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
