import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '~/components/SidebarMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={inter.style}>
        <div className="h-screen w-full overflow-hidden">
          <div className="relative flex h-screen w-full overflow-hidden">
            <div className="fixed inset-y-0 z-20 flex h-full w-[280px] flex-shrink-0 flex-grow-0 flex-col bg-white duration-300 md:relative md:ml-0 lg:ml-0">
              <div className="flex h-full w-full flex-1 flex-col">
                {/* <div className="p-6 pt-[26px]">
                  <svg
                    width="140"
                    height="30"
                    viewBox="0 0 140 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_14196_86306)">
                      <path
                        d="M16.116 4.73783V6.75396C14.3801 5.44527 12.2687 4.73783 10.0988 4.73783C9.36336 4.73582 8.63 4.81697 7.91259 4.97975C5.9373 5.29883 4.12569 6.27501 2.76788 7.75193C0.982646 9.6975 -0.00854492 12.2473 -0.00854492 14.8941C-0.00854492 17.5409 0.982646 20.0907 2.76788 22.0362C4.12569 23.5131 5.9373 24.4893 7.91259 24.8084C8.62962 24.9746 9.36298 25.0591 10.0988 25.0604C12.2687 25.0604 14.3801 24.353 16.116 23.0443V25.0604H20.2178V4.73783H16.116ZM10.0988 21.008C9.00413 21.0086 7.92961 20.712 6.98874 20.1496C6.04788 19.5871 5.27562 18.7796 4.75357 17.8124C4.30808 16.9072 4.08131 15.909 4.09167 14.8991C4.0744 13.8929 4.29796 12.8972 4.74353 11.9959C5.26459 11.0242 6.03748 10.2122 6.98026 9.6461C7.92305 9.07998 9.00062 8.78076 10.0988 8.78016C11.1993 8.78209 12.2788 9.08286 13.2233 9.65068C14.1677 10.2185 14.9419 11.0323 15.4642 12.006C15.8695 12.8742 16.0879 13.8186 16.1052 14.7775C16.1225 15.7363 15.9382 16.6881 15.5645 17.5705C15.0724 18.6041 14.2984 19.4759 13.3326 20.0844C12.3667 20.693 11.2488 21.0133 10.1089 21.008H10.0988Z"
                        fill="#E2061A"
                      />
                      <path
                        d="M29.0932 10.615C29.0987 10.9151 29.187 11.2077 29.3481 11.4604C29.5092 11.7131 29.7369 11.916 30.0058 12.0464C30.8422 12.5136 31.7356 12.8694 32.6634 13.1049C33.4468 13.277 34.2202 13.4924 34.98 13.75C35.712 14.011 36.4146 14.3489 37.076 14.7581C37.7857 15.1781 38.3681 15.7845 38.7608 16.5121C39.168 17.2939 39.3585 18.1713 39.3124 19.0525C39.3442 19.8928 39.1663 20.7278 38.795 21.4814C38.4236 22.235 37.8706 22.8832 37.1863 23.367C35.64 24.4505 33.7849 24.999 31.9012 24.9295C30.2173 24.9771 28.5515 24.5698 27.0774 23.75C25.7719 23.0036 24.7439 21.85 24.149 20.4637L27.6892 18.3972C28.3176 20.2319 29.7216 21.1492 31.9012 21.1492C34.0574 21.1492 35.1304 20.4436 35.1304 19.0121C35.1304 17.9772 33.927 17.1607 31.5201 16.5625C30.742 16.3791 29.9752 16.1502 29.2235 15.8771C28.5271 15.6002 27.856 15.2629 27.2178 14.869C26.5019 14.4639 25.9118 13.8672 25.513 13.1452C25.1084 12.3843 24.9177 11.527 24.9614 10.6654C24.941 9.84938 25.1119 9.04005 25.4604 8.30278C25.8088 7.56552 26.325 6.92102 26.9671 6.42141C28.4019 5.31662 30.1753 4.74976 31.9814 4.81859C33.4456 4.78036 34.8942 5.12789 36.1834 5.82666C37.3912 6.50425 38.3772 7.51984 39.0216 8.75004L35.5617 10.6956C35.27 9.99922 34.7665 9.4135 34.1234 9.02236C33.4802 8.63122 32.7305 8.45473 31.9814 8.51819C31.2746 8.48966 30.5757 8.67584 29.9757 9.05246C29.7006 9.20703 29.473 9.43438 29.3174 9.70984C29.1618 9.98529 29.0842 10.2983 29.0932 10.615Z"
                        fill="#282B2E"
                      />
                      <path
                        d="M64.2436 10.615C64.2514 10.9146 64.3405 11.2063 64.5013 11.4586C64.6622 11.7109 64.8887 11.9142 65.1562 12.0464C65.9962 12.5136 66.8928 12.8694 67.8238 13.1049C68.6072 13.2771 69.3806 13.4924 70.1404 13.7501C70.8692 14.0111 71.5684 14.3491 72.2264 14.7581C72.9388 15.1779 73.5246 15.7841 73.9212 16.5122C74.4712 17.6648 74.615 18.9713 74.3289 20.2169C74.0428 21.4625 73.3438 22.5734 72.3467 23.367C70.7997 24.4492 68.9451 24.9975 67.0616 24.9295C65.3776 24.9781 63.7115 24.5708 62.2378 23.7501C60.93 23.0066 59.9012 21.852 59.3094 20.4638L62.8396 18.3972C63.468 20.2319 64.8754 21.1493 67.0616 21.1493C69.2178 21.1493 70.2908 20.4436 70.2908 19.0122C70.2908 17.9772 69.0874 17.1607 66.6805 16.5626C65.9024 16.3791 65.1356 16.1502 64.3839 15.8771C63.6867 15.6021 63.0154 15.2647 62.3782 14.869C61.6411 14.4716 61.0296 13.8744 60.6132 13.1452C60.2128 12.3828 60.0224 11.5266 60.0616 10.6654C60.0396 9.84916 60.2098 9.03927 60.5584 8.30174C60.907 7.56421 61.424 6.91994 62.0673 6.42143C63.5014 5.31511 65.2753 4.74807 67.0817 4.81861C68.5457 4.78178 69.994 5.12923 71.2837 5.82668C72.4863 6.50765 73.4682 7.52262 74.1117 8.75006L70.6519 10.6956C70.3633 9.9991 69.8619 9.4128 69.2202 9.02141C68.5784 8.63002 67.8295 8.45381 67.0817 8.51821C66.3747 8.48842 65.6754 8.6747 65.0759 9.05248C64.8087 9.21193 64.5899 9.44177 64.4432 9.71716C64.2965 9.99255 64.2274 10.303 64.2436 10.615Z"
                        fill="#282B2E"
                      />
                      <path
                        d="M79.1061 24.4455V9.32453H75.6161V5.35275H79.1061V1.22976L83.2178 0.0100098V5.35275H87.9212V9.32453H83.2178V24.4455H79.1061Z"
                        fill="#282B2E"
                      />
                      <path
                        d="M108.309 16.6533H93.1762C93.4277 17.985 94.1688 19.1727 95.2521 19.9799C96.4281 20.7969 97.835 21.2106 99.2636 21.1593C100.213 21.2117 101.161 21.022 102.018 20.6078C102.876 20.1937 103.615 19.5685 104.168 18.7904L107.547 20.8065C106.643 22.1709 105.398 23.2732 103.938 24.0037C102.477 24.7341 100.852 25.0673 99.2235 24.9698C97.8505 25.0266 96.4801 24.806 95.1934 24.3212C93.9067 23.8364 92.7297 23.0972 91.7321 22.1472C89.9128 20.2028 88.8999 17.6341 88.8999 14.9648C88.8999 12.2955 89.9128 9.72676 91.7321 7.78233C92.6656 6.8162 93.791 6.05841 95.035 5.55822C96.279 5.05803 97.6139 4.82664 98.9527 4.87911C100.237 4.84436 101.513 5.08946 102.693 5.59758C103.874 6.10571 104.931 6.8648 105.792 7.82266C107.582 9.76185 108.549 12.3255 108.49 14.9698C108.473 15.5348 108.412 16.0976 108.309 16.6533ZM93.1461 13.2964H104.318C104.12 11.9489 103.452 10.7161 102.433 9.81862C101.436 8.99141 100.175 8.55459 98.8825 8.58878C97.5068 8.541 96.1592 8.98777 95.0817 9.84886C94.0464 10.7279 93.3596 11.9513 93.1461 13.2964Z"
                        fill="#282B2E"
                      />
                      <path
                        d="M132.82 4.84877C133.785 4.8094 134.748 4.97587 135.645 5.33725C136.542 5.69863 137.353 6.24674 138.024 6.94555C139.41 8.49032 140.131 10.5234 140.03 12.6008V24.4455H135.928V12.873C135.978 11.7748 135.621 10.6971 134.925 9.84876C134.584 9.47614 134.166 9.18361 133.7 8.99196C133.233 8.80031 132.731 8.71426 132.228 8.7399C131.663 8.71646 131.101 8.81912 130.581 9.04049C130.06 9.26187 129.595 9.59644 129.219 10.0201C128.413 11.0992 128.022 12.4342 128.116 13.7802V24.4758H124.014V12.873C124.071 11.7855 123.741 10.7132 123.082 9.84876C122.752 9.47943 122.343 9.1897 121.887 9.00119C121.43 8.81268 120.937 8.73025 120.444 8.76005C119.87 8.73723 119.299 8.84196 118.77 9.06675C118.242 9.29153 117.769 9.63084 117.385 10.0605C116.547 11.1173 116.132 12.4514 116.222 13.8004V24.4959H112.06V5.34271H116.162V7.6411C116.738 6.73066 117.546 5.99165 118.501 5.50067C119.457 5.00968 120.526 4.7846 121.597 4.84877C122.689 4.79264 123.773 5.04653 124.728 5.58138C125.682 6.11623 126.467 6.91041 126.993 7.87296C127.599 6.88431 128.462 6.08038 129.488 5.54755C130.515 5.01473 131.667 4.77315 132.82 4.84877Z"
                        fill="#282B2E"
                      />
                      <path
                        d="M45.6705 29.9999C45.6705 29.9999 47.0645 25.8366 47.596 24.4858L47.7866 24.1027L39.7637 5.34266H44.2465L49.8826 19.1935L54.7465 5.32251H59.119L49.9929 29.9798L45.6705 29.9999Z"
                        fill="#282B2E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14196_86306">
                        <rect width="140" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div> */}
                {/* get https://api.crm.staging.arbatdeport.life/v2/access/get-menu-items */}
                <Sidebar />
                <ul className="p-[10px]">
                  <li className="rounded-[8px] px-[10px] py-2">
                    <span className="text-sm font-medium text-[#282B2E]">
                      Объекты
                    </span>
                  </li>
                  <li className="rounded-[8px] px-[10px] py-2">
                    <span className="text-sm font-medium text-[#282B2E]">
                      Модерация
                    </span>
                  </li>
                  <li className="rounded-[8px] px-[10px] py-2">3</li>
                  <li className="rounded-[8px] px-[10px] py-2">4</li>
                  <li className="rounded-[8px] px-[10px] py-2">5</li>
                  <li className="rounded-[8px] px-[10px] py-2">6</li>
                  <li className="rounded-[8px] px-[10px] py-2">7</li>
                  <li className="rounded-[8px] px-[10px] py-2">8</li>
                  <li className="rounded-[8px] px-[10px] py-2">9</li>
                  <li className="rounded-[8px] px-[10px] py-2">10</li>
                  <li className="rounded-[8px] px-[10px] py-2">11</li>
                  <li className="rounded-[8px] px-[10px] py-2">12</li>
                  <li className="rounded-[8px] px-[10px] py-2">13</li>
                  <li className="rounded-[8px] px-[10px] py-2">14</li>
                  <li className="rounded-[8px] px-[10px] py-2">15</li>
                  <li className="rounded-[8px] px-[10px] py-2">16</li>
                  <li className="rounded-[8px] px-[10px] py-2">17</li>
                  <li className="rounded-[8px] px-[10px] py-2">18</li>
                </ul>
                <div className="">
                  <span className="">v: 0.0.1</span>
                </div>
              </div>
            </div>
            <main className="relative flex h-full w-full flex-col overflow-hidden bg-[#F1F3F7]">
              <div className="z-[15]">
                <div className="z-10 flex w-full items-center bg-white">
                  header
                </div>
              </div>
              <div className="h-full w-full overflow-hidden">
                <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
                  <div className="vertical-scrollbar scrollbar-lg flex h-full w-full flex-col space-y-7 overflow-y-auto p-7">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
