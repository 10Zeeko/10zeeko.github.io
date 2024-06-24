// gitprofile.config.ts

const CONFIG = {
  github: {
    username: '10Zeeko', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "Don't Look",
          description:
            'Is a puzzle and strategy game set in a mysterious castle where everything seems to have been destroyed by unknown creatures made in Unreal Engine.',
          imageUrl:
            '',
          link: 'https://trialgames.itch.io/dont-look',
        },
        {
          title: 'Unreal Ink Shooter',
          description:
            'Small multiplayer game inspired in Splatoon made in Unreal Engine.',
          imageUrl:
            '',
          link: 'https://github.com/10Zeeko/Unreal_Ink_Shooter',
        },
        {
          title: 'Seeds seeds!',
          description:
            'A short game made in the Level Up Game Jam 2023 where you have to plant seeds and make them grow to advance through the level made in Unity',
          imageUrl:
            '',
          link: 'https://10zeeko.itch.io/seed-seeds',
        },
        {
          title: 'VR Scary Game',
          description:
            'Game inspired in lethal company made in Unity VR, you have to obtain money so you can escape from a dungeon',
          imageUrl:
            '',
          link: 'https://github.com/10Zeeko/VRProject',
        },
        {
          title: 'Grapls',
          description:
            'A 2D platformer game where you have to use a grappling made in Godot',
          imageUrl:
            '',
          link: 'https://github.com/10Zeeko/Grapls',
        },
        {
          title: 'Meltfood',
          description:
            'Meltfood is a racing game in which you compete to reach the finish line first while avoiding melting with the help of various power ups that you will find along the way made in Unity',
          imageUrl:
            '',
          link: 'https://10zeeko.itch.io/meltfood',
        },
        {
          title: 'Bowling VR',
          description:
            'A bowling game made in Unity vr',
          imageUrl:
            '',
          link: 'https://github.com/10Zeeko/Bowling-VR',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pol Garriga',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://10zeeko.github.io',
    phone: '',
    email: '10polgb@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C#',
    'GDScript',
    'Unreal Engine',
    'Unity',
    'Godot',
    'Git',
    'Python',
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'winter',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
