"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Radio,
  Users,
  Calendar,
  Play,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Headphones,
  Volume2,
  Waves,
} from "lucide-react"
import ScrollFloat from "@/components/ScrollFloat"

export default function VoiceITWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "team", "live", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const events = [
    {
      title: "RJ Battle Championship",
      date: "March 15, 2024",
      time: "6:00 PM",
      description: "Annual competition to find VIT's next radio star",
    },
    {
      title: "Open Mic Night",
      date: "March 22, 2024",
      time: "7:30 PM",
      description: "Share your voice, stories, and talents with the community",
    },
    {
      title: "Podcast Workshop",
      date: "March 29, 2024",
      time: "4:00 PM",
      description: "Learn the art of podcasting from industry professionals",
    },
  ]

  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Club President",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Head of Programming",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rahul Kumar",
      role: "Technical Lead",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sneha Reddy",
      role: "Events Coordinator",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary-bg/80 backdrop-blur-md border-b border-neutral-light z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-accent-orange p-2 rounded-full">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-text-primary">Voice IT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "events", "team", "live", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-accent-orange font-semibold"
                      : "text-text-secondary hover:text-accent-orange"
                  }`}
                >
                  {section === "live" ? "Live Radio" : section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-secondary hover:text-accent-orange"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-bg border-t border-neutral-light">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "events", "team", "live", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-accent-orange capitalize w-full text-left"
                >
                  {section === "live" ? "Live Radio" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent-orange/10 text-accent-orange border-accent-orange/20">
                  Official RJ Club of VIT Chennai
                </Badge>
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  textClassName="text-text-primary"
                >
                  Voice IT
                </ScrollFloat>
                <p className="text-xl text-text-secondary max-w-lg">
                  Where voices come alive and stories find their rhythm. Join VIT Chennai's premier radio community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-accent-orange/25"
                  onClick={() => scrollToSection("contact")}
                >
                  Join the Club
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent-warm text-accent-warm hover:bg-accent-warm hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
                  onClick={() => scrollToSection("live")}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Listen Live
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-accent-orange/10 to-accent-warm/10 rounded-3xl p-8 backdrop-blur-sm border border-accent-orange/20">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-text-secondary font-medium">ON AIR</span>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-accent-orange p-6 rounded-full">
                    <Radio className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="flex justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-accent-orange rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <p className="text-center text-text-secondary">Broadcasting creativity across campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}
              textClassName="text-text-primary"
            >
              About Voice IT
            </ScrollFloat>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-4">
              We're more than just a radio club – we're a community of storytellers, creators, and voice artists
              passionate about audio expression.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-primary-bg border-neutral-light hover:shadow-lg transition-all duration-300 hover:border-accent-orange/30">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Mic className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Creative Expression</h3>
                <p className="text-text-secondary">
                  Discover your unique voice through radio shows, podcasts, and live performances that showcase your
                  creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-bg border-neutral-light hover:shadow-lg transition-all duration-300 hover:border-accent-orange/30">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-warm/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent-warm" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Community Building</h3>
                <p className="text-text-secondary">
                  Connect with like-minded individuals and build lasting friendships through shared passion for audio
                  arts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-bg border-neutral-light hover:shadow-lg transition-all duration-300 hover:border-accent-orange/30">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Skill Development</h3>
                <p className="text-text-secondary">
                  Learn professional broadcasting techniques, audio editing, and public speaking in a supportive
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}
              textClassName="text-text-primary"
            >
              Upcoming Events
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">Don't miss out on our exciting lineup of events and workshops</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-neutral-lightest border-neutral-light hover:shadow-lg transition-all duration-300 hover:border-accent-orange/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-accent-orange p-2 rounded-full mr-3">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-accent-orange font-semibold">{event.date}</p>
                      <p className="text-sm text-text-muted">{event.time}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{event.title}</h3>
                  <p className="text-text-secondary">{event.description}</p>
                  <Button className="mt-4 w-full bg-accent-warm hover:bg-accent-warm/90 text-white rounded-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}
              textClassName="text-text-primary"
            >
              Meet Our Team
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">The voices behind Voice IT who make the magic happen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-primary-bg border-neutral-light hover:shadow-lg transition-all duration-300 hover:border-accent-orange/30 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-accent-orange/20 group-hover:border-accent-orange/50 transition-all"
                    />
                    <div className="absolute inset-0 bg-accent-orange/10 rounded-full group-hover:bg-accent-orange/20 transition-all"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{member.name}</h3>
                  <p className="text-accent-orange font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Radio Section */}
      <section id="live" className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}
              textClassName="text-text-primary"
            >
              Live Radio & Podcasts
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">
              Tune in to our live broadcasts and catch up on our latest podcast episodes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-primary-bg border-accent-orange/20 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-accent-orange font-semibold">LIVE NOW</span>
                  </div>
                  <Volume2 className="h-6 w-6 text-accent-orange" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Campus Vibes</h3>
                <p className="text-text-secondary mb-6">Your daily dose of music, news, and campus updates</p>
                <div className="flex items-center space-x-4">
                  <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white rounded-full">
                    <Play className="w-4 h-4 mr-2" />
                    Listen Live
                  </Button>
                  <div className="flex space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-accent-orange rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-text-primary">Recent Podcasts</h4>
                {["Tech Talk Tuesday", "Campus Chronicles", "Music & More"].map((podcast, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-primary-bg rounded-lg border border-neutral-light"
                  >
                    <div className="bg-accent-warm/10 p-2 rounded-full">
                      <Waves className="h-4 w-4 text-accent-warm" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{podcast}</p>
                      <p className="text-sm text-text-muted">Episode {index + 1}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent-orange hover:text-accent-orange/80">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent-orange/10 to-accent-warm/10 rounded-3xl p-8 backdrop-blur-sm border border-accent-orange/20">
                <div className="text-center space-y-6">
                  <div className="bg-accent-orange p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                    <Radio className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">24/7 Broadcasting</h3>
                    <p className="text-text-secondary">
                      Our radio never sleeps. Tune in anytime for music, talk shows, and campus updates.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    >
                      Schedule
                    </Button>
                    <Button className="bg-accent-warm hover:bg-accent-warm/90 text-white">Listen Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-bg/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.02}
              textClassName="text-text-primary"
            >
              Join Voice IT
            </ScrollFloat>
            <p className="text-xl text-text-secondary mt-4">
              Ready to amplify your voice? Get in touch with us and become part of our community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-orange/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-accent-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <p className="text-text-secondary">voiceit@vit.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-warm/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-accent-warm" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <p className="text-text-secondary">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-orange/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-accent-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Location</p>
                      <p className="text-text-secondary">VIT Chennai Campus, Kelambakkam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent-warm text-accent-warm hover:bg-accent-warm hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-lightest border-neutral-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-6">Join Our Club</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">First Name</label>
                      <Input className="border-neutral-light focus:border-accent-orange" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
                      <Input className="border-neutral-light focus:border-accent-orange" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                    <Input type="email" className="border-neutral-light focus:border-accent-orange" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Phone</label>
                    <Input type="tel" className="border-neutral-light focus:border-accent-orange" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Why do you want to join Voice IT?
                    </label>
                    <Textarea className="border-neutral-light focus:border-accent-orange" rows={4} />
                  </div>
                  <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white py-3 rounded-full font-semibold">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-lightest/90 backdrop-blur-sm text-text-primary py-12 relative border-t border-neutral-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-accent-orange p-2 rounded-full">
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Voice IT</span>
              </div>
              <p className="text-text-secondary">
                VIT Chennai's premier radio club, amplifying voices and creating connections through the power of audio.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-text-primary">Quick Links</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-accent-orange transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("events")}
                    className="hover:text-accent-orange transition-colors"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:text-accent-orange transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("live")}
                    className="hover:text-accent-orange transition-colors"
                  >
                    Live Radio
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-text-primary">Programs</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a href="#" className="hover:text-accent-orange transition-colors">
                    RJ Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent-orange transition-colors">
                    Podcast Creation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent-orange transition-colors">
                    Voice Acting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent-orange transition-colors">
                    Audio Production
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-text-primary">Contact Info</h4>
              <div className="space-y-2 text-text-secondary">
                <p>VIT Chennai Campus</p>
                <p>Kelambakkam, Tamil Nadu</p>
                <p>voiceit@vit.ac.in</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-medium mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; 2024 Voice IT - VIT Chennai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
