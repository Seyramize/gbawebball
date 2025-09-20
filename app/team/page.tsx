import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative w-full py-60 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gbawe-logo.png?height=600&width=1920"
            alt="Basketball team"
            fill
            className="object-contain"
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
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="coaches">Coaches</TabsTrigger>
                <TabsTrigger value="technical">Techies</TabsTrigger>
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
                    name: "Thomas Nii Adu Cofie",
                    role: "Founder & Director",
                    image: "/tommy.jpg?height=400&width=400",
                    bio: "Former national team player with a passion for developing young talent. Thomas established the academy with a vision to blend basketball excellence with cultural values.",
                    achievements: [
                      "Leadership",
                      "Development",
                      "Passion",
                    ],
                  },
                  {
                    name: "Nii Okai Cofie",
                    role: "Co-Founder & Technical Director",
                    image: "/gidi.jpg?height=400&width=400",
                    bio: "Coach Nii Okai is dedicated to shaping well-rounded athletes through elite basketball training and mentorship.",
                    achievements: [
                      "Disclipine ",
                      "Teamwork",
                      "Excellence",
                    ],
                  },
                  {
                    name: "Berlinda Anum Tettey Tackie",
                    role: "Head of Operations",
                    image: "/akos.jpg?height=400&width=400",
                    bio: "Belinda ensures the academy runs smoothly, handles daily operations with focus and efficiency so players and coaches can thrive.",
                    achievements: [
                      "Reliability",
                      "Efficiency",
                      "Support",
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

              {/* <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Berlinda Anum Tettey Tackie",
                    role: "Operations Manager",
                    image: "/akos.jpg?height=400&width=400",
                    bio: "Ensures the smooth running of all academy programs and facilities.",
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
              </div> */}
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
                    name: "David Nuertey Tetteh",
                    role: "Head Boys Coach",
                    image: "/hc.jpg?height=400&width=400",
                    bio: "Coach David Nuertey Tetteh is a seasoned basketball coach with nearly a decade of experience in shaping young athletes and building competitive programs. At St. John’s Grammar School, he guided teams to remarkable achievements, including winning the Greater Accra Girls Basketball Championship (2024&2025), the HoopRave National SHS 3x3 Tournament (2025), and securing consistent top finishes in the Greater Accra Super Zonals. As the new Head Boys Coach of Gbawe Basketball Academy, Coach David brings leadership, technical expertise, and a championship mindset. His vision is to transform the Academy into a recognized hub for basketball excellence—developing disciplined athletes, nurturing future stars, and raising talents who can compete at the highest levels both locally and internationally.",
                    specialties: ["Two-time Greater Accra Champions", "National U16 FIBA 3x3 Champions", "Three-time Zonal Champions"],
                  },
                  {
                    name: "Kenneth Akpah",
                    role: "Head Girls Coach",
                    image: "/ac.jpg?height=400&width=400",
                    bio: "Coach Kenneth is a dedicated and successful girls' basketball coach with a proven track record of developing winning teams. His coaching philosophy emphasizes teamwork, discipline, and a strong fundamental skill set, which has led his teams to numerous championships. Among his notable achievements, His passion for the game and commitment to his players' growth, both on and off the court, make him a respected figure in the girls' basketball community.",
                    specialties: ["Two-time Greater Accra Champions", "National U16 FIBA 3x3 Champions", "Three-time Zonal Champions"],
                  },
                  {
                    name: "Nelly Nana Akosua Antwiwaa Antwi",
                    role: "Assistant Girls Coach",
                    image: "/nf.jpg?height=400&width=400",
                    bio: "Nelly is a dedicated and accomplished girls' basketball coach with a proven track record of success. As a two-time Greater Accra champion and a one-time Zonal champion, she has demonstrated her ability to build winning teams at the regional level. Her coaching prowess extends to the national stage, where she led her team to victory as the National U16 FIBA 3x3 champions. Coach Nelly is known for her commitment to developing young talent and fostering a love for the game in her players",
                    specialties: ["Player Development", "Game IQ", "Competitive Preparation"],
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

            {/* Technical Staff */}
            <TabsContent value="technical" className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Technical Staff</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our experienced technical staff blend technical expertise with mentorship to develop complete athletes.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Joel Addei Gyambrah",
                    role: "Technical Team Head",
                    image: "/joe.jpg?height=400&width=400",
                    bio: "From leading Ghana’s U16 basketball team as captain in 2017 to shaping the next generation of athletes, Joel has always lived and breathed sports. With a deep passion for athletics and a commitment to coaching, Joel inspires athletes to push beyond limits, grow in confidence, and chase excellence both on and off the court.",
                    specialties: ["Management", "Technical", "Leadership"],
                  },
                  {
                    name: "Gideon Adipoeru Wedam",
                    role: "Photographer/Videographer",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Photographer/Videographer who captures the essence of the academy's journey.",
                    specialties: ["Photography", "Videography", "Editing"],
                  },
                  {
                    name: "Fiona Aku Adjor Freeman",
                    role: "Graphic Designer",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Graphic designer who creates the academy's visual identity.",
                    specialties: ["Graphic Design", "Branding", "Logo Design"],
                  },
                  {
                    name: "Theodora Quaye",
                    role: "Social Media Manager",
                    image: "/placeholder.svg?height=400&width=400",
                    bio: "Social media manager who creates and manages the academy's social media presence.",
                    specialties: ["Social Media", "Content Creation", "Community Management"],
                  },
                  {
                    name: "Seyram Yao Alifo",
                    role: "Full Stack Developer",
                    image: "/saysey.jpg?height=400&width=400",
                    bio: "Seyram Yao Alifo is a passionate basketball enthusiast and tech entrepreneur who believes in the power of sports to build discipline, teamwork, and community. Beyond the court, he runs ventures in technology and renewable energy, creating innovative solutions that impact everyday life. Seyram combines his love for basketball with his drive for innovation, supporting initiatives that inspire young athletes to grow both on and off the court.",
                    specialties: ["Web Development", "UI/UX Design", "SEO", "Full Stack Development"],
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
                    name: "Emmanuel Basepoaw",
                    number: 5,
                    position: "Combo Guard",
                    image: "/amb.jpg?height=400&width=400",
                    height: "6'1\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "William Agyapong Ntiamoah",
                    number: 23,
                    position: "Forward/Center",
                    image: "/wil.jpg?height=400&width=400",
                    height: "6'3\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Jeffery Nana Sey",
                    number: 8,
                    position: "Combo Guard",
                    image: "/sey.jpg?height=400&width=400",
                    height: "6'5\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Clement Nana Osei Dodoo",
                    number: 34,
                    position: "Combo Guard",
                    image: "/cle.jpg?height=400&width=400",
                    height: "6'7\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Samuel Akakpo",
                    number: 42,
                    position: "Small Forward",
                    image: "/osko.jpg?height=400&width=400",
                    height: "6'9\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Wisdom Emmanuel Oyedeji",
                    number: 11,
                    position: "Forward",
                    image: "/ss1.jpg?height=400&width=400",
                    height: "6'0\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "⁠⁠Wilfred Oko Sackey",
                    number: 15,
                    position: "Guard",
                    image: "/oko.jpg?height=400&width=400",
                    height: "6'4\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Derek Ameti",
                    number: 45,
                    position: "Center",
                    image: "/1.jpg?height=400&width=400",
                    height: "6'10\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Daniel Mensah Davordzie",
                    number: 3,
                    position: "Forward",
                    image: "/2.jpg?height=400&width=400",
                    height: "5'11\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Matthew Tettey Osabutey",
                    number: 24,
                    position: "Center",
                    image: "/3.jpg?height=400&width=400",
                    height: "6'2\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Tabi Anthony Yaw Ariba",
                    number: 21,
                    position: "Combo Guard",
                    image: "/ss.jpg?height=400&width=400",
                    height: "6'6\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Sa-ad Suleiman",
                    number: 32,
                    position: "Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'8\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Andy Mawuli",
                    number: 21,
                    position: "Forward/Center",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'6\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "Joseph Appiah Adjei",
                    number: 32,
                    position: "Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'8\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "⁠⁠Franklin Yartey",
                    number: 10,
                    position: "Guard",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'6\"",
                    academy: "Hunter Elites Graduate",
                  },
                  {
                    name: "⁠⁠Seyram Yao Alifo",
                    number: 9,
                    position: "Forward",
                    image: "/placeholder.svg?height=400&width=400",
                    height: "6'8\"",
                    academy: "Hunter Elites Graduate",
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
                <Button
                  asChild
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md"
                >
                  <a href="/schedule">View Game Schedule</a>
                </Button>
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
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <a href="/programs">View Programs</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
