import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="110" height="110" rx="30" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.245 74.8921C39.8388 75.6129 52.0989 74.7189 56.3894 65.3769C60.1892 56.6658 61.4866 56.4412 63.9029 56.7493C66.984 57.1423 69.7718 62.3678 70.2728 63.5846C70.3012 63.0193 70.3384 62.4038 70.3778 61.7511C70.5815 58.3763 70.8453 54.0067 70.2728 50.4449C70.1773 49.8507 69.9955 49.155 69.8059 48.4293C69.1361 45.8657 68.3682 42.9266 70.956 42.7536C72.0138 42.6829 72.7947 43.3423 73.643 44.0588C74.7726 45.0128 76.0219 46.0678 78.2043 45.6348C81.3754 45.0056 77.8309 34.8444 76.4037 30.7532C76.1111 29.9145 75.9075 29.3308 75.869 29.1367C75.8567 29.0743 75.8269 28.9582 75.7858 28.7977C75.355 27.1151 73.6745 20.5514 77.628 19.7957C81.4155 19.0719 85.8467 23.5259 89.6073 30.0463C92.2578 34.6419 94.2859 42.1089 94.236 49.0966H94.2363C94.2363 58.5866 90.9315 67.7804 84.8897 75.0986C78.8479 82.4168 70.4462 87.4026 61.1279 89.1995C51.8095 90.9964 42.1563 89.4922 33.8265 84.9454C26.3438 80.8609 20.3485 74.5502 16.6486 66.9229C16.1894 66.0447 15.7886 65.1506 15.46 64.2447C17.4717 67.21 24.0452 73.4911 34.245 74.8921Z"
          fill="url(#paint0_linear_852_4030)"
        />
        <path
          d="M27.5986 69.1454C19.6313 65.6044 16.9108 59.9837 15.906 57.5999C14.4374 54.1156 16.4093 50.3698 20.3455 53.0357C23.5624 55.2145 24.8083 58.0727 28.984 64.0753C32.3246 68.8773 38.1532 71.4002 40.6499 72.0613C37.492 71.8525 32.7421 71.4089 27.5986 69.1454Z"
          fill="url(#paint1_linear_852_4030)"
        />
        <path
          d="M29.2617 55.2944C25.5847 49.7073 26.1569 44.9512 26.4958 42.9958C26.9912 40.1377 29.8163 38.5362 31.2531 41.8882C32.4274 44.6277 32.0477 46.9893 32.2568 52.5949C32.4241 57.0794 35.1421 61.1231 36.4801 62.5844C34.5278 61.1412 31.6448 58.8869 29.2617 55.2944Z"
          fill="url(#paint2_linear_852_4030)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_852_4030"
            x1="61.3523"
            y1="13.8142"
            x2="36.8325"
            y2="87.4731"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#83C4FF" />
            <stop offset="0.0001" stop-color="#83E1FF" />
            <stop offset="1" stop-color="#0071D8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_852_4030"
            x1="30.1181"
            y1="50.456"
            x2="23.8161"
            y2="71.8191"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#83C4FF" />
            <stop offset="0.0001" stop-color="#83E1FF" />
            <stop offset="1" stop-color="#0071D8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_852_4030"
            x1="38.6316"
            y1="44.2716"
            x2="25.7118"
            y2="55.4536"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#83C4FF" />
            <stop offset="0.0001" stop-color="#83E1FF" />
            <stop offset="1" stop-color="#0071D8" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Splash</span>
    </>
  ),
  project: {
    link: "https://github.com/cosmostation/splash",
  },
  docsRepositoryBase: "https://github.com/cosmostation/splash-docs",
  footer: {
    text: "Splash Docs",
  },
};

export default config;
