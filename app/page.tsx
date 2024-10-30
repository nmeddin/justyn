'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dumbbell, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import JustynImage from '../public/images/Justyn.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="px-4 lg:px-6 h-14 flex bg-green-600 items-center">
        <Link className="flex items-center justify-center" href="#">
          <Dumbbell className="h-6 w-6 mr-2" />
          <span className="font-bold">Justyn Williams</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 text-white text-center px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="mx-auto max-w-[700px] text-xl mb-8">
              Personalized fitness training to help you achieve your goals and live your best life.
            </p>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-100 flex items-center justify-center overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Justyn Williams - Personal Trainer"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="600"
                src={JustynImage}
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hi, I'm Justyn Williams, a certified personal trainer with over 10 years of experience. I'm passionate about
                    helping people achieve their fitness goals and live healthier lives.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Certified Personal Trainer (NASM-CPT)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Specialization in Weight Loss and Muscle Gain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Nutrition Coach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 flex items-center justify-center overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Contact Me</h2>
              <p className="max-w-[600px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your fitness journey? Get in touch with me today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
              <div className="flex flex-col items-center space-y-2 pt-4 text-blue-700">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Justyn@fitwithJustyn.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Fitness St, Healthy City, 12345</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 FitWithJustyn. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}