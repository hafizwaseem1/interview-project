import React from 'react'
import { RiTeamFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { IoEyeSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FaDigitalOcean } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { LiaLinode } from "react-icons/lia";
import { FaCloudflare } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { ImSphere } from "react-icons/im";
import { IoIosCloudUpload } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { FaJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Problem from "../assets/problem.jpg"


const home = () => {
  return (
    <div className='bg-[#2c0909] pb-[2vw]'>
      <div className='pt-[4vw] flex justify-around'>

        {/* <div class="w-[30vw] h-[15vw] bg-transparent border-l-4 border-dotted border-red-500 rounded-l-full"></div>
        <div class="w-48 h-24 bg-transparent border-l-4 border-dotted border-red-500 rounded-l-full"></div> */}
        <div className="relative flex items-center justify-center w-16 h-16 border border-red-500 shadow-inner rounded-full mt-[7vw]">
          <RiTeamFill fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1" className='w-10 h-10 text-white' />
          <div class="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50"></div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-[2vw]'>From Concept To Code</p>
          <p className='text-[2vw] text-red-600'>We Make It Happen</p>
          <p className='text-[0.7vw] mt-[1vw]'>We Help Brands And B2B Enterprises Build Amazing</p>
          <p className='text-[0.7vw]  mb-[1vw]'>Websites That Convert Their Visitors To Paying Customers</p>
          <div className='relative flex'>
            <button className=' bg-[#972222] rounded-3xl flex w-[12vw] h-[3vw] justify-center items-center mt-[1vw] shadow-2xl'><IoIosCall size={15} color='white' className='mr-[0.3vw]' />  Lets have a call</button>
            <div class="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50"></div>
          </div>

        </div>
        <div className='mt-[5vw]'>
          <div className="relative flex items-center justify-center w-10 h-10 border border-red-500 shadow-inner rounded-full  ml-[3vw]">
            <IoEyeSharp

              color='white'
              stroke-width="1" className='w-6 h-6' />
            <div class="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50"></div>
          </div>
          <div className='flex'>
            <div className="relative flex items-center justify-center w-14 h-14 border border-red-500 shadow-inner rounded-full ">
              <GiProgression
                color='white'
                stroke-width="1" className='w-9 h-9' />
              <div class="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50"></div>
            </div>
            <div className="relative flex items-center justify-center w-8 h-8 border border-red-500 shadow-inner rounded-full mt-[0.5vw] ml-[0.65vw]">
              <FaDollarSign

                color='white'
                stroke-width="1" className='w-5 h-5' />
              <div class="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-[1vw]'>
        <CiDesktopMouse2 size={20} color='white' className='ml-[47.95vw] ' />

        <div class="relative flex flex-col items-center ml-[-1.35vw] mt-[0.5vw]">
          <div class="w-[0.1vw] h-32 bg-white "></div>

          <div class="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-white mr-[0.0425vw]"></div>
        </div>
        <p className='text-[0.8vw] ml-[44vw] mt-[1vw]'>TRUSTED BY OUR PARTNERS</p>
      </div>
      <div className='flex justify-around w-[70vw] ml-[15vw] mt-[2vw] pb-[2vw]'>
        <FaDigitalOcean size={20} color='white' />
        <TbBrandAzure size={20} color='white' />
        <FaGithub size={20} color='white' />
        <SiGooglecloud size={20} color='white' />
        <LiaLinode size={20} color='white' />
        <FaCloudflare size={20} color='white' />
      </div>
      <div className='mt-[2vw]'>
        <p className='text-[1.5vw] ml-[45vw]'>What we Offer</p>
        <div className='border border-red-500 rounded-3xl w-[25vw] justify-center text-center text-[1vw] ml-[37vw] mt-[0.5vw]'>Our Experts Will Help You In Following Fields</div>
        <div className='flex justify-around mt-[2vw]'>
          <div className="bg-red-500 rounded-md relative w-[15vw] h-[20vw] overflow-hidden">
            <p className="absolute top-0 left-0 text-[6vw] text-white opacity-20 z-10 pl-2">01</p>
            <p className='mt-[5vw] ml-[2vw] flex'><MdDeveloperBoard size={30} />Development</p>
            <div className="bg-red-600 w-[11vw] h-[12.5vw] ml-[4vw] mt-[0.5vw] rounded-tl-md rounded-br-md">
              <p className='text-[0.8vw] flex pt-[1vw] pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />UIUX</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />DevOps</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Web Design</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Frontend Dev</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Backend Dev</p>
            </div>

          </div>
          <div className="bg-red-500 rounded-md relative w-[15vw] h-[20vw] overflow-hidden">
            <p className="absolute top-0 left-0 text-[6vw] text-white opacity-20 z-10 pl-2">02</p>
            <p className='mt-[5vw] ml-[2vw] flex'><ImSphere size={30} />MSP</p>
            <div className="bg-red-600 w-[11vw] h-[12.5vw] ml-[4vw] mt-[0.5vw] rounded-tl-md rounded-br-md">
              <p className='text-[0.8vw] flex pt-[1vw] pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Infrastructure Manager</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Managed Monitoring</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Business Continuity</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Managed Cyber</p>
            </div>

          </div>
          <div className="bg-red-500 rounded-md relative w-[15vw] h-[20vw] overflow-hidden">
            <p className="absolute top-0 left-0 text-[6vw] text-white opacity-20 z-10 pl-2">03</p>
            <p className='mt-[5vw] ml-[2vw] flex'><IoIosCloudUpload size={30} />Cloud</p>
            <div className="bg-red-600 w-[11vw] h-[12.5vw] ml-[4vw] mt-[0.5vw] rounded-tl-md rounded-br-md">
              <p className='text-[0.8vw] flex pt-[1vw] pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />AWS</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />AZURE</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Multi-Cloud</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />SRE Strategy</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Server Less</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Hybrid Strategy</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Containerisation</p>
            </div>

          </div>
          <div className="bg-red-500 rounded-md relative w-[15vw] h-[20vw] overflow-hidden">
            <p className="absolute top-0 left-0 text-[6vw] text-white opacity-20 z-10 pl-2">04</p>
            <p className='mt-[5vw] ml-[2vw] flex'><GrShieldSecurity size={30} />Cyber</p>
            <div className="bg-red-600 w-[11vw] h-[12.5vw] ml-[4vw] mt-[0.5vw] rounded-tl-md rounded-br-md">
              <p className='text-[0.8vw] flex pt-[1vw] pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Cyber Audit</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Cyber governence</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Security as a service</p>
              <p className='text-[0.8vw] flex pl-[1vw]'><FaCheckCircle className='pr-[0.3vw]' size={15} />Penetration Testin</p>
            </div>

          </div>
        </div>
        <p className='text-[1.5vw] ml-[45vw] mt-[2vw] mb-[2vw]'>Our Super Powers</p>
        <div className='flex justify-around'>
          <FaJs size={20} color='white' />
          <SiPrisma size={20} color='white' />
          <SiPostgresql size={20} color='white' />
          <SiMongodb size={20} color='white' />
        </div>
      </div>
      <div className='mt-[2vw] px-10'>
        <p className='text-gray-200 text-[0.8vw] text-center'>Read Our Blog</p>
        <p className='text-[1.5vw] text-center'>Read daily news about</p>
        <p className='text-[1.5vw] text-center'>startup companies</p>
        <div className='border border-gray-200 flex rounded-md px-6 py-10'>
          <img src={Problem} alt='Problem' className='rounded-md w-[16vw] h-[12vw]' />
          <div>
            <p className='text-[1vw] ml-[1vw]'>Not Another Framework</p>
            <p className='text-[0.6vw] ml-[1vw]'>We Brought all the the Remix goodies over to React Router </p>

            <p className='text-[0.8vw] flex pl-[1vw] text-end'><FaCheckCircle className='pr-[0.3vw]' size={15} />Collaboration</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className='flex justify-around'>
        <div className='ml-[25vw] mt-[10vw]'>
        <p className='text-gray-200 text-[0.8vw] text-center'>Got a project in mind?</p>
        <p className='text-[1.5vw] text-center'>Reserve a Call</p>
        <p className='text-[0.8vw] flex pl-[1vw] text-end'><FaCheckCircle className='pr-[0.3vw]' size={15} />An indepth session to understand your needs</p>
        <p className='text-[0.8vw] flex pl-[1vw] text-end'><FaCheckCircle className='pr-[0.3vw]' size={15} />Learn which plan is right for your team</p>
        <p className='text-[0.8vw] flex pl-[1vw] text-end'><FaCheckCircle className='pr-[0.3vw]' size={15} />Get onboarding help</p>
        <p>Technical support or some query?</p>
        </div>
        <div class=" px-6 py-24 sm:py-32 lg:w-1/2">
          <div class="mx-auto max-w-1/2 ml-[2vw]">
            <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-[2vw]">Tell Us About Yourself</h2>
          </div>
          <form action="#" method="POST" class="mx-auto  max-w-xl sm:mt-10">
            <div class="grid grid-cols-1 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="company" class="block text-[1vw] font-semibold text-white">Full Name</label>
                <div class="">
                  <input type="text" name="company" id="company" autocomplete="organization" placeholder='Your Full Name' class="block w-1/2 h-[2vw] rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="company" class="block text-[1vw] font-semibold text-white">Work Email</label>
                <div class="">
                  <input type="email" name="company" id="company" autocomplete="organization" placeholder='Your Email' class="block w-1/2 h-[2vw] rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-[1vw] font-semibold text-white">Compnay Size</label>
                <div class="">
                  <input name="email" id="email" autocomplete="email" placeholder='1-20' class="block w-1/2 h-[2vw] rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-[1vw] font-semibold text-white">How Can We Help?</label>
                <div class="">
                  <textarea name="message" id="message" rows="4" placeholder='I am interested in RedTilt for my team. I would like to learn more about it.....' class="block w-1/2 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                </div>
              </div>

            </div>
            <div class="mt-10 w-1/2 flex">
              <p className='text-[0.8vw]'>You Can Also Email Us At Apac@Redtilt.Team</p>
              <button type="submit" class="block w-[10vw]  rounded-md bg-[#972222] px-3.5 py-2.5 text-center text-[0.8vw] font-semibold text-white shadow-sm hover:bg-[#a03939] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      {/* newsletter */}
      <div className='bg-[#641414] flex justify-around w-[50vw] rounded-md ml-[24.5vw] py-3'>
        <div>
        <p className='text-[1.3vw]'>NewsLetter</p>
        <p>Be the first one to know about insights, technologies and innovations.</p>
        </div>
        <button type="submit" class="block w-[6vw] h-[2vw]  rounded-md bg-[#972222] mt-[1vw] text-center text-[0.8vw] font-semibold text-white shadow-sm hover:bg-[#a03939] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</button>
      </div>
    </div>
  )
}

export default home
