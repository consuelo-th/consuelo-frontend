import image1 from '/images/home-tip-1.png'
import image2 from '/images/home-tip-2.png'
import image3 from '/images/home-tip-3.png'
import image4 from '/images/home-tip-4.png'

export let navigation = [
  {
    id: 0,
    title: "Home",
    path: "/dashboard",
    svg: {
      path: [
        "M8.75 16.5837V3.41699C8.75 2.16699 8.21666 1.66699 6.89166 1.66699H3.525C2.2 1.66699 1.66666 2.16699 1.66666 3.41699V16.5837C1.66666 17.8337 2.2 18.3337 3.525 18.3337H6.89166C8.21666 18.3337 8.75 17.8337 8.75 16.5837Z",
        "M18.3333 7.10033V3.31699C18.3333 2.14199 17.8 1.66699 16.475 1.66699H13.1083C11.7833 1.66699 11.25 2.14199 11.25 3.31699V7.09199C11.25 8.27533 11.7833 8.74199 13.1083 8.74199H16.475C17.8 8.75033 18.3333 8.27533 18.3333 7.10033Z",
        "M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
      ],
    }
    // icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
  },
  {
    id: 1,
    title: "Self Affirmation",
    path: "/dashboard/self-affirmation",
    svg: {
      path: [
        "M18.3332 8.33366V12.5003C18.3332 16.667 16.6665 18.3337 12.4998 18.3337H7.49984C3.33317 18.3337 1.6665 16.667 1.6665 12.5003V7.50033C1.6665 3.33366 3.33317 1.66699 7.49984 1.66699H11.6665",
        "M18.3332 8.33366H14.9998C12.4998 8.33366 11.6665 7.50033 11.6665 5.00033V1.66699L18.3332 8.33366Z",
        "M5.51681 13.1081C5.24181 12.2498 5.56681 11.1915 6.45848 10.8998C6.93348 10.7498 7.51681 10.8748 7.84181 11.3331C8.15014 10.8581 8.75848 10.7498 9.22514 10.8998C10.1251 11.1915 10.4418 12.2498 10.1751 13.1081C9.75014 14.4665 8.25848 15.1748 7.84181 15.1748C7.43348 15.1665 5.95848 14.4748 5.51681 13.1081Z"
      ],
    }
  },
  {
    id: 2,
    title: "Mental Health Tips",
    path: "/dashboard/mental-health-tips",
    svg: {
      path: [
        "M18.3332 8.33366V10.8337C18.3332 14.167 16.6665 15.8337 13.3332 15.8337H12.9165C12.6582 15.8337 12.4082 15.9587 12.2498 16.167L10.9998 17.8337C10.4498 18.567 9.54984 18.567 8.99984 17.8337L7.74984 16.167C7.6165 15.9837 7.30817 15.8337 7.08317 15.8337H6.6665C3.33317 15.8337 1.6665 15.0003 1.6665 10.8337V6.66699C1.6665 3.33366 3.33317 1.66699 6.6665 1.66699H11.6665",
        "M16.2498 5.83366C17.4004 5.83366 18.3332 4.90092 18.3332 3.75033C18.3332 2.59973 17.4004 1.66699 16.2498 1.66699C15.0992 1.66699 14.1665 2.59973 14.1665 3.75033C14.1665 4.90092 15.0992 5.83366 16.2498 5.83366Z",
        "M13.3305 9.16667H13.338",
        "M9.99607 9.16667H10.0036",
        "M6.66209 9.16667H6.66957"
      ],
    }
  },
  {
    id: 3,
    title: "Community",
    path: "/dashboard/community",
    svg: {
      path: [
        "M14.9999 5.967C14.9499 5.95866 14.8916 5.95866 14.8416 5.967C13.6916 5.92533 12.7749 4.98366 12.7749 3.81699C12.7749 2.62533 13.7332 1.66699 14.9249 1.66699C16.1166 1.66699 17.0749 2.63366 17.0749 3.81699C17.0666 4.98366 16.1499 5.92533 14.9999 5.967Z",
        "M14.1417 12.0338C15.2834 12.2255 16.5417 12.0255 17.425 11.4338C18.6 10.6505 18.6 9.36713 17.425 8.58379C16.5334 7.99213 15.2584 7.79212 14.1167 7.99212",
        "M4.97539 5.967C5.02539 5.95866 5.08372 5.95866 5.13372 5.967C6.28372 5.92533 7.20039 4.98366 7.20039 3.81699C7.20039 2.62533 6.24206 1.66699 5.05039 1.66699C3.85873 1.66699 2.90039 2.63366 2.90039 3.81699C2.90872 4.98366 3.82539 5.92533 4.97539 5.967Z",
        "M5.83353 12.0338C4.69186 12.2255 3.43353 12.0255 2.5502 11.4338C1.3752 10.6505 1.3752 9.36713 2.5502 8.58379C3.44186 7.99213 4.71686 7.79212 5.85853 7.99212",
        "M9.9999 12.1916C9.9499 12.1833 9.89157 12.1833 9.84157 12.1916C8.69157 12.1499 7.7749 11.2083 7.7749 10.0416C7.7749 8.84994 8.73323 7.8916 9.9249 7.8916C11.1166 7.8916 12.0749 8.85827 12.0749 10.0416C12.0666 11.2083 11.1499 12.1583 9.9999 12.1916Z",
        "M7.5751 14.8168C6.4001 15.6001 6.4001 16.8835 7.5751 17.6668C8.90843 18.5585 11.0918 18.5585 12.4251 17.6668C13.6001 16.8835 13.6001 15.6001 12.4251 14.8168C11.1001 13.9335 8.90843 13.9335 7.5751 14.8168Z",
      ],
    },
    // icon: 'M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z'
  },
  {
    id: 4,
    title: "Blog",
    path: "/dashboard/blogs",
    svg: {
      path: [
        "M18.3332 8.33366V12.5003C18.3332 16.667 16.6665 18.3337 12.4998 18.3337H7.49984C3.33317 18.3337 1.6665 16.667 1.6665 12.5003V7.50033C1.6665 3.33366 3.33317 1.66699 7.49984 1.66699H11.6665",
        "M18.3332 8.33366H14.9998C12.4998 8.33366 11.6665 7.50033 11.6665 5.00033V1.66699L18.3332 8.33366Z",
        "M5.8335 10.833H10.8335",
        "M5.8335 14.167H9.16683"
      ],
    },
  },
  {
    id: 5,
    title: "Feedback and Reviews",
    path: "/dashboard/feedbacks",
    svg: {
      path: [
        "M18.0495 8.70041L17.2328 12.1837C16.5328 15.1921 15.1495 16.4087 12.5495 16.1587C12.1328 16.1254 11.6828 16.0504 11.1995 15.9337L9.7995 15.6004C6.3245 14.7754 5.2495 13.0587 6.06617 9.57541L6.88283 6.08375C7.0495 5.37541 7.2495 4.75875 7.4995 4.25041C8.4745 2.23375 10.1328 1.69208 12.9162 2.35041L14.3078 2.67541C17.7995 3.49208 18.8662 5.21708 18.0495 8.70041Z",
        "M12.5493 16.1583C12.0326 16.5083 11.3826 16.8 10.591 17.0583L9.27431 17.4917C5.96597 18.5583 4.22431 17.6667 3.14931 14.3583L2.08264 11.0667C1.01597 7.75833 1.89931 6.00833 5.20764 4.94167L6.52431 4.50833C6.86597 4.4 7.19097 4.30833 7.49931 4.25C7.24931 4.75833 7.04931 5.375 6.88264 6.08333L6.06597 9.575C5.24931 13.0583 6.32431 14.775 9.79931 15.6L11.1993 15.9333C11.6826 16.05 12.1326 16.125 12.5493 16.1583Z",
      ],
    },
  },
  {
    id: 6,
    title: "Logout",
    path: "/logout",
    svg: {
      path: [
        "M17.4399 14.62L19.9999 12.06L17.4399 9.5",
        "M9.75977 12.0596H19.9298",
        "M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
      ],
    },
    // icon: 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
  },
];

