'use client'
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {


  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    })
    setData(response.data);
    


  }

  useEffect(() => {
    fetchBlogData();
  }, [])

  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get started <Image src={assets.arrow} alt='' />
        </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='mt-4 border-4 border-white' src={data.image} width={1280} height={720} alt='' />
      <h1 className='my-8 text-[35px] font-semibold'>Introduction:</h1>
      <p className='text-[15px]'>{data.description}</p>
      <h3 className='my-5 text-[22px] font-semibold'>Step 1: Self Reflection and Goal Setting</h3>
      <p className='my-3 text-[15px] '>Self-reflection is the process of examining your own thoughts, feelings, actions, and outcomes. It involves asking yourself questions, exploring your motivations, identifying your strengths and weaknesses, and evaluating your results. Self-reflection can help you gain insight into yourself and your situation, and improve your decision-making and problem-solving skills.Self-reflection can help you set SMART goals by enabling you to clarify what you want to achieve, why you want to achieve it, and how you can achieve it. By reflecting on your values, interests, needs, and aspirations, you can define specific and relevant goals that align with your purpose and vision. By reflecting on your resources, skills, and opportunities, you can determine measurable and achievable goals that match your capabilities and potential. By reflecting on your timeline, priorities, and milestones, you can establish time-bound and realistic goals that keep you focused and motivated.</p>
      <p className='my-3 text-[15px] '>Practicing self-reflection for SMART goals can be done in various ways, such as journaling, meditation, coaching, or peer support. To make it a regular and structured habit that works for you, set aside some time and space for self-reflection at the beginning or end of the day, week, or month. Utilize a tool or method that suits your preferences, like a notebook, an app, a checklist, or a template. Then ask yourself open-ended and specific questions related to the SMART criteria. Be honest and objective with yourself while avoiding judgment or criticism; focus on facts and evidence rather than opinions or assumptions. Be positive and constructive with yourself while acknowledging your efforts and achievements; emphasize solutions and opportunities rather than problems or limitations. Lastly, review and revise your goals as needed while keeping them SMART but also flexible and adaptable to changing circumstances.</p>
      <h3 className='my-5 text-[22px] font-semibold'>Step 2: The Advantages and Challenges of Being a Lifestyle Entrepreneur</h3>
      <p className='my-3 text-[15px] '>If you Google what the life of a lifestyle entrepreneur is really like, you’ll find lots of answers. The truth? Well, the truth, as always, depends on your unique situation.

        As a lifestyle entrepreneur, YOU are in control of your work/life balance. It’s not your employer, manager, or anybody else for that matter. It’s you. You also set your own schedule and make your life around what you want to do, how, and where you want to do it. This sounds too good to be perfect, we agree, but that is why, naturally, everyone is attracted to this unique work style.

        Well, it’s time to get realistic now and discuss lifestyle businesses in more detail. So, today, we intend to get into the advantages and disadvantages of this modern approach and answer what is a lifestyle entrepreneur, as well as strategies for those professionals wanting to jump into this lifestyle entrepreneurship. Now, let’s get to business!
        People who run lifestyle businesses prefer not to be bound by the typical 9-to-5 job structure. So, they work from wherever they want. They also work when they want, whether that’s early morning or evening. As long as they have the essential tools to do their job, they’re good. That’s usually a stable internet connection and a laptop, so they’re quite flexible to work from any location their hearts desire that day.</p>
      <p className='my-3 text-[15px] '>A lifestyle entrepreneur is someone who changes their lifestyle by starting a business based on their passion. Their driving force is not financial gain or the prospect of substantial earnings in their newfound profession. Contrarily, the ambition for these kinds of entrepreneurs is not a financial acquisition but rather the pursuit of autonomy and individual wellness. They want to be fulfilled and content. Doing something they love and making it their career is their main motivator. But here are some others that are as interesting:

        Independence and freedom
        More time for themselves
        Flexibility
        Less anxiety
        Quality family and friends time
        Inner peace
        People who run lifestyle businesses prefer not to be bound by the typical 9-to-5 job structure. So, they work from wherever they want. They also work when they want, whether that’s early morning or evening. As long as they have the essential tools to do their job, they’re good. That’s usually a stable internet connection and a laptop, so they’re quite flexible to work from any location their hearts desire that day.</p>
      <h3 className='my-5 text-[22px] font-semibold'>Step 3: Technology for Career advancement in development</h3>
      <p className='my-3 text-[15px] '>The first step in creating a career development plan is to assess your current skills, interests, values, and goals. Technology can help you do this by providing online assessments, quizzes, surveys, and feedback tools that can give you insights into your strengths, weaknesses, preferences, and aspirations. You can use these results to identify your gaps, opportunities, and areas for improvement, and to set realistic and measurable objectives for your career growth.</p>
      <p className='my-3 text-[15px] '>The next step is to explore your options and opportunities in the labor market, and to research the trends, demands, and requirements of your desired career path. Technology can help you do this by offering online resources, databases, platforms, and networks that can give you access to information, advice, guidance, and support from various sources. You can use these tools to discover new fields, industries, roles, and employers, and to learn about the skills, qualifications, and expectations they are looking for.</p>


      <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}>
        
      </div>
      <div className='my-24'>
        <p className='text-black font font-semibold my-4'>Share this article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt='' />
          <Image src={assets.twitter_icon} width={50} alt='' />
          <Image src={assets.googleplus_icon} width={50} alt='' />
        </div>
      </div>
    </div>
    <Footer />
  </> : <></>
  )

}
export default Page
