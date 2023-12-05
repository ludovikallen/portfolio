export default defineAppConfig({
  alpine: {
    title: "",
    description: "",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "alpine", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: "https://www.github.com/nuxt-themes/alpine", // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "",
      instagram: "",

      linkedin: {
        icon: "ph:linkedin-logo-bold",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ludovik-allen-b7201714a/",
      },

      devto: {
        icon: "ph:dev-to-logo-bold",
        label: "DevTo",
        href: "https://dev.to/ludovikallen",
      },

      github: {
        icon: "ph:github-logo-bold",
        label: "GitHub",
        href: "https://github.com/ludovikallen",
      },
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