export let blogs = [
  {
    id: 1,
    title: "The Benefits of Daily Meditation",
    content:
      "Meditation has been proven to reduce stress, improve focus, and increase overall well-being. By taking just a few minutes each day to meditate, you can reap these benefits and more.",
    image: "https://example.com/meditation.jpg",
  },
  {
    id: 2,
    title: "5 Tips for Eating Healthier on a Budget",
    content:
      "Eating healthy doesn't have to be expensive. With a few smart shopping strategies and meal planning, you can enjoy nutritious meals without breaking the bank.",
    image: "https://example.com/healthy-eating.jpg",
  },
  {
    id: 3,
    title: "The Importance of Regular Exercise",
    content:
      "Regular exercise is essential for maintaining good health and reducing the risk of chronic diseases. Whether it's through running, cycling, or yoga, find an activity that you enjoy and make it a part of your routine.",
    image: "https://example.com/exercise.jpg",
  },
  {
    id: 4,
    title: "How to Start a Successful Online Business",
    content:
      "Starting an online business can be challenging, but with the right strategies and tools, it's possible to create a profitable and sustainable business. From identifying your niche to building your website, this guide will walk you through the steps to success.",
    image: "https://example.com/online-business.jpg",
  },
  {
    id: 5,
    title: "The Benefits of Learning a New Language",
    content:
      "Learning a new language can open up a world of opportunities, from travel to career advancement. It can also improve cognitive function and overall brain health. Find a language that interests you and start learning today!",
    image: "https://example.com/language-learning.jpg",
  },
];

