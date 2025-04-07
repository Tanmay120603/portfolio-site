const bioDetails={
    name:"Tanmay Bhansali",
    role:["Full Stack Developer","UI/UX Designer","Programmer"],
    description:"I am an aspiring web developer with a solid foundation in web development principles and a strong desire to learn and grow in this dynamic field. While I do not yet have professional experience, my enthusiasm for web technologies drives me to constantly expand my knowledge and improve my skills.",
    linkedInUrl:"https://www.linkedin.com/in/tanmay-bhansali/",
    resumeUrl:"https://drive.google.com/file/d/16h_25WoelkNJIUa9GtesgVNjGe-IEoPI/view?usp=drive_link"   
}

const projectDetails=[

    {name:"Magic Estate",description:"Welcome to Magic Estate, your premier destination for finding your dream home. Our user-friendly platform offers an extensive selection of properties, from luxurious estates to cozy apartments, tailored to meet diverse needs and budgets. With advanced search filters, detailed property listings, and high-quality images, discovering your perfect home has never been easier. Our expert team is dedicated to providing personalized support, ensuring a seamless buying or renting experience. Whether you’re a first-time homebuyer or a seasoned investor, Magic Estate is your trusted partner in real estate, turning your property dreams into reality. Explore today and find your magic home.",images:["/Magic-Estate-HomePage.PNG","/Magic-Estate-ListPage.PNG","/Magic-Estate-IndividualPage.PNG","/Magic-Estate-ProfilePage.PNG"],cursorPositions:[{bottom:"28%",right:"45%"},{bottom:"8%",right:"25%"},{bottom:"82%",right:"15%"}],liveUrl:"https://magic-estate-server.onrender.com/"},

    {name:"Code Sync",description:"Crafted a cutting-edge code editor application leveraging React, Tailwind CSS, Express, Node.js, and Socket.IO to facilitate real-time collaborative coding experiences. Users can seamlessly join rooms, code, execute, and witness instant results. Leveraging Socket.IO, the application ensures synchronized updates across all connected users, fostering a dynamic collaborative environment. Furthermore, automatic synchronization welcomes new users into ongoing sessions seamlessly. Emphasizing user experience, the project also features custom error handling with a dedicated 404 page",images:["/CodeSync.png","/CodePage.png","/RunPage.png","/CodeRunnedPage.png"],liveUrl:"https://real-time-code-editor-rho.vercel.app/",cursorPositions:[{bottom:"34%",right:"30%"},{bottom:"90%",right:"39%"},{bottom:"72%",right:"45%"}]},
    
    {name:"Blog-site",description:"Created a blog site where the user can view and explore posts with other features such as protected routes ensuring secure access, guiding users to login if not authenticated, and seamlessly redirecting them back to the intended blog post upon successful login (React-router). The AI Assistance feature allows users to optimize or generate titles/content using the OpenAI API. Personalized Page enables users to manage active/inactive posts with filtering/editing. Backend operations are handled efficiently via Appwrite, while image optimization ensures compressed images and efficient storage (Compressor.js, Appwrite). Responsive design is done through Tailwind CSS ensuring full responsiveness across devices. Data caching implemented with Redux enables seamless page-switching without additional network requests",images:["/Blog-HomePage.png","/Blog-PostPage.png","/Blog-IndividualPost.png","/Blog-AddPostPage.png","/Blog-Ai-Assistance.png"],liveUrl:"https://blog-project-pink.vercel.app/",cursorPositions:[{bottom:"41%",right:"58%"},{bottom:"27%",right:"88%"},{bottom:"79%",right:"65%"},{bottom:"51%",right:"22%"}]}]

    const skillsDetails=[
        {domainName:"Frontend",skills:[{skillName:"React",skillLogo:"/Logos/React-Logo.png"},{skillName:"Redux",skillLogo:"/Logos/Redux-Logo.png"},{skillName:"Framer Motion",skillLogo:"/Logos/Framer-Motion-Logo.png"},{skillName:"Javascript",skillLogo:"/Logos/Js-Logo.png"},{skillName:"Html",skillLogo:"/Logos/Html-Logo.png"},{skillName:"Css",skillLogo:"/Logos/Css-Logo.png"},{skillName:"Tailwind Css",skillLogo:"/Logos/Tailwind-Css-Logo.png"},{skillName:"Sass",skillLogo:"/Logos/Sass-Logo.png"}]},

        {domainName:"Backend",skills:[{skillName:"Node.js",skillLogo:"/Logos/Node-Js-Logo.png"},{skillName:"Express.js",skillLogo:"/Logos/Express-Logo.png"},{skillName:"Mongo DB",skillLogo:"/Logos/Mongodb-Logo.png"},{skillName:"Firebase",skillLogo:"/Logos/Firebase-Logo.png"},{skillName:"Appwrite",skillLogo:"/Logos/Appwrite-Logo.png"},{skillName:"Mongoose",skillLogo:"/Logos/Mongoose-Logo.png"}]},
        
        {domainName:"Others",skills:[{skillName:"Git",skillLogo:"/Logos/Git-Logo.png"},{skillName:"Github",skillLogo:"/Logos/Github-Logo.png"},{skillName:"Postman",skillLogo:"/Logos/Postman-Logo.png"},{skillName:"Rest API",skillLogo:"/Logos/Rest-Api-Logo.png"}]}
    ]

    const educationDetails=[
        {id:1,name:"Sanghvi Institute of Management & Science",course:"Bachelor of Technology - BTech, Information Technology",grade:"7 CGPA",durationFrom:"July 2023",durationTo:"June 2026",description:"I'm currently pursuing a BTech degree in Information Technology,gaining knowledge of the MERN stack and industry best practices. This course enhances my computer science fundamentals and involves building comprehensive projects, equipping me with practical skills and preparing me for real-world challenges in the tech industry.",logo:"/Logos/SIMS-logo.png"},

        {id:2,name:"Thakur Polytechnic",course:"Diploma in Information Technology",grade:"89%",durationFrom:"Aug 2019",durationTo:"July 2022",description:"I completed my diploma in Information Technology, acquiring comprehensive knowledge and exposure to computer fundamentals. This education encompassed programming, networking, database management, and system analysis. These experiences provided me with a solid IT foundation, equipping me with essential technical skills for various professional challenges.",logo:"/Logos/Thakur-Polytechnic-Logo.jpg"},

        {id:3,name:"St Xavier's High School",course:"10th SSC Board",grade:"78%",durationFrom:"May 2009",durationTo:"June 2019",
        description:"I completed my 10th grade at an English medium school, where I developed strong written and verbal communication skills. My education provided a solid foundation in the English language, enabling me to articulate ideas clearly and effectively in both academic and everyday contexts.",logo:"/Logos/St-Xavier-Logo.jpg"}]

    
        const contactDetails={email:"tanmaybhansali07@gmail.com",phoneNumber:"9372385167"}

export {bioDetails,projectDetails,skillsDetails,educationDetails,contactDetails}
