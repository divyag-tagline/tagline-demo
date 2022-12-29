import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empowerbox, ExperienceDetailsRight, FooterHrInquiry, GlobalPresence, OurBlogs, RatingBox, ServiceCard2, TechnologyBackEnd } from './common';

interface Headtext {
  headText: string,
  headText1: string,
  headText2: string,
  headText3: string,
  headText4: string,
  headText5: string,
  headText6: string,
  headButton: string,
  img?: string
}
interface ServiceCard1 {
  text1: string,
  text2: string,
  text3: string
}
interface ServiceCard3 {
  heading: string,
  span: string,
  buttonText: string
}

interface ExperienceDetailsLeft {
  heading: string,
  details: string,
  expButton: string,
  img?: string
}

interface ChooseTagline {
  title: string,
  details: string
}



interface Empowerbox1 {
  empower: string,
  your: string,
  business: string,
  heading: string,
  boxButton: string
}
interface OurClientele {
  title: string,
  detail1: string,
  details2: string
}



interface AwardsRecognitions {
  heading1?: string,
  heading2?: string,
}

interface FormDetails {
  title: string,
  formButton: string
}

interface FooterDetails {
  title: string,
  heading: string,
  heading1: string,
  heading2: string,
  heading3: string,
  footerButton: string,
  details: string
}



interface FooterHelp {
  heading?: string,
  title: string,
  class: string
}

interface FooterServices {
  title: string,
  mobile: string,
  webDevlopment: string,
  webDesign: string,
  uiUxDesign: string,
  digitalMarketing: string
}

interface FooterHireDevlopers {
  title: string,
  python: string,
  angular: string,
  ror: string,
  flutter: string,
  reactJs: string,
  reactNative: string
}

interface FooterLastPortion {
  img: string,
  followUs: string,
  portion1: string,
  portion2: string,
  portion3: string,
  portion4: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  logo: string = "../assets/images/tagline.png"
  caseStudy: string = "Case Study";
  headers: string[] = ["About Us", "Hire Developer", "Technology", "Industry",]
  buttonText: string = 'GET QUOTE';
  ourTechnologies: string = 'Our Technologies';
  headtext: Headtext = {
    headText: 'Software Development Company',
    headText1: 'IT Consultancy',
    headText2: 'Serving',
    headText3: 'Serving',
    headText4: 'Start-UPs To Fortune 500',
    headText5: 'With the help of Innovation and Technology, We give you the power to',
    headText6: 'change the world with your ideas.',
    headButton: 'Schedule a meeting',
    img: "../assets/images/images.png"

  }

