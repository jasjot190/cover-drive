import React from "react";

const page = () => {
  const menuGroups = [
    [
      { name: "Trails", href: "https://finchhattonmtb.com.au/trails" },
      { name: "Trailhead", href: "https://finchhattonmtb.com.au/trailhead" },
      { name: "Shuttle", href: "https://finchhattonmtb.com.au/shuttle" },
      {
        name: "Bike Hire",
        href: "https://www.corrycyclesfinchhatton.com.au/",
        target: "_blank",
      },
      { name: "Safety", href: "https://finchhattonmtb.com.au/safety" },
      {
        name: "FAQs",
        href: "https://finchhattonmtb.com.au/frequently-asked-questions",
      },
    ],
    [
      {
        name: "Getting Here",
        href: "https://finchhattonmtb.com.au/getting-here",
      },
      {
        name: "FHMTB Merch",
        href: "https://finchhattonmtb.com.au/fhmtb-merch",
      },
      { name: "Weather", href: "https://finchhattonmtb.com.au/weather" },
      { name: "Shuttle", href: "https://finchhattonmtb.com.au/shuttle" },
      { name: "Safety", href: "https://finchhattonmtb.com.au/safety" },
      { name: "The Region", href: "https://finchhattonmtb.com.au/the-region" },
      {
        name: "FAQs",
        href: "https://finchhattonmtb.com.au/frequently-asked-questions",
      },
    ],
  ];
  const links = [
    {
      href: "https://finchhattonmtb.com.au/getting-here",
      bgColor: "bg-green",
      imgSrc:
        "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/icon-compass-yellow.png",
      text: "Getting Here",
      target: "_self",
    },
    {
      href: "https://finchhattonmtb.com.au/shuttle",
      bgColor: "bg-orange",
      imgSrc:
        "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/icon-shuttle-yellow.png",
      text: "Book Shuttle",
      target: "_self",
    },
    {
      href: "https://www.corrycyclesfinchhatton.com.au/",
      bgColor: "bg-green",
      imgSrc:
        "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-rider-yellow.png",
      text: "Bike Hire",
      target: "_blank",
    },
    {
      href: "https://finchhattonmtb.com.au/weather",
      bgColor: "bg-granite",
      imgSrc:
        "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-sun-yellow.png",
      text: "Weather",
      target: "_self",
    },
  ];

  const renderMenuItem = (name, href, target) => (
    <li className="menu-item menu-item-type-post_type menu-item-object-page first:mt-0 -mt-8">
      <a
        href={href}
        target={target || "_self"}
        className="block font-slab font-black uppercase text-green text-[6.25rem] leading-none hover:text-yellow"
      >
        {name.split("").map((char, index) => (
          <div
            key={index}
            style={{ position: "relative", display: "inline-block" }}
            className="overflow-hidden"
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {char}
            </div>
          </div>
        ))}
      </a>
    </li>
  );
  return (
    <div className="group/body text-base font-sans bg-charcoal text-mist">
      <div id="top-bar">
        <header className="fixed top-0 inset-x-0 z-40">
          <div className="absolute inset-0 bg-granite -translate-y-full transition-transform duration-500 bg-granite group-[&.scrolled]/body:translate-y-0 group-[&.mega-nav-open]/body:translate-y-0"></div>
          <div className="relative flex items-center transition-[height] duration-500 h-header-height-scrolled lg:h-header-height group-[&.scrolled]/body:h-header-height-scrolled">
            <div className="container flex justify-between align-center lg:grid lg:grid-cols-12 gap-x-grid-gutter">
              <div className="col-span-2 flex items-center">
                <a
                  href="https://finchhattonmtb.com.au"
                  aria-label="Finch Hatton"
                  className="block text-mist hover:text-yellow shrink-0 transition-all duration-500 origin-left group-[&.scrolled]/body:scale-[.75] lg:group-[&.scrolled]/body:scale-[.6]"
                >
                  <span
                    className="block mx-auto w-[--width] lg:w-[--lg-width] h-[--height] lg:h-[--lg-height] [&_svg]:w-full [&_svg]:h-full"
                    aria-hidden="true"
                    style={{
                      "--width": "4.0625rem",
                      "--lg-width": "5.6875rem",
                      "--height": "3.125rem",
                      "--lg-height": "4.375rem",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="91"
                      height="70"
                      fill="none"
                      viewBox="0 0 91 70"
                      className="w-full h-full"
                    >
                      <path
                        className="fill-current"
                        d="m90.423 43.943-.144-10.814-.03-10.814-.123-10.814L89.948.648 78.682.786l-11.227.24-11.23.057-11.23.177-11.23.17-11.231-.008-11.23.125-11.237.19.355 10.621.255 10.62.262 10.618.27 10.62.403 10.58 10.157 3.718 10.209 3.677 10.214 3.667 10.212 3.608L52.05 66.6l9.617-3.053 9.646-2.955 9.689-2.822 9.56-3.056-.133-10.763-.006-.01ZM23.79 28.209l15.1.279-.083 9.855-15.056.386-.087 13.732-10.224-.617-.27-12.06 2.51-1.139-6.056.159.084-10.634 3.57.135-.303-8.98-3.147-.075-.487-10.07 11.29.083 11.26-.039 11.261-.114 11.255-.05-.794 9.884-9.986-.033-10.007.045-9.99-.147.166 9.397-.006.003Zm53.675 11.143-.105 12.84-10.644.557.249-13.63-16.928.64 3.2 1.11-.393 12.506-10.113.567-.117-10.437-.19-10.454v-10.41l10.91-.455-.352 6.65 13.833.014-.096-9.894-.346-9.99 10.903.222.123 9.801.087 9.867 2.68.096.83 10.271-3.531.132v-.003Z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <nav className="hidden lg:block col-span-10">
                <ul
                  className="grid grid-cols-10 gap-x-grid-gutter h-full"
                  data-nav=""
                >
                  <li className="col-span-1 first:col-start-6 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <button
                      className="h-full w-full text-left [&.active]:text-yellow hover:text-yellow transition-colors duration-300 text-lg font-medium group"
                      type="button"
                      data-mega-menu-trigger="1412"
                    >
                      <span>Ride</span>
                      <span
                        className="inline-flex relative overflow-hidden pl-0.5"
                        aria-hidden="true"
                      >
                        <span className="group-hover:-translate-y-full transition-transform duration-300">
                          ↓
                        </span>
                        <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                          ↓
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="col-span-1 first:col-start-6 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <button
                      className="h-full w-full text-left [&.active]:text-yellow hover:text-yellow transition-colors duration-300 text-lg font-medium group"
                      type="button"
                      data-mega-menu-trigger="1411"
                    >
                      <span>Plan</span>
                      <span
                        className="inline-flex relative overflow-hidden pl-0.5"
                        aria-hidden="true"
                      >
                        <span className="group-hover:-translate-y-full transition-transform duration-300">
                          ↓
                        </span>
                        <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                          ↓
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="col-span-1 first:col-start-6 menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      href="/news"
                      className="h-full w-full flex items-center hover:text-yellow transition-colors duration-300 text-lg font-medium"
                    >
                      <span>News</span>
                    </a>
                  </li>
                  <li className="col-span-1 first:col-start-6 menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      href="/events"
                      className="h-full w-full flex items-center hover:text-yellow transition-colors duration-300 text-lg font-medium"
                    >
                      <span>Events</span>
                    </a>
                  </li>
                  <li className="col-span-1 first:col-start-6 menu-item menu-item-type-post_type menu-item-object-page">
                    <a
                      href="https://finchhattonmtb.com.au/contact"
                      className="h-full w-full flex items-center hover:text-yellow transition-colors duration-300 text-lg font-medium"
                    >
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="lg:hidden">
                <button
                  aria-label="Open navigation menu"
                  className="flex items-center justify-center h-full transition-all duration-500 text-white hover:text-yellow group-[&.modal-nav-open]/body:hidden"
                  data-modal-menu-open=""
                >
                  <span aria-hidden="true" className="[&_svg]:w-6 [&_svg]:h-6">
                    <span
                      className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                      aria-hidden="true"
                      style={{ "--width": "1.875rem", "--height": "1.875rem" }}
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.067"
                        height="11.5"
                        viewBox="0 0 18.067 11.5"
                      >
                        <g
                          fill="none"
                          className="stroke-current"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        >
                          <path d="M.75.75h16.567"></path>
                          <path d="M.75 5.75h16.567"></path>
                          <path d="M.75 10.75h16.567"></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
                <button
                  aria-label="Close navigation menu"
                  className="hidden items-center justify-center h-full transition-all duration-500 text-white hover:text-yellow group-[&.modal-nav-open]/body:flex"
                  data-modal-menu-close=""
                >
                  <span
                    className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                    aria-hidden="true"
                    style={{ "--width": "1.5rem", "--height": "1.5rem" }}
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.836"
                      height="13.836"
                      viewBox="0 0 13.836 13.836"
                    >
                      <g
                        fill="none"
                        className="stroke-current"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M1.06 12.775 12.775 1.06"></path>
                        <path d="m1.06 1.06 11.715 11.715"></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <section
          className="fixed top-header-height group-[&.scrolled]/body:top-header-height-scrolled bottom-0 inset-x-0 z-30 transition-[top] duration-500 pointer-events-none hidden max-lg:!hidden"
          data-lenis-prevent=""
          data-mega-menu=""
        >
          <div className="overflow-auto max-h-full pointer-events-auto relative">
            <div className="bg-charcoal">
              <div className="container grid grid-cols-6 lg:grid-cols-12 gap-x-grid-gutter py-12">
                <div className="col-span-6 flex flex-col">
                  <nav className="mb-14 grid" data-mega-menu-nav="">
                    {menuGroups.map((group, groupIndex) => (
                      <ul
                        key={groupIndex}
                        className="col-start-1 row-start-1 invisible"
                        data-mega-menu-nav-item={
                          groupIndex === 0 ? "1412" : "1411"
                        }
                      >
                        {group.map(({ name, href, target }, index) =>
                          renderMenuItem(name, href, target)
                        )}
                      </ul>
                    ))}
                  </nav>
                  <div
                    className="relative w-[150px] h-[150px] text-green [&amp;_a]:hover:text-yellow mt-auto"
                    data-mega-menu-fade=""
                  >
                    <a
                      href="https://offcamber.com.au/mtbshuttles/"
                      className="block w-full h-full relative group hover:text-current"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Book shuttle"
                    >
                      <div className="absolute inset-0 flex items-center justify-center motion-safe:group-hover:rotate-[30deg] transition-transform duration-500">
                        <span
                          className="block mx-auto w-[9.375rem] h-[9.375rem] [&_svg]:w-full [&_svg]:h-full"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="136"
                            height="135"
                            fill="none"
                            viewBox="0 0 136 135"
                            className="w-full h-full"
                          >
                            <g className="fill-current">
                              <path d="M68.667 9.318 69.235.37l2.95.186c.567.036 1.057.164 1.47.386.414.222.728.519.947.888.218.37.312.788.282 1.255-.03.461-.187.854-.475 1.183a2.4 2.4 0 0 1-1.132.707c.54.196.957.488 1.256.881.3.39.433.841.398 1.353-.03.487-.185.91-.462 1.275a2.528 2.528 0 0 1-1.1.817c-.456.182-.983.252-1.586.216l-3.118-.194.002-.005Zm1.586-1.133 1.444.09c.49.03.889-.07 1.197-.303.307-.233.475-.564.503-.989.028-.427-.097-.773-.374-1.037-.276-.265-.659-.414-1.15-.444l-1.443-.09-.177 2.773Zm.252-3.95 1.289.082c.448.028.811-.064 1.091-.277.282-.214.435-.513.458-.895.024-.382-.09-.7-.34-.952-.251-.252-.6-.39-1.048-.418l-1.289-.081-.161 2.544v-.002ZM80.277 10.864a3.055 3.055 0 0 1-1.605-.9c-.439-.464-.74-1.066-.902-1.804-.161-.739-.135-1.593.078-2.56.215-.967.55-1.752 1.011-2.356.46-.605.988-1.025 1.582-1.262a3.074 3.074 0 0 1 1.838-.15c.63.137 1.166.438 1.605.901.439.464.74 1.066.902 1.804.161.739.135 1.593-.078 2.56-.215.967-.55 1.752-1.011 2.356-.46.604-.988 1.025-1.582 1.262a3.073 3.073 0 0 1-1.838.15Zm.3-1.351c.352.077.701.028 1.043-.145.342-.173.65-.478.923-.914.274-.433.487-.997.64-1.69.152-.692.197-1.292.135-1.8-.064-.508-.215-.911-.452-1.212a1.527 1.527 0 0 0-.886-.568 1.533 1.533 0 0 0-1.044.145c-.342.175-.65.478-.923.914-.274.435-.487.996-.64 1.69-.152.692-.197 1.292-.135 1.8.065.508.215.911.452 1.212.237.301.534.491.886.568ZM89.005 13.5a3.055 3.055 0 0 1-1.441-1.14c-.36-.525-.562-1.165-.605-1.92-.043-.757.118-1.595.484-2.516.366-.922.822-1.645 1.373-2.168.549-.525 1.136-.858 1.763-1a3.079 3.079 0 0 1 1.837.14c.6.234 1.083.614 1.442 1.14.36.524.562 1.165.605 1.92.043.756-.119 1.595-.484 2.515-.366.922-.823 1.646-1.373 2.169-.551.525-1.139.858-1.763.999a3.079 3.079 0 0 1-1.838-.139Zm.51-1.287c.336.13.69.137 1.055.02.366-.12.719-.372 1.056-.759.338-.386.637-.909.9-1.569.26-.66.4-1.244.418-1.756.017-.513-.067-.935-.254-1.268a1.5 1.5 0 0 0-.786-.698 1.54 1.54 0 0 0-1.054-.02c-.366.12-.72.372-1.057.758-.338.387-.637.91-.9 1.57-.26.659-.4 1.244-.417 1.756-.017.512.067.935.254 1.268a1.5 1.5 0 0 0 .785.698ZM94.467 15.718l4.543-7.75 1.338.772-2.031 3.464 4.833-1.848 1.53.882-5.341 1.925.932 5.9-1.675-.965-.706-5.163-2.082 3.554-1.339-.773-.002.002ZM110.903 28.312l2.774-2.437 2.029-5.704 1.104 1.236-1.515 4.156 4.332-1.001 1.046 1.17-5.969 1.312-2.763 2.43-1.038-1.16v-.002ZM116.464 35.666a2.998 2.998 0 0 1-.512-1.757c.013-.636.219-1.274.626-1.915.405-.64 1.024-1.233 1.859-1.776.835-.542 1.629-.87 2.385-.984.753-.113 1.426-.047 2.02.195a3.043 3.043 0 0 1 1.421 1.167c.353.536.525 1.12.512 1.757-.013.636-.222 1.274-.626 1.915-.405.64-1.025 1.234-1.86 1.776-.835.542-1.629.87-2.384.984-.753.113-1.427.047-2.021-.194a3.068 3.068 0 0 1-1.42-1.168Zm1.166-.758c.198.299.482.506.85.62.368.112.803.108 1.304-.014.502-.121 1.051-.375 1.649-.764.598-.388 1.052-.785 1.364-1.193.312-.408.491-.8.532-1.18.043-.38-.037-.72-.235-1.02a1.51 1.51 0 0 0-.85-.62c-.368-.113-.803-.109-1.304.013s-1.05.378-1.648.764c-.599.389-1.053.786-1.365 1.193-.312.408-.49.8-.531 1.18-.041.38.036.72.234 1.021ZM120.854 43.605c-.269-.591-.377-1.161-.323-1.71a2.782 2.782 0 0 1 .607-1.486c.351-.442.837-.802 1.457-1.08l5.309-2.371.637 1.4-5.309 2.371c-.543.242-.915.572-1.115.99-.202.42-.198.857.011 1.318.209.462.522.793.91 1.027.389.235.832.351 1.312.351.472 0 .937-.088 1.402-.257.463-.168.943-.397 1.451-.682l.679 1.397c-.364.247-.736.464-1.125.671-.391.207-.794.375-1.211.502-.416.128-.832.224-1.26.288-.428.064-.858.096-1.285.096s-.856-.032-1.284-.096c-.428-.064-.834-.16-1.26-.288-.417-.128-.82-.295-1.211-.502-.389-.207-.761-.424-1.125-.671l.679-1.397c.509.285.988.514 1.451.682.464.169.93.257 1.402.257.48 0 .923-.116 1.312-.351.389-.234.702-.565.91-1.027s.213-.898.011-1.318c-.202-.418-.573-.748-1.115-.99l-5.309-2.371-.637-1.4 5.309 2.371c.62.278 1.106.638 1.457 1.08.351.442.522.974.607 1.486.054.549-.054 1.12-.323 1.71Z" />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center motion-safe:group-hover:scale-110 transition-transform duration-500">
                        <span
                          className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                          aria-hidden="true"
                          style={{
                            "--width": "5.125rem",
                            "--height": "3.75rem",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="83"
                            height="61"
                            fill="none"
                            viewBox="0 0 83 61"
                            className="w-full h-full"
                          >
                            <g className="fill-current">
                              <path d="M18.518 26.055c.35-1.06.593-1.935.939-2.767.128-.309.456-.623.77-.752.84-.347 1.703-.734 2.591-.857 3.4-.473 6.817-.827 10.223-1.264 4.215-.539 8.424-1.13 12.639-1.67 3.641-.466 7.288-.893 10.933-1.333.303-.037.614-.03.914-.083 1.25-.22 2.504-.27 3.713.151 2.656.924 7.307 2.611 7.59 2.713.283.102.657.718.657 1.014-.292.06-.835.161-1.098.18-1.764.12-3.53.207-5.293.35-.66.055-1.21-.075-1.67-.547-.53-.547-1.172-.75-1.938-.702-4.111.257-8.199.721-12.257 1.43-.47.082-.802.303-1.041.718-.235.405-.526.78-.815 1.198-8.838 1.298-17.735 1.654-26.857 2.223v-.002ZM42.373 37.138c-2.054.06-3.779-.794-5.41-1.872-.27-.178-.478-.58-.537-.911-.22-1.226-.382-2.463-.536-3.698-.11-.879.268-1.645.663-2.393.14-.268.363-.494.49-.767.545-1.178 1.53-1.612 2.764-1.747 2.096-.23 4.183-.527 6.275-.789 4.953-.62 9.904-1.261 14.861-1.84 2.159-.251 4.332-.383 6.5-.536.393-.028.813.058 1.194.177 1.085.334 2.028.938 2.89 1.657.79.658 1.178 1.55 1.385 2.526.112.527.184 1.061.28 1.591.285 1.586-.4 3.07-1.866 3.783-1.34.651-2.74 1.133-4.241 1.343-2.692.376-5.367.864-8.057 1.242-4.27.598-8.546 1.145-12.82 1.714-1.279.171-2.556.346-3.835.52Zm4.206-2.096c1.992-.295 4.03-.585 6.065-.9 2.082-.321 4.157-.677 6.239-.998 2.023-.312 4.049-.6 6.023-.892-.296-1.335-.676-2.535-.801-3.76-.124-1.206.009-2.438.029-3.657-2.91-.215-16.63 1.524-19.8 2.01.872 1.184 1.57 2.43 1.823 3.812.257 1.406.284 2.852.42 4.385h.002Zm-5.548-6.934c-.13.012-.406.01-.669.064-1.086.224-1.853.791-2.095 1.93-.268 1.267-.117 2.485.468 3.631.556 1.09 1.694 1.517 2.823 1.085.633-.242 1.235-.558 1.862-.816.457-.187.66-.519.768-.982.248-1.06.084-2.074-.285-3.069-.46-1.239-1.388-1.854-2.871-1.843h-.001Zm25.18-.194c.058.465.096.933.178 1.394.235 1.31 1.134 1.951 2.447 1.762.335-.048.674-.078 1.004-.15.742-.161 1.385-.895 1.452-1.627.158-1.71-1.092-3.793-2.692-4.484-.706-.306-1.224-.157-1.64.518a4.968 4.968 0 0 0-.75 2.587ZM29.222 52.925c-.155 1.641-.19 3.344-1.082 4.847-.392.662-.817 1.337-1.36 1.875-1.082 1.072-2.426 1.484-3.93 1.043-1.479-.435-2.708-1.247-3.479-2.62-1.767-3.142-2.544-6.47-2.116-10.09.25-2.114.748-4.114 1.94-5.883 1.685-2.502 3.89-2.906 6.01-1.2 1.12.9 1.948 2.053 2.502 3.388.864 2.083 1.133 4.283 1.351 6.495.07.702.108 1.408.164 2.145Zm-4.694 5.303c.327-.595.63-1.08.87-1.595.938-2.02 1.1-4.17.83-6.325a22.29 22.29 0 0 0-1.04-4.51c-.444-1.275-1.077-2.541-2.445-3.243-.157.126-.303.24-.44.349l.463.772c-.33.254-.67.409-.847.672-.802 1.183-1.492 2.466-1.543 3.9-.095 2.661.398 5.221 1.78 7.565.655 1.11 1.447 1.189 1.93 1.324-.086.254-.242.473-.335.753l.778.339-.001-.001ZM13.9 43.236c-.988-.215-1.885-.376-2.761-.609-.881-.233-1.271-.996-1.58-1.735a8.3 8.3 0 0 1-.582-2.133c-.24-1.936-.43-3.88-.582-5.825-.145-1.879-.22-3.764-.318-5.645-.049-.95.347-1.525 1.273-1.783 1.007-.28 2.026-.515 3.143-.794.346 1.893 1.591 2.446 3.37 2.424l.085-1.408c-.4-.1-.786-.18-1.163-.293-.401-.12-.601-.41-.642-.877.817-.413 1.742-.43 2.619-.608.425-.087.75.325.765.874.024.842-.025 1.685.012 2.525.101 2.308-.218 4.49-1.109 6.685-.88 2.166-1.282 4.523-1.892 6.797-.2.743-.395 1.488-.638 2.405ZM9.612 29.302v1.275c.959-.078 1.886.068 2.877-.167l-.296-1.414-2.58.307h-.001Z" />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-span-5 col-start-8 flex flex-col">
                  {/* News Article */}
                  <a
                    href="https://finchhattonmtb.com.au/news/trails-of-the-tropics-flow-mtb"
                    className="bg-granite flex rounded-[0.625rem] group overflow-hidden mb-grid-gutter transition-none"
                    data-mega-menu-fade=""
                  >
                    <span className="flex-1 flex flex-col px-6 py-5">
                      <span className="text-xs font-mono font-medium uppercase pb-3 text-[#525252] group-hover:text-mist transition-colors duration-300">
                        News
                      </span>
                      <span className="text-lg max-w-[16ch] group-hover:text-yellow transition-colors duration-300 text-green">
                        Trails of the tropics – Flow MTB
                      </span>
                      <span className="text-xs font-mono font-medium uppercase pt-4 mt-auto group-hover:text-yellow group-hover:-translate-y-2 transition-[color,transform] duration-300 text-green">
                        Read Article
                      </span>
                    </span>
                    <span className="aspect-[4/3] bg-green flex-1 relative overflow-hidden">
                      <span
                        className="absolute inset-0 bg-cover bg-center motion-safe:scale-[1.05] motion-safe:group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundImage:
                            "url(https://finchhattonmtb.com.au/wp-content/uploads/2024/07/Flow-MTB-Article.webp)",
                        }}
                      ></span>
                      <span className="absolute inset-0 bg-charcoal bg-blend-multiply opacity-35 group-hover:opacity-0 transition-opacity duration-300"></span>
                    </span>
                  </a>

                  {/* Event */}
                  <a
                    href="https://finchhattonmtb.com.au/?post_type=event&amp;p=1558"
                    className="bg-granite flex rounded-[0.625rem] group overflow-hidden mb-grid-gutter transition-none"
                    data-mega-menu-fade=""
                  >
                    <span className="flex-1 flex flex-col px-6 py-5">
                      <span className="text-xs font-mono font-medium uppercase pb-3 text-[#525252] group-hover:text-mist transition-colors duration-300">
                        Event
                      </span>
                      <span className="text-lg max-w-[16ch] group-hover:text-yellow transition-colors duration-300 text-orange">
                        Off The Beaten Track Trail Run Series
                      </span>
                      <span className="text-xs font-mono font-medium uppercase pt-4 mt-auto group-hover:text-yellow group-hover:-translate-y-2 transition-[color,transform] duration-300 text-orange">
                        Read More
                      </span>
                    </span>
                    <span className="aspect-[4/3] bg-green flex-1 relative overflow-hidden">
                      <span
                        className="absolute inset-0 bg-cover bg-center motion-safe:scale-[1.05] motion-safe:group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundImage:
                            "url(https://finchhattonmtb.com.au/wp-content/uploads/2024/03/Trail-Run-Series.webp)",
                        }}
                      ></span>
                      <span className="absolute inset-0 bg-charcoal bg-blend-multiply opacity-35 group-hover:opacity-0 transition-opacity duration-300"></span>
                    </span>
                  </a>

                  {/* Social Links */}
                  <ul
                    className="pt-12 mt-auto flex justify-between"
                    data-mega-menu-fade=""
                  >
                    <li>
                      <a
                        href="https://instagram.com/finchhattonmtb"
                        className="text-xs font-mono font-medium uppercase text-green hover:text-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/finchhattonmtb/"
                        className="text-xs font-mono font-medium uppercase text-green hover:text-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@finchhattonmtb"
                        className="text-xs font-mono font-medium uppercase text-green hover:text-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tiktok
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@finchhattonmtb"
                        className="text-xs font-mono font-medium uppercase text-green hover:text-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://finchhattonmtb.com.au/subscribe"
                        className="text-xs font-mono font-medium uppercase text-green hover:text-yellow"
                        target="_self"
                      >
                        Subscribe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="w-full h-6 text-charcoal -translate-y-4"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1512 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77856 18.1999C7.19861 18.3483 10.7122 18.3554 13.9954 18.7229C16.6521 19.0268 18.92 18.9279 21.3032 18.5038C22.5632 18.2777 23.8521 18.0798 25.1049 17.8466C26.156 17.6487 27.1282 17.6346 28.0641 17.9597C29.3097 18.3978 30.3177 18.1717 31.4481 17.8042C32.3481 17.5144 33.4569 17.3307 34.5298 17.1681C35.9337 16.9561 36.877 17.1681 37.5609 17.7759C39.2313 19.26 39.6129 19.2741 42.4641 18.2211C43.0114 18.0162 43.609 17.8395 44.3002 17.6134C44.9409 17.8254 45.4954 18.0091 46.0786 18.1929C48.2241 18.8572 50.1754 18.8713 52.4866 18.2565C53.3506 18.0256 54.3513 18.0657 55.4889 18.3766C55.1145 18.7582 54.7257 19.1469 54.3441 19.5356C56.0073 19.889 60.4713 19.9173 62.9625 19.5992C62.6313 19.2035 62.3002 18.8077 61.933 18.3696C63.6898 18.0869 64.9066 18.4049 65.641 18.9067C67.5634 20.2211 70.3641 20.0374 73.2369 19.8819C74.6697 19.8042 76.1169 19.7123 77.5497 19.7335C78.9177 19.7477 80.1346 19.6982 81.4954 19.5286C83.0649 19.3378 84.9369 19.571 86.6577 19.6699C87.7881 19.7335 88.8826 19.9597 90.0129 19.995C91.741 20.0515 92.2306 19.7689 91.9929 18.9985C91.921 18.7724 91.7122 18.5604 91.6473 18.3342C91.5178 17.8819 92.0505 17.6063 93.073 17.6346C95.6865 17.7194 98.3218 17.79 100.885 18.0091C101.663 18.0727 102.555 18.5674 102.807 18.942C103.333 19.7123 104.327 19.8678 106.055 19.8961C108.56 19.9455 111.073 20.207 113.255 19.4438C114.205 19.1116 115.177 18.7653 115.897 18.3484C117.279 17.5498 118.511 17.4226 120.361 18.0021C123.025 18.836 125.379 18.7041 127.424 17.6063C127.741 17.4367 128.159 17.3095 128.461 17.1893C128.835 17.2317 129.123 17.2317 129.217 17.2883C131.578 18.73 131.578 18.7441 135.517 18.3272C137.101 18.1646 138.613 18.0515 140.031 18.5392C142.465 19.3731 144.906 19.154 147.296 18.4897C148.167 18.2494 148.981 17.9738 150.032 17.6416C150.263 17.7971 150.479 17.9031 150.579 18.0233C151.868 19.5427 154.705 19.8749 157.556 18.8289C160.53 17.7406 162.445 17.7547 165.023 18.9985C166.153 19.5427 167.312 19.7265 168.925 19.571C171.135 19.366 173.367 19.1964 175.974 18.9844C178.551 19.6346 181.619 20.0939 185.132 19.5003C186.075 19.3378 187.213 19.3802 188.264 19.3448C190.078 19.2812 191.763 19.4014 193.376 18.6522C194.514 18.1222 196.911 18.207 198.668 18.7088C199.547 18.9561 200.425 19.2035 201.476 19.5003C203.168 18.9703 204.853 19.0268 206.559 19.571C207.092 19.7406 207.949 19.7971 208.64 19.783C211.189 19.7335 213.551 19.9526 215.955 20.5816C216.812 20.2353 217.741 19.8749 218.627 19.5003C219.606 19.0833 220.614 18.9349 222.047 19.1045C223.415 19.2671 224.898 19.2318 226.331 19.2883C226.842 19.3095 227.591 19.2883 227.807 19.4155C229.103 20.1929 230.687 19.8254 232.343 19.7759C235.158 19.6982 238.002 19.7971 240.831 19.8183C243.395 19.8395 245.958 19.7759 248.492 19.7335C250.703 19.6982 253.489 19.4155 255.599 20.3413C256.398 20.6876 257.881 20.7936 259.105 20.8925C259.695 20.942 260.84 20.7936 260.984 20.624C261.848 19.571 264.159 19.5215 265.527 19.2318C267.867 19.5356 269.783 19.7971 271.719 20.0162..."
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </section>
        <div
          className="fixed inset-0 z-30 bg-granite hidden group-[&amp;.modal-nav-open]/body:block lg:!hidden"
          data-lenis-prevent=""
          data-modal-menu=""
        >
          <div className="container h-full overflow-auto">
            <div className="flex flex-col pt-header-height-scrolled pb-6 min-h-full">
              <nav className="mb-10">
                <ul className="flex flex-wrap">
                  <li className="basis-1/2 relative pt-6 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <h2 className="text-green text-xl flex flex-col mb-3">
                      <span>Ride</span>
                    </h2>
                    <ul className="">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/trails"
                          className="text-white hover:text-yellow"
                        >
                          Trails
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/trailhead"
                          className="text-white hover:text-yellow"
                        >
                          Trailhead
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/shuttle"
                          className="text-white hover:text-yellow"
                        >
                          Shuttle
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom mb-1">
                        <a
                          href="https://www.corrycyclesfinchhatton.com.au/"
                          className="text-white hover:text-yellow"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bike Hire
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/safety"
                          className="text-white hover:text-yellow"
                        >
                          Safety
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/frequently-asked-questions"
                          className="text-white hover:text-yellow"
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="basis-1/2 relative pt-6 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <h2 className="text-green text-xl flex flex-col mb-3">
                      <span>Plan</span>
                    </h2>
                    <ul className="">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/getting-here"
                          className="text-white hover:text-yellow"
                        >
                          Getting Here
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/fhmtb-merch"
                          className="text-white hover:text-yellow"
                        >
                          FHMTB Merch
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/weather"
                          className="text-white hover:text-yellow"
                        >
                          Weather
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/shuttle"
                          className="text-white hover:text-yellow"
                        >
                          Shuttle
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/safety"
                          className="text-white hover:text-yellow"
                        >
                          Safety
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/the-region"
                          className="text-white hover:text-yellow"
                        >
                          The Region
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page mb-1">
                        <a
                          href="https://finchhattonmtb.com.au/frequently-asked-questions"
                          className="text-white hover:text-yellow"
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="basis-1/2 relative pt-6 menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      href="/news"
                      className="text-xl text-white hover:text-yellow"
                    >
                      News
                    </a>
                  </li>
                  <li className="basis-1/2 relative pt-6 menu-item menu-item-type-custom menu-item-object-custom">
                    <a
                      href="/events"
                      className="text-xl text-white hover:text-yellow"
                    >
                      Events
                    </a>
                  </li>
                  <li className="basis-1/2 relative pt-6 menu-item menu-item-type-post_type menu-item-object-page">
                    <a
                      href="https://finchhattonmtb.com.au/contact"
                      className="text-xl text-white hover:text-yellow"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="basis-1/2 relative pt-6">
                    <a
                      href="https://finchhattonmtb.com.au/subscribe"
                      className="text-xl text-white hover:text-yellow"
                    >
                      Subscribe
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                className="relative w-[150px] h-[150px] text-green [&amp;_a]:hover:text-yellow mt-auto"
                data-mega-menu-fade=""
              >
                <a
                  href="https://offcamber.com.au/mtbshuttles/"
                  className="block w-full h-full relative group hover:text-current"
                  target="_blank"
                  aria-label="Book shuttle"
                >
                  <div className="absolute inset-0 flex items-center justify-center motion-safe:group-hover:rotate-[30deg] transition-transform duration-500">
                    <span
                      className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                      aria-hidden="true"
                      style={{ "--width": "9.375rem", "--height": "9.375rem" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="136"
                        height="135"
                        fill="none"
                        viewBox="0 0 136 135"
                        className="w-full h-full"
                      >
                        <g className="fill-current">
                          <path d="M68.667 9.318L69.235.37l2.95.186c.567.036 1.057.164 1.47.386.414.222.728.519.947.888.218.37.312.788.282 1.255-.03.461-.187.854-.475 1.183a2.4 2.4 0 0 1-1.132.707c.54.196.957.488 1.256.881.3.39.433.841.398 1.353-.03.487-.185.91-.462 1.275a2.528 2.528 0 0 1-1.1.817c-.456.182-.983.252-1.586.216l-3.118-.194.002-.005Z" />
                          {/* Include the rest of your <path> elements here */}
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center motion-safe:group-hover:scale-110 transition-transform duration-500">
                    <span
                      className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                      aria-hidden="true"
                      style={{ "--width": "5.125rem", "--height": "3.75rem" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="83"
                        height="61"
                        fill="none"
                        viewBox="0 0 83 61"
                        className="w-full h-full"
                      >
                        <g className="fill-current">
                          <path d="M18.518 26.055c.35-1.06.593-1.935.939-2.767.128-.309.456-.623.77-.752.84-.347 1.703-.734 2.591-.857 3.4-.473 6.817-.827 10.223-1.264 4.215-.539 8.424-1.13 12.639-1.67 3.641-.466 7.288-.893 10.933-1.333.303-.037.614-.03.914-.083 1.25-.22 2.504-.27 3.713.151 2.656.924 7.307 2.611 7.59 2.713.283.102.657.718.657 1.014-.292.06-.835.161-1.098.18-1.764.12-3.53.207-5.293.35-.66.055-1.21-.075-1.67-.547-.53-.547-1.172-.75-1.938-.702-4.111.257-8.199.721-12.257 1.43-.47.082-.802.303-1.041.718-.235.405-.526.78-.815 1.198-8.838 1.298-17.735 1.654-26.857 2.223v-.002ZM42.373 37.138c-2.054.06-3.779-.794-5.41-1.872-.27-.178-.478-.58-.537-.911-.22-1.226-.382-2.463-.536-3.698-.11-.879.268-1.645.663-2.393.14-.268.363-.494.49-.767.545-1.178 1.53-1.612 2.764-1.747 2.096-.23 4.183-.527 6.275-.789 4.953-.62 9.904-1.261 14.861-1.84 2.159-.251 4.332-.383 6.5-.536.393-.028.813.058 1.194.177 1.085.334 2.028.938 2.89 1.657.79.658 1.178 1.55 1.385 2.526.112.527.184 1.061.28 1.591.285 1.586-.4 3.07-1.866 3.783-1.34.651-2.74 1.133-4.241 1.343-2.692.376-5.367.864-8.057 1.242-4.27.598-8.546 1.145-12.82 1.714-1.279.171-2.556.346-3.835.52Zm4.206-2.096c1.992-.295 4.03-.585 6.065-.9 2.082-.321 4.157-.677 6.239-.998 2.023-.312 4.049-.6 6.023-.892-.296-1.335-.676-2.535-.801-3.76-.124-1.206.009-2.438.029-3.657-2.91-.215-16.63 1.524-19.8 2.01.872 1.184 1.57 2.43 1.823 3.812.257 1.406.284 2.852.42 4.385h.002Zm-5.548-6.934c-.13.012-.406.01-.669.064-1.086.224-1.853.791-2.095 1.93-.268 1.267-.117 2.485.468 3.631.556 1.09 1.694 1.517 2.823 1.085.633-.242 1.235-.558 1.862-.816.457-.187.66-.519.768-.982.248-1.06.084-2.074-.285-3.069-.46-1.239-1.388-1.854-2.871-1.843h-.001Zm25.18-.194c.058.465.096.933.178 1.394.235 1.31 1.134 1.951 2.447 1.762.335-.048.674-.078 1.004-.15.742-.161 1.385-.895 1.452-1.627.158-1.71-1.092-3.793-2.692-4.484-.706-.306-1.224-.157-1.64.518a4.968 4.968 0 0 0-.75 2.587ZM29.222 52.925c-.155 1.641-.19 3.344-1.082 4.847-.392.662-.817 1.337-1.36 1.875-1.082 1.072-2.426 1.484-3.93 1.043-1.479-.435-2.708-1.247-3.479-2.62-1.767-3.142-2.544-6.47-2.116-10.09.25-2.114.748-4.114 1.94-5.883 1.685-2.502 3.89-2.906 6.01-1.2 1.12.9 1.948 2.053 2.502 3.388.864 2.083 1.133 4.283 1.351 6.495.07.702.108 1.408.164 2.145Zm-4.694 5.303c.327-.595.63-1.08.87-1.595.938-2.02 1.1-4.17.83-6.325a22.29 22.29 0 0 0-1.04-4.51c-.444-1.275-1.077-2.541-2.445-3.243-.157.126-.303.24-.44.349l.463.772c-.33.254-.67.409-.847.672-.802 1.183-1.492 2.466-1.543 3.9-.095 2.661.398 5.221 1.78 7.565.655 1.11 1.447 1.189 1.93 1.324-.086.254-.242.473-.335.753l.778.339-.001-.001ZM13.9 43.236c-.988-.215-1.885-.376-2.761-.609-.881-.233-1.271-.996-1.58-1.735a8.3 8.3 0 0 1-.582-2.133c-.24-1.936-.43-3.88-.582-5.825-.145-1.879-.22-3.764-.318-5.645-.049-.95.347-1.525 1.273-1.783 1.007-.28 2.026-.515 3.143-.794.346 1.893 1.591 2.446 3.37 2.424l.085-1.408c-.4-.1-.786-.18-1.163-.293-.401-.12-.601-.41-.642-.877.817-.413 1.742-.43 2.619-.608.425-.087.75.325.765.874.024.842-.025 1.685.012 2.525.101 2.308-.218 4.49-1.109 6.685-.88 2.166-1.282 4.523-1.892 6.797-.2.743-.395 1.488-.638 2.405ZM9.612 29.302v1.275c.959-.078 1.886.068 2.877-.254.586-.209.965-.658.909-1.301-.08-.602-.438-.893-.919-.878-.87-.004-1.584.713-2.517-.142.382.876-.54-.68-.662-1.153Z" />
                        </g>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        id="content"
        className="bg-charcoal pointer-events-auto group-[&:not(.reveal-footer)]/body:!mb-0"
        style={{ marginBottom: "1418px" }}
      >
        <section>
          <div
            className="group"
            data-carousel-swiper=""
            data-transition-effect="slide"
            data-loop="true"
            data-bullets="false"
            data-autoplay="none"
          >
            <div className="col-span-6 lg:col-span-12">
              <div className="h-svh overflow-hidden bg-granite">
                <div className="h-full">
                  <div className="h-full">
                    <div
                      className="!h-full max-lg:!bg-transparent"
                      style={{ backgroundColor: "#0a0a0a" }}
                    >
                      <div className="aspect-auto absolute inset-0">
                        <video
                          className="h-full w-full pointer-events-none absolute inset-0 object-cover"
                          playsInline
                          loop
                          muted
                          autoPlay
                          preload="auto"
                          poster="https://finchhattonmtb.com.au/wp-content/uploads/2024/02/finch-hatton-hero-video.webp"
                        >
                          <source
                            src="https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-hero-landing.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div
                        className="absolute top-0 h-[30dvh] inset-x-0 bg-gradient-to-b from-black/40 to-black/0"
                        aria-hidden="true"
                      ></div>
                      <div className="h-full relative flex items-end">
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="container grid grid-cols-8 lg:grid-cols-12 gap-x-grid-gutter h-full">
                            <div className="col-span-6 col-start-2 lg:col-span-10 lg:col-start-2 flex items-center">
                              <picture className="max-sm:max-w-[250px] mx-auto">
                                <source
                                  media="(max-width: 640px)"
                                  srcSet="/wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture-stacked.webp 1x, /wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture-stacked@2x.webp 2x, /wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture-stacked@3x.webp 3x"
                                  width="250"
                                  height="216"
                                />
                                <img
                                  fetchPriority="high"
                                  decoding="async"
                                  src="/wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture.webp"
                                  srcSet="/wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture.webp 1378w, /wp-content/themes/finch-hatton/assets/images/finch-hatton-wordmark-texture@2x.webp 2756w"
                                  sizes="80vw"
                                  alt="Finch Hatton MTB QLD Logo"
                                  width="1378"
                                  height="382"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/55 w-full pt-6 lg:pt-12 pb-6 lg:pb-12">
                          <div className="container grid grid-cols-6 lg:grid-cols-12 gap-x-grid-gutter">
                            <div className="col-span-6 lg:col-span-10 lg:col-start-2 flex flex-col justify-end relative">
                              <div className="w-full flex items-center">
                                <div
                                  className="prose text-yellow text-pretty lg:text-[24px]/[28px] max-w-[36ch] opacity-0"
                                  data-scrolly-text=""
                                  style={{ opacity: 1 }}
                                >
                                  <div className="line overflow-hidden">
                                    <p>
                                      <span className="word">Australia’s</span>{" "}
                                      <span className="word">newest</span>{" "}
                                      <span className="word">mountain</span>{" "}
                                      <span className="word">bike</span>{" "}
                                      <span className="word">destination,</span>{" "}
                                      <span className="word">surrounded</span>{" "}
                                      <span className="word">by</span>{" "}
                                      <span className="word">one</span>{" "}
                                      <span className="word">of</span>{" "}
                                      <span className="word">the</span>{" "}
                                      <span className="word">world’s</span>{" "}
                                      <span className="word">oldest</span>{" "}
                                      <span className="word">rainforests.</span>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="ml-auto pl-6 relative group"
                                  data-slide-cards-trigger="1"
                                  data-slide-cards="false"
                                >
                                  <button
                                    type="button"
                                    className="group/button w-[5rem] h-[5rem] lg:w-[6.25rem] lg:h-[6.25rem] flex items-center justify-center text-center shrink-0 uppercase font-slab font-black text-2xl lg:text-3xl text-yellow border border-yellow border rounded-full transition-transform duration-200 peer hover:scale-105 relative"
                                  >
                                    <span className="group-hover/button:opacity-0 transition-opacity duration-300 group-data-[slide-cards='true']:opacity-0">
                                      Go
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover/button:opacity-100 group-hover/button:scale-100 group-hover/button:rotate-[12deg] transition-[transform,opacity] duration-300 group-data-[slide-cards='true']:opacity-100 group-data-[slide-cards='true']:scale-100">
                                      <span
                                        className="block mx-auto w-[--width] h-[--height] [&amp;_svg]:w-full [&amp;_svg]:h-full"
                                        aria-hidden="true"
                                        style={{
                                          "--width": "4.1875rem",
                                          "--height": "2.5625rem",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="67"
                                          height="41"
                                          fill="none"
                                          viewBox="0 0 67 41"
                                          className="w-full h-full"
                                        >
                                          <g className="fill-current">
                                            {/* SVG paths go here */}
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="group fixed inset-0 bg-black/80 z-50 opacity-0 pointer-events-none data-[slide-cards='true']:pointer-events-auto data-[slide-cards='true']:opacity-100 invisible data-[slide-cards='true']:visible transition-opacity duration-300"
          data-slide-cards-target="1"
          data-slide-cards="false"
        >
          <button
            className="cursor-pointer text-yellow absolute top-0 right-0 p-12 z-30"
            type="button"
            data-close=""
            aria-label="close"
          >
            <span
              className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
              aria-hidden="true"
              style={{ "--width": "1.5rem", "--height": "1.5rem" }}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="13.836"
                height="13.836"
                viewBox="0 0 13.836 13.836"
              >
                <g
                  fill="none"
                  className="stroke-current"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  data-name="Group 431"
                >
                  <path
                    d="M1.06 12.775 12.775 1.06"
                    data-name="Path 323"
                  ></path>
                  <path
                    d="m1.06 1.06 11.715 11.715"
                    data-name="Path 326"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
          <button
            data-close=""
            type="button"
            className="absolute inset-0 w-full h-full z-10 cursor-default"
          ></button>
          <div className="absolute inset-0 flex flex-wrap items-end space-x-2 lg:space-x-8 justify-center pt-24 pb-24 lg:pb-48 scale-50 group-data-[slide-cards='true']:scale-100 transition-scale duration-300 ease-in-out origin-bottom-right z-20 pointer-events-none">
            {/* Card Items */}
            {[
              {
                href: "https://finchhattonmtb.com.au/trails",
                bgColor: "bg-green",
                bgImage:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/finch-hatton-sweet-trails-500x0-c-default.webp",
                text: "Explore Trails",
              },
              {
                href: "https://finchhattonmtb.com.au/shuttle",
                bgColor: "bg-orange",
                imgSrc:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-shuttle-clean-yellow-1.png",
                text: "Book Shuttle",
              },
              {
                href: "https://www.corrycyclesfinchhatton.com.au/",
                bgColor: "bg-granite",
                imgSrc:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-rider-clean-yellow-1.png",
                text: "Bike Hire",
              },
              {
                href: "https://finchhattonmtb.com.au/getting-here",
                bgColor: "bg-green",
                imgSrc:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-compass-clean-yellow-1.png",
                text: "Getting Here",
              },
              {
                href: "https://finchhattonmtb.com.au/news",
                bgColor: "bg-green",
                bgImage:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/finch-hatton-latest-news.webp",
                text: "Latest News",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-32 lg:w-48 xl:w-60 relative scale-50 group-data-[slide-cards='true']:translate-y-0 group-data-[slide-cards='true']:rotate-0 group-data-[slide-cards='true']:scale-100 transition-transform duration-300 ease-in-out pointer-events-auto`}
              >
                <a
                  href={item.href}
                  className={`${item.bgColor} flex flex-col items-center justify-between aspect-[3/4] overflow-hidden rounded-[0.625rem] items-end justify-center p-4 relative w-full group/card transition-transform duration-200 ease-in-out`}
                >
                  {item.bgImage && (
                    <span
                      className="absolute inset-0 bg-center bg-cover bg-charcoal/35 bg-blend-multiply pointer-events-none"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                      aria-hidden="true"
                    ></span>
                  )}
                  {item.imgSrc && (
                    <img
                      decoding="async"
                      loading="lazy"
                      src={item.imgSrc}
                      alt=""
                      className="max-w-20 lg:max-w-32 lg:translate-y-6 xl:translate-y-8 motion-safe:group-hover/card:scale-105 transition-transform duration-200 ease-in-out"
                    />
                  )}
                  <span className="mt-auto font-slab font-black uppercase text-yellow text-center text-[1.5rem]/[1.125rem] lg:text-[1.875rem]/[1.40625rem] xl:text-3xl z-10 px-12">
                    {item.text}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <section className="bg-green">
          <div className="container grid grid-cols-6 lg:grid-cols-12 gap-x-grid-gutter pt-24 md:pt-36 pb-16 lg:pb-24">
            <div className="col-span-6 lg:col-span-12">
              <h1
                className="font-slab font-black uppercase text-mega text-center flex flex-col text-yellow select-none opacity-0 [&_div:first-child_div]:!opacity-100 [&_div:first-child_div]:!transform-none"
                data-scrolly-reveal-words=""
                style={{ opacity: 1 }}
              >
                {["Tropical", "Trails", "&", "Endless", "Tales"].map(
                  (word, index) => (
                    <div
                      key={index}
                      className="line overflow-hidden"
                      style={{
                        display: "block",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 100%)",
                          opacity: 0,
                        }}
                        className="word"
                      >
                        {word}
                      </div>
                    </div>
                  )
                )}
              </h1>
              <div
                className="flex justify-center mix-blend-darken"
                data-parallax="-25"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <video
                  playsInline
                  muted
                  autoPlay
                  loop
                  width="165"
                  preload="auto"
                  className="max-w-[25vw] lg:w-[165px] h-auto lg:-translate-y-[25%]"
                >
                  <source
                    src="/wp-content/themes/finch-hatton/assets/images/finch-hatton-illustrations.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-charcoal mb-12 md:mb-24 lg:mb-40 xl:mb-54">
          <div className="absolute inset-x-0 top-0 bottom-1/2 bg-green"></div>
          <div className="container grid grid-cols-6 lg:grid-cols-12 gap-x-grid-gutter">
            {[
              {
                link: "https://finchhattonmtb.com.au/trails",
                bgImage:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/finch-hatton-sweet-trails.webp",
                label: "Explore",
                title: "Sweet Trails",
              },
              {
                link: "https://finchhattonmtb.com.au/news",
                bgImage:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/02/finch-hatton-latest-news.webp",
                label: "Latest",
                title: "Latest News",
              },
              {
                link: "https://finchhattonmtb.com.au/fhmtb-merch",
                bgImage:
                  "https://finchhattonmtb.com.au/wp-content/uploads/2024/03/finch-hatton-merch-optimised.webp",
                label: "Gear up",
                title: "FHMTB Merch",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-2 lg:col-span-4 mb-6 md:mb-0"
                data-parallax="-20"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <a
                  href={item.link}
                  className="flex aspect-[3/4] overflow-hidden rounded-[0.625rem] items-end justify-center px-16 py-10 relative group has-[span[data-left]:hover]:motion-safe:-rotate-[1deg] has-[span[data-right]:hover]:motion-safe:rotate-[1deg] transition-transform duration-200 ease-in-out"
                >
                  <span
                    className="hidden motion-safe:block absolute inset-y-0 left-0 w-1/2"
                    data-left=""
                    aria-hidden="true"
                  ></span>
                  <span
                    className="hidden motion-safe:block absolute inset-y-0 left-1/2 w-1/2"
                    data-right=""
                    aria-hidden="true"
                  ></span>
                  <span
                    className="absolute inset-0 bg-center bg-cover bg-charcoal/35 bg-blend-multiply pointer-events-none motion-safe:group-hover:scale-[1.02] transition-transform duration-200 ease-in-out"
                    style={{
                      backgroundImage: `url(${item.bgImage})`,
                    }}
                    aria-hidden="true"
                  ></span>
                  <span className="font-mono font-medium text-xs uppercase text-white text-center z-10 absolute top-0 inset-x-0 pt-8 opacity-0 -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-200">
                    {item.label}
                  </span>
                  <span
                    className="font-slab font-black uppercase text-yellow text-center text-3xl xl:text-[6.25rem]/[4.6875rem] z-10 px-12"
                    data-scrolly-fade=""
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 50px)",
                      opacity: 0,
                    }}
                  >
                    {item.title}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-charcoal container grid grid-cols-6 lg:grid-cols-12 gap-grid-gutter pb-12 md:pb-24 lg:pb-40 xl:pb-52">
          <div className="col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-6 lg:col-span-12 pb-12">
            <h2 className="text-yellow text-2xl flex flex-col">
              <span className="pb-3">Know Before You Go</span>
              <span
                className="bg-yellow w-full h-px"
                data-keyline=""
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transformOrigin: "0% 50%",
                  transform: "scale(0, 1)",
                }}
              ></span>
            </h2>
          </div>
          {links.map((link, index) => (
            <div
              key={index}
              className="col-span-6 sm:col-span-4 sm:col-start-2 md:col-start-0 md:col-span-3 lg:col-span-3"
            >
              <a
                href={link.href}
                target={link.target}
                className={`flex rounded-[0.625rem] ${link.bgColor} min-h-[20rem] 2xl:min-h-[24rem] items-end py-3 px-5 relative group has-[span[data-left]:hover]:motion-safe:-rotate-[1deg] has-[span[data-right]:hover]:motion-safe:rotate-[1deg] transition-transform duration-200 ease-in-out`}
              >
                <span
                  className="hidden motion-safe:block absolute inset-y-0 left-0 w-1/2"
                  data-left=""
                  aria-hidden="true"
                ></span>
                <span
                  className="hidden motion-safe:block absolute inset-y-0 left-1/2 w-1/2"
                  data-right=""
                  aria-hidden="true"
                ></span>
                <img
                  decoding="async"
                  loading="lazy"
                  src={link.imgSrc}
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[12.5rem] motion-safe:group-hover:scale-110 transition-transform duration-200 ease-in-out"
                  data-no-image-fade-in=""
                />
                <span className="text-2xl text-yellow w-full flex items-center">
                  <span>{link.text}</span>
                  <span className="ml-auto -translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-[transform,opacity] duration-200 ease-in-out">
                    →
                  </span>
                </span>
              </a>
            </div>
          ))}
        </section>
        <div
          className="w-full h-6 text-charcoal z-10 overflow-hidden relative translate-y-6 peer-[[data-subscribe]]:hidden"
          aria-hidden="true"
        >
          <div className="-scale-x-[1.02] absolute inset-0 -translate-y-6">
            <svg
              viewBox="0 0 1512 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.77856 18.1999C7.19861 18.3483 10.7122 18.3554 13.9954 18.7229C16.6521 19.0268 18.92 18.9279 21.3032 18.5038C22.5632 18.2777 23.8521 18.0798 25.1049 17.8466C26.156 17.6487 27.1282 17.6346 28.0641 17.9597C29.3097 18.3978 30.3177 18.1717 31.4481 17.8042C32.3481 17.5144 33.4569 17.3307 34.5298 17.1681C35.9337 16.9561 36.877 17.1681 37.5609 17.7759C39.2313 19.26 39.6129 19.2741 42.4641 18.2211C43.0114 18.0162 43.609 17.8395 44.3002 17.6134C44.9409 17.8254 45.4954 18.0091 46.0786 18.1929C48.2241 18.8572 50.1754 18.8713 52.4866 18.2565C53.3506 18.0256 54.3513 18.0657 55.4889 18.3766C55.1145 18.7582 54.7257 19.1469 54.3441 19.5356C56.0073 19.889 60.4713 19.9173 62.9625 19.5992C62.6313 19.2035 62.3002 18.8077 61.933 18.3696C63.6898 18.0869 64.9066 18.4049 65.641 18.9067C67.5634 20.2211 70.3641 20.0374 73.2369 19.8819C74.6697 19.8042 76.1169 19.7123 77.5497 19.7335C78.9177 19.7477 80.1346 19.6982 81.4954 19.5286C83.0649 19.3378 84.9369 19.571 86.6577 19.6699C87.7881 19.7335 88.8826 19.9597 90.0129 19.995C91.741 20.0515 92.2306 19.7689 91.9929 18.9985C91.921 18.7724 91.7122 18.5604 91.6473 18.3342C91.5178 17.8819 92.0505 17.6063 93.073 17.6346C95.6865 17.7194 98.3218 17.79 100.885 18.0091C101.663 18.0727 102.555 18.5674 102.807 18.942C103.333 19.7123 104.327 19.8678 106.055 19.8961C108.56 19.9455 111.073 20.207 113.255 19.4438C114.205 19.1116 115.177 18.7653 115.897 18.3484C117.279 17.5498 118.511 17.4226 120.361 18.0021C123.025 18.836 125.379 18.7041 127.424 17.6063C127.741 17.4367 128.159 17.3095 128.461 17.1893C128.835 17.2317 129.123 17.2317 129.217 17.2883C131.578 18.73 131.578 18.7441 135.517 18.3272C137.101 18.1646 138.613 18.0515 140.031 18.5392C142.465 19.3731 144.906 19.154 147.296 18.4897C148.167 18.2494 148.981 17.9738 150.032 17.6416C150.263 17.7971 150.479 17.9031 150.579 18.0233C151.868 19.5427 154.705 19.8749 157.556 18.8289C160.53 17.7406 162.445 17.7547 165.023 18.9985C166.153 19.5427 167.312 19.7265 168.925 19.571C171.135 19.366 173.367 19.1964 175.974 18.9844C178.551 19.6346 181.619 20.0939 185.132 19.5003C186.075 19.3378 187.213 19.3802 188.264 19.3448C190.078 19.2812 191.763 19.4014 193.376 18.6522C194.514 18.1222 196.911 18.207 198.668 18.7088C199.547 18.9561 200.425 19.2035 201.476 19.5003C203.168 18.9703 204.853 19.0268 206.559 19.571C207.092 19.7406 207.949 19.7971 208.64 19.783C211.189 19.7335 213.551 19.9526 215.955 20.5816..."
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </main>
      <footer
        id="footer"
        className="relative lg:group-[&amp;.reveal-footer]/body:fixed lg:group-[&amp;.reveal-footer]/body:z-[-1] inset-x-0 bottom-0 bg-mist text-granite bg-mist text-granite bg-[url('/wp-content/themes/finch-hatton/assets/images/grid.svg')] bg-repeat bg-[length:1.75rem_1.75rem] overflow-hidden"
      >
        <div className="container grid grid-cols-6 lg:grid-cols-12 gap-x-grid-gutter">
          <div className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-span-4 lg:col-start-8 xl:col-span-3 xl:col-start-9 pt-12 lg:pt-20">
            <h2 className="font-mono font-medium text-2xs uppercase pb-4">
              Follow
            </h2>
            <ul className="flex items-center space-x-8 pb-12 xl:pb-20">
              <li>
                <a
                  href="https://instagram.com/finchhattonmtb"
                  className="text-green hover:text-granite block"
                  aria-label="Follow Finch Hatton on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="block mx-auto w-[--width] h-[--height] [&_svg]:w-full [&_svg]:h-full"
                    aria-hidden="true"
                    style={{ "--width": "1.5rem", "--height": "1.5rem" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="47"
                      fill="none"
                      viewBox="0 0 46 47"
                    >
                      <path
                        className="fill-current"
                        d="M13.681.647 10.86.96l-2.73.775-4.006 2.693-2.66 4.022-.731 2.736-.314 2.816-.132 3.14.001 3.141.04 3.142-.005 3.142.05 3.142.084 3.14.33 2.813.73 2.735 2.668 4.026 4.055 2.602 2.719.769 2.813.346 3.14.114 3.14-.007 3.141-.001 3.142-.038 3.14-.053 3.14-.119 2.814-.284 2.732-.738 4.063-2.628 2.594-4.081.767-2.725.303-2.818.08-3.14L46 26.48l-.032-3.143.029-3.141v-3.142l-.196-3.136-.299-2.815-.737-2.731-2.608-4.075-4.083-2.594-2.731-.74-2.816-.3-3.14-.077-3.14-.05-3.141.026-3.142-.02-3.141.002-3.14.118m.27 41.305L9.719 41.2l-2.625-1.695-1.767-2.593-.755-4.258-.136-3.076-.01-3.079.02-3.079-.024-3.079-.02-3.08.115-3.076.762-4.256 1.734-2.621 2.616-1.739 4.252-.757 3.075-.141 3.078-.054 3.08.004 3.079.05 3.078.03 3.078.074 4.239.778 2.648 1.682 1.738 2.625.802 4.252.092 3.078-.001 3.08-.016 3.079.045 3.078-.029 3.08-.109 3.076-.755 4.252-1.717 2.627-2.615 1.743-4.252.759-3.076.078-3.078.112-3.08.005-3.078-.029-3.078-.066-3.077-.053m18.592-30.846 2.784 2.768 2.762-2.777-2.77-2.7-.002-.042-2.715 2.751m-21.226 12.24.412 3.044 1.186 2.833 1.92 2.387 2.403 1.893 2.84 1.143 3.032.41 3.045-.374 2.824-1.2 2.4-1.899 1.87-2.419 1.15-2.833.423-3.031-.428-3.03-1.141-2.842-1.896-2.407-2.441-1.839-2.819-1.177-3.031-.443-3.047.392-2.823 1.206-2.428 1.872-1.839 2.45-1.146 2.834-.385 3.03m4.11-.009.562-2.906 1.639-2.469 2.435-1.71 2.93-.545 2.926.548 2.467 1.667 1.63 2.48.603 2.905-.536 2.93-1.666 2.474-2.466 1.677-2.927.555-2.928-.548-2.454-1.683-1.685-2.45-.61-2.923.015-.002"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              {/* Add other social media links similarly */}
            </ul>
            <h2 className="font-mono font-medium text-2xs uppercase pb-4">
              Trail Tales
            </h2>
            <form
              className="flex flex-col pb-12 lg:pb-16 xl:pb-24"
              action="https://qld.us12.list-manage.com/subscribe/post?u=20e76f6f46d77325a4742796a&amp;id=80e3fc210f&amp;f_id=00f5c2e1f0"
              method="post"
            >
              <label
                className="text-[1.25rem]/[1.5rem] cursor-pointer"
                htmlFor="footer-newsletter-email"
              >
                Subscribe for updates &amp; adventures
              </label>
              <div className="flex border-b border-green pt-4 text-green has-[:focus]:border-granite has-[:focus]:text-granite transition-colors duration-300">
                <input
                  name="EMAIL"
                  type="email"
                  placeholder="Email*"
                  id="footer-newsletter-email"
                  required
                  className="text-[1.25rem]/[1.5rem] bg-transparent font-sans placeholder:text-green focus:outline-none flex-1 pr-6"
                />
                <button
                  type="submit"
                  className="text-green text-[1.25rem]/[1.5rem] font-sans pl-2 py-2 ml-auto hover:text-granite transition-colors duration-300"
                >
                  →
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-span-4 lg:col-start-8 xl:col-span-3 xl:col-start-9">
            <h2 className="font-mono font-medium text-2xs uppercase pb-6">
              Explore
            </h2>
          </div>
          <div className="col-span-3 sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-8 xl:col-start-9">
            <ul className="text-[1.25rem]/[1.5rem] space-y-3">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/trails"
                  className="text-green hover:text-granite"
                >
                  Trails
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/trailhead"
                  className="text-green hover:text-granite"
                >
                  Trailhead
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/shuttle"
                  className="text-green hover:text-granite"
                >
                  Shuttle
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/getting-here"
                  className="text-green hover:text-granite"
                >
                  Getting Here
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-10 xl:col-start-11">
            <ul className="text-[1.25rem]/[1.5rem] space-y-3">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/weather"
                  className="text-green hover:text-granite"
                >
                  Weather
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/news" className="text-green hover:text-granite">
                  News
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/events" className="text-green hover:text-granite">
                  Events
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a
                  href="https://finchhattonmtb.com.au/contact"
                  className="text-green hover:text-granite"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-span-4 lg:col-start-8 xl:col-span-4 xl:col-start-9 pt-12 lg:pt-16 xl:pt-24">
            <p className="font-mono font-medium text-2xs uppercase">
              We acknowledge the traditional owners of the land on which the
              Mackay region stands, the Yuwi and Widi people, and pay our
              respects to their elders, past, present and emerging.
            </p>
          </div>
          <div className="col-span-3 sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-8 xl:col-start-9 pt-8 pb-12">
            <a
              href="https://finchhattonmtb.com.au/privacy-disclaimer"
              className="font-mono font-medium text-2xs uppercase text-green hover:text-granite ml-4 first:ml-0"
            >
              Privacy/Disclaimer
            </a>
          </div>
          <div className="col-span-3 sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-10 xl:col-start-11 pt-8 pb-12">
            <a
              href="https://swelldesigngroup.au/?utm_source=website&amp;utm_medium=sitebyreferral&amp;utm_campaign=Finch+Hatton"
              className="font-mono font-medium text-2xs uppercase text-green hover:text-granite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site by Swell
            </a>
          </div>
          <div
            className="hidden lg:block w-[50vw] bg-green absolute inset-y-0 left-0"
            aria-hidden="true"
          ></div>
          <div className="col-span-6 bg-green lg:row-span-5 lg:row-start-1 flex flex-col items-center justify-end relative -mx-6 lg:mx-0">
            <img
              src="https://finchhattonmtb.com.au/wp-content/themes/finch-hatton/assets/images/footer-logo-optimised.webp"
              alt=""
              width="372"
              height="321"
              className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[220px] lg:w-[300px] xl:w-[460px] h-auto py-12 xl:pt-0"
              loading="lazy"
              style={{ opacity: 1 }}
            />
            <div className="flex flex-wrap justify-center items-center">
              <a
                className="basis-full sm:basis-auto hover:text-yellow mb-5 sm:mb-0"
                href="https://www.mackay.qld.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Mackay Regional Council</span>
                <span
                  className="block mx-auto w-[--width] xl:w-[--xl-width] h-[--height] xl:h-[--xl-height] [&_svg]:w-full [&_svg]:h-full"
                  aria-hidden="true"
                  style={{
                    "--width": "9.6875rem",
                    "--xl-width": "10.75rem",
                    "--height": "1.3125rem",
                    "--xl-height": "1.4375rem",
                  }}
                >
                  <svg
                    width="244"
                    height="33"
                    viewBox="0 0 244 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M30.751 0.124928C31.456 0.124928 32.0327 0.695785 32.0327 1.40535V30.8445C32.0327 31.5541 31.4613 32.1249 30.751 32.1249H1.28174C0.571441 32.1249 0 31.5541 0 30.8445V15.7942C0 15.4367 0.288391 15.1433 0.65155 15.1433C0.83847 15.1433 1.00403 15.2233 1.12152 15.346C5.11093 19.1446 7.40203 25.3974 8.11767 27.3873C8.12301 27.4087 8.13369 27.4247 8.14437 27.4407C8.20312 27.5367 8.30459 27.6061 8.42742 27.6061C8.57162 27.6061 8.69445 27.5154 8.73717 27.3873C9.96016 23.4874 9.85335 15.3513 8.29391 10.3683C8.2672 10.283 8.25652 10.2083 8.25652 10.1336C8.25652 9.77614 8.54491 9.48271 8.90807 9.48271C9.00954 9.48271 9.10567 9.50405 9.19112 9.54674C14.0777 11.8355 17.5278 17.1013 18.8362 19.2833C18.8949 19.3793 18.9964 19.4487 19.1192 19.4487C19.3008 19.4487 19.445 19.3047 19.445 19.1126C19.6426 15.6448 19.3222 8.47438 16.3742 3.17128C16.3101 3.04857 16.2781 2.93653 16.2781 2.81916C16.2781 2.43503 16.5878 2.12559 16.9723 2.12559C17.0952 2.12559 17.2073 2.15761 17.3088 2.21096C20.5719 3.96621 23.397 8.21296 24.2996 9.71746C24.3423 9.78682 24.4171 9.83483 24.5079 9.83483C24.6414 9.83483 24.7482 9.72813 24.7482 9.58942C24.7856 6.86851 23.835 3.50739 22.5052 0.770477C22.4891 0.717125 22.4785 0.663774 22.4785 0.605088C22.4785 0.332997 22.6974 0.114258 22.9698 0.114258H30.7617L30.751 0.124928Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M36.5134 1.40543C36.5134 0.695857 37.0849 0.125 37.7952 0.125H67.2644C67.9694 0.125 68.5462 0.695857 68.5462 1.40543V25.7122C68.5462 26.1497 68.1937 26.5071 67.7558 26.5071C67.5528 26.5071 67.3659 26.4324 67.2057 26.2831C64.0174 23.3114 59.542 20.8732 54.9811 22.3351C47.985 24.5758 47.3121 31.3407 37.7952 32.125C37.0849 32.125 36.5134 31.5541 36.5134 30.8446V1.40543Z"
                    ></path>
                    {/* Additional <path> elements would follow */}
                  </svg>
                </span>
              </a>
            </div>
            <p className="font-mono font-medium text-center text-pretty text-2xs uppercase pt-8 pb-12 px-6">
              © 2024 Mackay Regional Council. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