export let healthTips = [
  {
    title: "What is SaaS? Software as a Service Explained",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    authorName: "Sidi dev",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    authorName: "Micheal",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    authorName: "Luis",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    authorName: "Lourin",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "What is SaaS? Software as a Service Explained",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    authorName: "Sidi dev",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    authorName: "Micheal",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    authorName: "Luis",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    authorName: "Lourin",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    authorName: "Luis",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
];

export const FeedbackData = [
  {
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    userName: "Hassy123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ut sed pharetra convallis interdum est, aliquet. Sagittis, gravida amet fames felis. Egestas integer imperdiet aliquam in hac cursus at sollicitudin id. Lorem a ut id pretium ultricies. Ipsum eu neque, ut nibh senectus.",
    date: "Sep 22nd, 2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    userName: "Hassy123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ut sed pharetra convallis interdum est, aliquet. Sagittis, gravida amet fames felis. Egestas integer imperdiet aliquam in hac cursus at sollicitudin id. Lorem a ut id pretium ultricies. Ipsum eu neque, ut nibh senectus.",
    date: "Sep 22nd, 2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    userName: "Hassy123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ut sed pharetra convallis interdum est, aliquet. Sagittis, gravida amet fames felis. Egestas integer imperdiet aliquam in hac cursus at sollicitudin id. Lorem a ut id pretium ultricies. Ipsum eu neque, ut nibh senectus.",
    date: "Sep 22nd, 2022",
  },
];

export const mentalHealthTips =[
  {
    id: 1,
    title: 'Breakups/Fallout',
    descripton: 'Breakups and fallouts happens, what matters is how you handle these situations.',
    tips: {
      tip1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      tip2: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tip3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tip4: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tip5: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
  },
  {
    id: 2,
    title: 'Self-care',
    descripton: "Self-care helps us to achieve this- to physically, mentally, and emotionally care for ourselves. To help you prioritise self-care, we've curated some tips in getting you to put yourself and well-being first.",
    tips: {
      tip1: "Set and implement healthy boundaries. Don’t hold back from saying no when you need to.",
      tip2: "Take care of your physical health. Listen to your body signals. It really does have a lot to say if we take the time to listen.",
      tip3: "Don’t hinge your happiness on material things or people. Be in charge of your own happiness.",
      tip4: "Do something you enjoy every day. As little as watching a favorite TV show or listening to a favorite podcast.",
      tip5: "Practice self-compassion. Grant yourself enough grace and understand that nobody’s perfect."
    },
  },
  {
    id: 3,
    title: 'Stress Management',
    descripton: 'Give yourself a break. Unwind by catching up with your friends. Create time to do the little things together.',
    tips: {
      tip1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      tip2: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tip3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tip4: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tip5: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
  },
  {
    id: 4,
    title: 'Trauma',
    descripton: 'Here’s some curated tips to help in getting you through recovery from frightening triggers and events.',
    tips: {
      tip1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      tip2: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tip3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tip4: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tip5: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
  },
]

export const userHomeData = [
  {
    id: 1,
    title: 'Breakups/Fallout',
    descripton: 'Breakups and fallouts happens, what matters is how you handle these situations.',
    image: image1
  },
  {
    id: 2,
    title: 'Self-care',
    descripton: 'Embracing self-care and prioritising your well-being is key.',
    image: image2
  },
  {
    id: 3,
    title: 'Stress Management',
    descripton: 'Give yourself a break. Unwind by catching up with your friends. Create time to do the little things together.',
    image: image3
  },
  {
    id: 4,
    title: 'Trauma',
    descripton: 'Here’s some curated tips to help in getting you through recovery from frightening triggers and events.',
    image: image4
  },
]

export const userBlogHomeData = [
  {
    id: 1,
    title:'A step to step guide on how to deal with anxiety',
    length: '3 mins',
    date: '3 November, 2022',
    image: ''
  },
  {
    id: 2,
    title:'Learning how to take life one day at a time',
    length: '3 mins',
    date: '5 October, 2022',
    image: ''
  },
]

