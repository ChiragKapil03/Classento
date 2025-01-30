import { useState , useRef } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import leftPhoto from './assets/left.png';
import rightPhoto from './assets/backdrop1.png';
import smile from './assets/Smile.png';
import globe from './assets/globe.png';
import insta from './assets/instagram.png';
import x from './assets/twitter.png';
import linkedin from './assets/linkedin.png';
import hat from './assets/hat.png';
import vector from './assets/comma.png';
import 'animate.css';
import Photo from './Components/Photo/Photo';

function App() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXkYiMTYbB8Vj4VQ3VKLetr9BhoqxmrEflg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCD5qwhC0TkWe8pUBza0WJr-0cmx5qD89iA&s",
    "https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.jpg?s=612x612&w=0&k=20&c=PYpAFHxiUKX2i1D8w_ElnGsm1B64GBleyF-DfYTLcN0=",
    "https://thumbs.dreamstime.com/b/portrait-professor-pointing-college-student-hands-raised-classroom-professor-pointing-college-student-hands-206872026.jpg",
    "https://media.istockphoto.com/id/1370735949/photo/teen-girl-gestures-while-explaining-something-to-female-teacher.jpg?s=612x612&w=0&k=20&c=I5K1JIPSRCNJTMuhhW0VDEmx9qiPUi7i7o_8BDKZG9g=",
    "https://img.freepik.com/free-photo/here-are-your-test-results-you-got_637285-8656.jpg",
    "https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-546163470-crop.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUoICxEG5GZeBXrAnXMIx6mqXbosu0xEO0xPnqwOpD6pzaKnXsQNGaWHMx-RmeBeoAfg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIAU3CArZVYI-9rmQcjSm2bSKQ8Jfhd8HgAdwKSe3T7uCOjUlm8QSWbvUW4kp6XNZ_AQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6izHO6TXKJ72T45qyvfSU1f7LrNeBh5heNk3x2VNxraT6XXkdgZFKHQLrvZPVnmUHZN4&usqp=CAU",
  ];  
  const images2 = [
    "https://thumbs.dreamstime.com/b/indian-parents-children-happy-family-home-asian-their-kids-sitting-sofa-indoor-lifestyle-41350616.jpg",
    "https://img.freepik.com/premium-photo/happy-indian-family-with-their-kids_582637-13571.jpg",
    "https://images.picxy.com/cache/2020/9/30/4a74df66a965988f08c70ffca2b126b5.jpg",
    "https://images.indianexpress.com/2018/07/indian-parents-kids-studying-parenting-thinkstockphotos-8201.jpg",
    "https://static.toiimg.com/thumb/imgsize-70250,msid-97576948/97576948.jpg?width=500&resizemode=4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGliFaQAES9mBs4e9TrINnpNIVqgLco3ozgw&s",
    "https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-546163470-crop.jpg",
    "https://assets.thehansindia.com/hansindia-bucket/9137_Indian_Parents.jpg",
    "https://static.toiimg.com/thumb/msid-54913804,width-1280,height-720,resizemode-4/54913804.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6izHO6TXKJ72T45qyvfSU1f7LrNeBh5heNk3x2VNxraT6XXkdgZFKHQLrvZPVnmUHZN4&usqp=CAU",
  ];  

  
  const [activeTab, setActiveTab] = useState("about");

  // Object containing content for each tab
  const tabContent = {
    about: "At Classento, we are revolutionizing education by making learning accessible, engaging, and impactful for children worldwide. We believe every child deserves high-quality education tailored to their unique needs, inspiring curiosity and a passion for learning. Our platform breaks traditional barriers through personalized assessments, innovative teaching methods, and real-time interactivity.\n By integrating Al- powered learning, we adapt to each student's learning style and pace, ensuring personalized and effective education. From mastering Maths and English to exploring Science, Coding, and Chess, we make every learning experience both enjoyable and impactful.",
    vision: "To transform the way the world learns by creating a platform that empowers millions of children to access affordable, high-quality education, anytime, anywhere.\n With the integration of Al-powered learning, we aim to personalize education at scale, ensuring every child benefits from tailored, engaging, and impactful lessons delivered by passionate educators from around the globe. This vision reflects your mission to make learning accessible, innovative, and transformative for a brighter future. Let me know if you'd like further refinement!",
    mission: "To be the most affordable and budget-friendly global tutoring platform, delivering high-quality, Al-powered teaching experiences to millions of children worldwide. We aim to inspire curiosity, foster passion, and empower students to excel across a diverse range of subjects, making learning engaging, personalized, and impactful.\n At Classento, we are equally committed to creating meaningful economic opportunities for talented educators globally, enabling them to share their expertise and innovation on an international platform. Our mission is to redefine education, fostering a community where knowledge and opportunities transcend borders and inspire global growth.",
  };
  
  const galleryRef = useRef(null);

  return (
    <>
      <Header/>

      {/* Hero Section  */}

      <div style={{borderTop:"2px solid rgb(195, 195, 195)"}} className=' bg-gradient-to-b from-sky-100 to-white flex flex-wrap gap-16 sm:gap-0 w-full p-2 justify-center items-center relative pt-10'>
        <p className='h-3 w-3 rounded-3xl bg-gradient-to-r from-blue-300 to-teal-300 absolute top-20 left-48'></p>
        <img src={rightPhoto} alt="" className='h-96 w-80 absolute top-0 left-1'/>
        
        <div className='w-full lg:w-1/2 min-h-[600px] lg:min-h-[600px] flex flex-col p-10 sm:p-24 gap-5 justify-start items-start '>
          <h1 className='text-[40px] md:text-[50px] font-bold'><span className='text-sky-500'>Affordable</span>, <span className='text-violet-600'>AI-Powered</span> <span className='text-teal-500'>Tutoring</span>  From The Best Educators</h1>
          <p className='text-gray-500'>Revolutionizing education with personalized, interactive learning experiences for <span className='text-sky-400 font-bold'>15K+ Students & 50+ countries.</span></p>
          <button className='h-16 w-48 rounded-3xl bg-gradient-to-r from-blue-500 to-teal-300 text-white font-semibold text-lg'>View Courses</button>
          <p className='h-4 w-4 rounded-3xl bg-gradient-to-r from-blue-300 to-teal-300 relative left-48'></p>
        </div>

        <div className='w-full lg:w-1/2  flex justify-center items-center h-[500px] sm:h-[600px] relative'>
          <img src={leftPhoto} alt="" className='absolute top-0 z-10 h-[500px] sm:h-[600px]'/>
          <img src={rightPhoto} alt="" className='hidden lg:block h-96 w-80 absolute top-32 left-1/3 2xl:left-[430px] '/>
        </div>
      </div>

      {/* About us Section  */}

    <div className="px-5 lg:px-24 pt-10 mx-auto w-full">
      <div className='flex items-center gap-4 px-0 lg:px-12'>
        <h1 className="text-[40px] lg:text-[50px] font-bold mb-4 ">Discover Our <span className='text-blue-500'>Journey</span>, Our <span className='text-teal-400'>Vision</span>, Our <span className='text-red-400'>Impact</span> <img src={smile} alt="" className='inline' /></h1>
      </div>
      
      {/* Tab Navigation */}
      <ul className="flex gap-4 lg:px-12">
        <li className={`cursor-pointer font-bold text-lg ${activeTab === "about" ? "text-blue-500 " : ""}`} onClick={() => setActiveTab("about")}>About Us</li>
        <li className={`cursor-pointer font-bold text-lg ${activeTab === "vision" ? "text-blue-500" : ""}`} onClick={() => setActiveTab("vision")}>Vision</li>
        <li className={`cursor-pointer font-bold text-lg ${activeTab === "mission" ? "text-blue-500" : ""}`} onClick={() => setActiveTab("mission")}>Mission</li>
      </ul>
      <br />
      <div className='rounded-3xl p-8 bg-sky-100 flex flex-col lg:flex-row gap-5 justify-evenly w-full lg:w-11/12 mx-auto'>
        {/* Information of Tab */}
        <div key={activeTab} className=" rounded flex flex-col gap-5 w-full lg:w-5/12">
          <p  className='animate__animated animate__zoomIn text-2xl text-teal-500 font-bold'>{activeTab.toUpperCase()}</p>
          <p className='animate__animated animate__fadeIn text-gray-700 font-medium text-lg'>
            {tabContent[activeTab].split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>

        {/* Image of Tab  */}
        <div className='w-full lg:w-5/12 p-2 lg:p-5 rounded-2xl bg-violet-400'>
          <img src="" alt="" className='h-[420px] bg-gray-200 rounded-2xl' />
        </div>
      </div>

    </div>
    
    {/* Gallery Section  */}

    <div>
      <div className="relative flex items-center justify-center w-full p-4">
        {/* Scrollable Image Gallery */}
        <div ref={galleryRef} className="curved-edge flex space-x-4 overflow-x-auto scroll-smooth w-full px-2 py-4 no-scrollbar">
          {images.map((src, index) => (
            <Photo key={index} src={src}/>
          ))}
        </div>
      </div>

      <div className='w-11/12 md:w-2/3 bg-cyan-200 mx-auto p-5 rounded-3xl flex flex-col items-center justify-center min-h-40 '>
        <h1 className='text-[40px] font-bold'>For The <span className='text-violet-600'>Innovators</span> of <span className='text-violet-600'>Tomorrow</span></h1>
        <p className='text-lg text-blue-900'>"At Classento, we don't just see students; we see future leaders, creators, and changemakers. That's why we're passionate about delivering learning that's engaging, personal, and impactful designed to help your child shine brighter every day."</p>
      </div>

      <div className="relative flex items-center justify-center w-full p-4">
        {/* Scrollable Image Gallery */}
        <div ref={galleryRef} className="curved-edge flex space-x-4 overflow-x-auto scroll-smooth w-full px-2 py-4 no-scrollbar">
          {images2.map((src, index) => (
            <Photo key={index} src={src}/>
          ))}
        </div>
      </div>
    </div>

    {/* Meet our Founder Section  */}

    <div className=' w-full bg-cyan-50 md:p-10 p-2'>
      <div className='flex flex-col lg:flex-row gap-20 w-10/12 mx-auto'>
        <div className='w-full lg:w-1/3 flex flex-col gap-2 mx-auto items-center'>
        <div className='bg-gradient-to-r from-blue-500 to-teal-400 p-2 w-[250px] h-[340px] md:w-[350px] lg:h-[400px] rounded-2xl'>
          <img src="https://starsunfolded.com/wp-content/uploads/2020/12/Saurabh-Dwivedi.jpg" alt="" className='h-[320px] w-[240px] md:w-[350px] lg:h-[385px] rounded-2xl  '/>
        </div>
          <p className='text-[30px] md:text-[40px] font-bold'>Saurav Dwivedi</p>
          <p className='text-lg text-gray-500 underline underline-offset-8 decoration-cyan-300 decoration-4'>~ First Teacher, Founder, and CEO of Classento</p>
          <div className='flex gap-3 pt-2'>
            <img src={x} alt="" className='h-8'/>
            <img src={linkedin} alt="" className='h-8'/>
            <img src={insta} alt="" className='h-8'/>
            <img src={globe} alt="" className='h-8'/>
          </div>
        </div>
        <div className='w-full lg:w-2/3 relative'>
          <h1 className='text-[40px] lg:text-[50px] font-bold'>Meet Our <span className='text-blue-600 underline underline-offset-8'>Founder</span> <img src={hat} alt="" className='inline h-32' /></h1>
          <img src={vector} alt="" className='absolute left-[-80px] top-[80px]'/>
          <p className='pt-2 text-lg text-gray-600 font-semibold'>I fell in love with teaching while guiding and mentoring students across Primary, Middle School, and High School levels. My journey as an educator began early-teaching Mathematics and English as a first-year college student. Over the past decade, I've had the privilege of personally teaching and counseling over 10,000 students, shaping their academic and personal growth As an educator, I noticed gaps in traditional learning methods and how online platforms often overlooked the nuances of a student's learning curve and engagement levels.</p>
          <p className='pt-2 text-lg text-gray-600 font-semibold'> This inspired me to reimagine education. I began working closely with parents, counseling them on how to enhance their child's personalized learning journey. Through personalized assessments and initial consultations, I evaluate each student's unique needs and carefully match them with tutors who align with their learning preferences and goals.</p>
          <p className='pt-2 text-lg text-blue-500 font-bold'> Thanks a Million!</p>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