  service: string = "Our Services";
  serviceCard1: ServiceCard1 = {
    text1: 'Find the',
    text2: 'right offers',
    text3: ' for you.'
  }
  serviceCard2: ServiceCard2[] = [
    {
      img: '../assets/images/mobile.png',
      heading: 'Application Management and Modernisation',
      description: 'Here at Tagline, we provide the service of Application management and \
    modernisation for the growth of your business. We update the old \
    application with new approaches, including the latest languages, \
    frameworks, and platforms.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/web-design-icon.webp',
      heading: 'Software Product Engineering',
      description: 'We are dedicated to providing the best Software product engineering\
    services for your business. Our team of developers provides the service\
    of software product engineering and it includes designing, developing,\
    testing, and deploying the software products.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/testing-icon.webp',
      heading: 'Agile QA, Automation, and DevOps',
      description: 'At Tagline Infotech, we have a team of dedicated developers that provide\
    the services like Agile QA, Automation, and DevOps. Our DevOps engineers\
    constantly do the testing of software while Agile QA ensures the quality\
    of the software.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/uiux-design-icon.webp',
      heading: 'Digital Strategy & Design',
      description: 'Tagline Infotech helps clients to create a clear digital strategy and\
    design for the growth of their businesses. Our developers and UI UX\
    designers put the user first to create easy-to-navigate interfaces and\
    smooth end-to-end experiences.',
      learMore: 'Learn More ->'
    }];
  serviceCard6: ServiceCard3 = {
    heading: 'Don\'t know what to choose?',
    span: 'Drop us a line.',
    buttonText: 'Contact Us'
  }
  experienceDetailsLeft: ExperienceDetailsLeft = {
    heading: 'We have the experience',
    details: ' We have got the experience to make your dream come true, and these stats\
    speak for themselves: we have 150+ clients worldwide in only three years,\
    and we have worked on over 200 projects, all of which have been finished\
    successfully and on schedule, with 100% client satisfaction. We also have\
    60K+ hours of freelancing experience',
    expButton: 'Contact Us',
    img: "../assets/images/woman.webp"
  }
  expProfessional: ExperienceDetailsRight[] = [{
    img: "../assets/images/contentlogo.webp",
    heading: '125+',
    heading1: 'Professional'
  }, {
    img: "../assets/images/contentlogo2.webp",
    heading: '450+',
    heading1: 'Completed Projects'
  }, {
    img: "../assets/images/contentlogo3.webp",
    heading: '150+',
    heading1: 'Freelance Hours'
  }, {
    img: "../assets/images/contentlogo4.webp",
    heading: '5+',
    heading1: 'Years of experience'
  }];
  technologySidebar: string[] =
    ['Web', 'Mobile', 'Desktop', 'Plateform', 'Database / Data Storage', 'Big Data', 'Machine Learning', 'DevOps', 'Clouds']
  technologyBackEndIcon: TechnologyBackEnd[] = [{
    backEnd: 'Back End',
    img: "../assets/images/ror.png",
    language: "Ruby on Rails"
  }, {
    img: "../assets/images/python.png",
    language: "Python"
  }, {
    img: "../assets/images/node_js.svg",
    language: "Node Js"
  }, {
    img: "../assets/images/php.png",
    language: "PHP"
  }, {
    img: "../assets/images/android-java.png",
    language: "Java"
  }, {
    img: "../assets/images/go.png",
    language: "Go Language"
  }]
  technologyFrontEndIcon: TechnologyBackEnd[] = [{
    backEnd: 'Front End',
    img: "../assets/images/react-js.png",
    language: "React Js"
  }, {
    img: "../assets/images/angular-icon.png",
    language: "Angular"
  }, {
    img: "../assets/images/typescript-icon.png",
    language: "Typescript"
  }, {
    img: "../assets/images/vue-js.png",
    language: "Vue Js"
  }, {
    img: "../assets/images/meter-js.png",
    language: "Mateor Js"
  }, {
    img: "../assets/images/javascript-icon.png",
    language: "Java Script"
  }, {
    img: "../assets/images/html5.png",
    language: "HTML 5"
  }];
  chooseTagline: ChooseTagline = {
    title: "Why Choose Tagline Infotech ?",
    details: 'We have a team of developers who use their expertise to provide complete web\
    development, mobile app development, testing & assurance, SaaS development,\
    and designing services. Tagline Infotech has a team of developers that you can\
    hire by mentioning the requirements for your project. Save time and money by\
    hiring our developers for your startup or large-scale company. Our team of\
    developers has the experience to understand the business ideas of the clients\
    to provide solutions that focus on the core values of the business. Here you\
    will find some benefits of hiring developers from us.'
  }
  boxCards: Empowerbox[] = [{
    img: "../assets/images/choose-roadmap.png",
    heading: '01',
    heading1: 'Progressive Roadmap',
    detail: 'Our team of developers creates a progressive roadmap that includes a\
      strategic plan to define a goal and major steps to reach that goal. We\
      have a team of developers that uses progressive',
  }, {
    img: "../assets/images/choose-project.png",
    heading: '02',
    heading1: 'Efficient Project Management',
    detail: 'We believe in efficient project management and our experienced developers\
    use project management tools like Wrike and Zoho. Our developers use these\
    project management tools efficiently',
  }, {
    img: "../assets/images/choose-flexible.svg",
    heading: '03',
    heading1: 'Flexible Engagement Model',
    detail: 'We provide flexible engagement models so that clients can hire developers\
    for their projects. These engagement models are flexible so if you aren’t\
    satisfied with any model you can switch to another.',
  }, {
    img: "../assets/images/choose-cost.png",
    heading: '04',
    heading1: 'Cost-Effective',
    detail: 'Our team of developers provides the best development services at\
    affordable prices. We believe that high-quality solutions can be delivered\
    at cost-effective prices and that’s why we provide different hiring',
  }, {
    img: "../assets/images/choose-delivery.png",
    heading: '05',
    heading1: 'Consistent Delivery',
    detail: `Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.`
  }];
  empowerboxLast: Empowerbox1 = {
    empower: 'Empower',
    your: 'Your',
    business: 'Business',
    heading: 'with Dedicated Developers',
    boxButton: 'Talk to our Exper'
  }
  ourClientele: OurClientele = {
    title: 'Words From Our Clientele',
    detail1: `Good things come for those who work hard, and that's why our clientele
    appreciate our efforts. Tagline Infotech provides the best services to its
    clients, and it is reflected through our ratings and reviews on various
    platforms.`,
    details2: `We are a well-known IT services company on Clutch. Check out what our
    customers have to say about our services. Read their ratings, feedback,
    and stories about partnering with us before making your own decision.`
  }
  ratingStars: RatingBox[] = [{
    heading: 4.1,
    detail1: `"Everything always turns out perfectly done."`,
    detail2: 'IT & Computer Scientist, Self-Employed',
    review: 'Verified Review'
  }, {
    heading: 3.2,
    detail1: `"They understand complex technical requirements, and they have a team
    that quickly gets up to speed."`,
    detail2: 'Founder, Cimpro.io',
    review: 'Verified Review'
  }, {
    heading: 2.2,
    detail1: `"…they’re able to tackle pretty much everything you throw at them."`,
    detail2: 'CEO, Promoprep',
    review: 'Verified Review'
  }, {
    heading: 2.5,
    detail1: `“When things go wrong, they were good at adapting and problem solving on
    the fly.”`,
    detail2: 'CEO, SupplementSnoop',
    review: 'Verified Review'
  }, {
    heading: 1.5,
    detail1: ` "The team takes up new challenges and finishes the project on time."`,
    detail2: 'Software Architect, Specialty Finance Company',
    review: 'Verified Review'
  }, {
    heading: 3.5,
    detail1: ` "We are getting close to launch now and it's been a tremendous help to
    have their developers on my team."`,
    detail2: 'Owner, e-Commerce Support Company',
    review: 'Verified Review'
  }];
  awardsRecognitions: AwardsRecognitions = {
    heading1: `Awards & `,
    heading2: `Recognitions`,
  }
  awardsRecognitionsImg: string[] =
    ["../assets/images/award-2.webp", "../assets/images/award-3.webp", "../assets/images/award-4.webp", "../assets/images/award-5.webp", "../assets/images/award-6.webp"]
  ourBlogs: OurBlogs[] = [{
    title: 'Our Blogs',
    img: "../assets/images/Python-vs-Java.png",
    blogButton: 'Python',
    blogDate: '15/12/22',
    heading: "Python vs Java Comparison Of",
    heading1: `Quick Summary The most difficult decision for an entrepreneur is
    deciding on a programming...`,
    readMore: 'Read More ->'
  }, {
    img: "../assets/images/Node.js-Application.png",
    blogButton: 'Node Js',
    blogDate: '9/12/22',
    heading: "Best Practices for Node.js Application Development:...",
    heading1: `Quick Summary Want to know about node js architecture and node js
    architecture best`,
    readMore: 'Read More ->'
  }, {
    img: "../assets/images/Kotlin-vs-Java.png",
    blogButton: 'RoR',
    blogDate: '9/12/22',
    heading: "JavaScript vs Ruby On Rails: What...",
    heading1: `Quick Summary: Ruby on Rails and JavaScript both languages are both
    widely popular among`,
    readMore: 'Read More ->'
  }];
  globalPresence: GlobalPresence[] = [{
    title: 'Our Global Presence',
    countryName: 'India (HQ)',
    address: `Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota
    Varachha, Surat, Gujarat 394101`,
    mobileNo: `+91 9913 808 285`
  }, {
    countryName: 'U.S.A',
    address: `2885 Old Zion, Cemetery Rd, Loganville, Ga 30052`,
    mobileNo: `+1 (404) 483-3388`
  }, {
    countryName: 'United Kingdom',
    address: `65 Byron road North wembley Middlesex, london HA0 3PB`,
    mobileNo: `+44 78240 75400`,
    gmail: 'solutions@taglineinfotech.com'
  }];
  formDetails: FormDetails = {
    title: 'Get Your Free Quote Today',
    formButton: 'Send Message'
  }
  footerDetails: FooterDetails = {
    title: 'Get latest from Tagline Infotech',
    heading: 'Share your email so we can send you',
    heading1: 'guides',
    heading2: 'and',
    heading3: 'industry news.',
    footerButton: 'Subscribe',
    details: 'You can unsubscribe at any time. Read our privacy policy.'
  }
  footerHrInquiry: FooterHrInquiry[] = [{
    title: 'HR Inquiry',
    gmail: 'hr@taglineinfotech.com',
    mobileNo: '+91 6354362521'
  }, {
    title: 'Sales Inquiry',
    gmail: 'solutions@taglineinfotech.com',
    companyName: 'Tagline infotech'
  }];
  footerHelp: FooterHelp[] = [
    {
      heading: 'Help & Advice',
      title: 'Career',
      class: 'bi bi-telephone-fill'
    },
    {
      title: 'About Us',
      class: 'bi bi-file-person-fill'
    },
    {
      title: 'Contact Us',
      class: 'bi bi-envelope-fill'
    },
    {
      title: 'Blog',
      class: 'bi bi-camera-video'
    },
    {
      title: 'Privacy Policy',
      class: 'bi bi-file-earmark-lock2-fill'
    },
    {
      title: 'Sitemap',
      class: 'bi bi-diagram-3-fill'
    }
  ]
  footerServices: string[] = [
    'Mobile',
    'web Development',
    'Web Design',
    'UI / UX Design',
    'Digital Marketing'
  ]
  footerHireDevlopers: string[] = [

    'Hire Python Developer',
    'Hire Angular Developer',
    'Hire ROR Developer',
    'Hire Flutter Developer',
    'Hire React Js Developer',
    'Hire React Native Developer'
  ]
  footerLastPortion: FooterLastPortion = {
    img: "../assets/images/tagline-stamp.png",
    followUs: 'Follow Us',
    portion1: '©',
    portion2: '2022',
    portion3: 'All rights reserved by',
    portion4: 'Tagline Infotech LLP',
  }
}
