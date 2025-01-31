/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { useState } from "react";
import {
  eventsPhysicalBg,
  eventsVirtualBg,
} from "../../../../../../assets/images/community";
import EventRSVP from "./EventRSVP";

function Hero({ event }) {
  const isVirtual = event?.mode === "Virtual";

  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full bg-white p-1.5 md:p-2 border rounded-xl md:rounded-[20px]">
      <div
        className={`rounded-md md:rounded-xl bg-right md:bg-cover bg-transparent bg-no-repeat h-96 overflow-hidden lg:h-[512px] flex items-end justify-center pb-4 lg:pb-12
${isVirtual ? "text-white" : "text-green-header"}
      `}
        style={{
          backgroundImage: `url(${
            isVirtual ? eventsPhysicalBg : eventsVirtualBg
          })`,
        }}
      >
        <div className="flex-center flex-col gap-3 p-1 lg:gap-4 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            {event?.name}
          </h2>

          {/* <p className="text-center text-base font-normal line-clamp-2 lg:px-4">
            {event?.about.slice(0, 50)}...
          </p> */}

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:gap-x-16 lg:gap-y-6">
            <div className="flex items-center gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7643_20644)">
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M6.92102 0.740234C6.10916 0.740234 5.45102 1.39838 5.45102 2.21023V3.68023H3.98102C2.3573 3.68023 1.04102 4.99652 1.04102 6.62023V21.3202C1.04102 22.944 2.3573 24.2602 3.98102 24.2602H21.621C23.2447 24.2602 24.561 22.944 24.561 21.3202V6.62023C24.561 4.99652 23.2447 3.68023 21.621 3.68023H20.151V2.21023C20.151 1.39838 19.4929 0.740234 18.681 0.740234C17.8692 0.740234 17.211 1.39838 17.211 2.21023V3.68023H8.39102V2.21023C8.39102 1.39838 7.73287 0.740234 6.92102 0.740234ZM6.92102 8.09023C6.10916 8.09023 5.45102 8.74837 5.45102 9.56023C5.45102 10.3721 6.10916 11.0302 6.92102 11.0302H18.681C19.4929 11.0302 20.151 10.3721 20.151 9.56023C20.151 8.74837 19.4929 8.09023 18.681 8.09023H6.92102Z"
                    // fill="#FCFDFC"
                    fill={isVirtual ? "#FCFDFC" : "#1F7964"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7643_20644">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.800781 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-base font-normal">{event?.start_date}</span>
            </div>

            <div className="flex items-center gap-2 lg:place-self-end">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7645_21542)">
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M12.8016 23.7008C18.9872 23.7008 24.0016 18.6864 24.0016 12.5008C24.0016 6.31519 18.9872 1.30078 12.8016 1.30078C6.61597 1.30078 1.60156 6.31519 1.60156 12.5008C1.60156 18.6864 6.61597 23.7008 12.8016 23.7008ZM13.8018 6.90039C13.8018 6.34811 13.354 5.90039 12.8018 5.90039C12.2495 5.90039 11.8018 6.34811 11.8018 6.90039V12.5004C11.8018 12.7656 11.9071 13.02 12.0947 13.2075L16.0545 17.1673C16.445 17.5578 17.0781 17.5578 17.4687 17.1673C17.8592 16.7768 17.8592 16.1436 17.4687 15.7531L13.8018 12.0862V6.90039Z"
                    fill={isVirtual ? "#FCFDFC" : "#1F7964"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7645_21542">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.800781 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-base font-normal">{event?.start_time}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7762_21563)">
                  <circle
                    cx="12.0009"
                    cy="12.0009"
                    r="10.9091"
                    fill={isVirtual ? "#FCFDFC" : "#1F7964"}
                    stroke={isVirtual ? "#1F7964" : "#FCFDFC"}
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="12.0004"
                    cy="12.0009"
                    rx="4.36364"
                    ry="10.9091"
                    stroke={isVirtual ? "#1F7964" : "#FCFDFC"}
                    strokeWidth="1.5"
                  />
                  <path
                    d="M1.0918 12H22.91"
                    stroke={isVirtual ? "#1F7964" : "#FCFDFC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7762_21563">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-base font-normal">
                {event?.mode === "Physical" ? event?.location : event?.mode}
              </span>
            </div>

            <div className="flex items-center gap-2 lg:place-self-end">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.61199 9.78596C1.77603 10.7196 1.75805 12.1282 2.52527 13.1191C4.04772 15.0854 5.71408 16.7518 7.6804 18.2742C8.6713 19.0414 10.0799 19.0234 11.0135 18.1875C13.5484 15.9178 15.8697 13.5459 18.11 10.9393C18.3315 10.6816 18.4701 10.3658 18.5012 10.0274C18.6387 8.531 18.9211 4.21991 17.7503 3.04913C16.5796 1.87836 12.2685 2.16082 10.7721 2.29832C10.4337 2.32941 10.1179 2.46796 9.86017 2.68944C7.25357 4.92973 4.88163 7.25111 2.61199 9.78596Z"
                  fill={isVirtual ? "#FCFDFC" : "#1F7964"}
                />
                <path
                  d="M6.13281 12.166L8.63281 14.666"
                  stroke={isVirtual ? "#FCFDFC" : "#"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="1.25"
                  cy="1.25"
                  r="1.25"
                  transform="matrix(1 0 0 -1 13.6328 7.16602)"
                  fill={isVirtual ? "#1F7964" : "white"}
                />
              </svg>

              <span className="text-base font-normal">
                {event?.category.name}
              </span>
            </div>
          </div>

          <a
            href={event?.link}
            target="_blank"
            rel="noreferrer"
            // onClick={openModal}
            className={`py-2 px-20 rounded-lg ${
              isVirtual
                ? "text-green-header bg-white"
                : "text-white bg-gradient-to-b to-primary from-green-dark"
            }`}
          >
            Reserve Tickets
          </a>
        </div>

        <EventRSVP
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          event={event}
        />
      </div>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    chapter: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      socials: PropTypes.shape({
        Twitter: PropTypes.string,
      }),
      members: PropTypes.number.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
};

Hero.defaultProps = {
  event: {},
};
