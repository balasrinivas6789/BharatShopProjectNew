import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { format } from "date-fns";
import "./SearchBar.css";
import iccon from "../../images/iccon.jpg"

function SearchBar() {
  const airports = [
    {
      value: "Delhi",
      label: (
        <div>
          <h1>Delhi</h1>
          DEL, Delhi Airport, India
        </div>
      ),
    },
    {
      value: "Mumbai",
      label: (
        <div>
          <h1>Mumbai</h1>
          MUM, Mumbai International Airport, India
        </div>
      ),
    },
    {
      value: "Hyderabad",
      label: (
        <div>
          <h1>Hyderabad</h1>
          HYD, International Airport, India
        </div>
      ),
    },
  ];
  const [activeService, setActiveService] = useState("flight");
  const [activeTour, setActiveTour] = useState("devotional");

  const handleClick = (divId) => {
    setActiveService(divId);
  };

  const handleTour = (tourId) => {
    setActiveTour(tourId);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedReturndate, setselectedReturndate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <div className="date_holder" onClick={onClick}>
      <div className="date">
        <h1>{format(new Date(value), `dd''`)}</h1>
        {format(new Date(value), `MMM'' yy`)}
      </div>
      <div className="day">{format(new Date(value), "EEEE")}</div>
    </div>
  );
  const travellersData = ({ value, onClick }) => (
    <div className="date_holder" onClick={onClick}>
      <div className="date">
        <h1>{`Travellers: ${travellers.adult + travellers.child}\nInfants: ${
          travellers.infant
        }`}</h1>
      </div>
      <div className="day">{format(new Date(value), "EEEE")}</div>
    </div>
  );

  const [selectedAirport, setSelectedAirport] = useState(airports[0]);
  const [selectedAirport1, setSelectedAirport1] = useState(airports[1]);

  const handleSelectChange = (selectedOption) => {
    setSelectedAirport(selectedOption);
  };
  const handleSelectChange1 = (selectedOption) => {
    setSelectedAirport1(selectedOption);
  };
  const swapDestination = () => {
    setSelectedAirport(selectedAirport1);
    setSelectedAirport1(selectedAirport);
  };

  // travellers handling section

  const [travellers, setTravellers] = useState({
    adult: 20,
    child: 0,
    infant: 0,
  });

  const [travellerOptionsVisible, setTravellerOptionsVisible] =
    useState("close");

  const handleIncrement = (type) => {
    setTravellers((prevTravellers) => ({
      ...prevTravellers,
      [type]: prevTravellers[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setTravellers((prevTravellers) => ({
      ...prevTravellers,
      [type]: prevTravellers[type] > 0 ? prevTravellers[type] - 1 : 0,
    }));
  };

  const handleSave = (action) => {
    setTravellerOptionsVisible(action);
  };

  // Calculate the total number of travellers
  const totalTravellers =
    travellers.adult + travellers.child + travellers.infant;
  const travellerText =
    totalTravellers === 1 ? "traveller" : "travellers";

  // travellers handling section end

  // carousal slider

  const imagess = [
    { src: "image1.jpg", title: "Image 1" },
    { src: "image2.jpg", title: "Image 2" },
    { src: "image3.jpg", title: "Image 3" },
    { src: "image4.jpg", title: "Image 4" },
    { src: "image5.jpg", title: "Image 5" },
    { src: "image6.jpg", title: "Image 6" },
  ];
  const images = [
    {
      src: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid",
      title: "Image 1",
    },
    {
      src: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid",
      title: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid",
      title: "Image 3",
    },
    {
      src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Are_the_Different_Types_of_SEO.jpg",
      title: "Image 4",
    },
    {
      src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Are_the_Different_Types_of_SEO.jpg",
      title: "Image 4",
    },
    {
      src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Are_the_Different_Types_of_SEO.jpg",
      title: "Image 4",
    },
    {
      src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Are_the_Different_Types_of_SEO.jpg",
      title: "Image 4",
    },
    {
      src: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid",
      title: "Image 8",
    },
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft); // Get starting X position
    setScrollLeft(carouselRef.current.scrollLeft); // Get initial scroll position
    carouselRef.current.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  // Stop dragging
  const stopDrag = () => {
    setIsDragging(false);
    carouselRef.current.style.cursor = "grab"; // Set cursor back to normal
  };

  // Handle the dragging movement
  const onDrag = (e) => {
    if (!isDragging) return; // Only drag when mouse is held down
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft; // Current X position
    const walk = (x - startX) * 2; // The distance dragged
    carouselRef.current.scrollLeft = scrollLeft - walk; // Scroll the carousel
  };

  // carousal slider end

  const [time, setTime] = useState("10:00");

  return (
    <div>
      <div className="homescreen">
        <h1 className="text-4xl font-bold text-white">Travelling</h1>
        <div className="search_form mt-20 block p-6">
          <div className="search_icons block p-6">
            <a
              className={activeService === "flight" ? "active" : ""}
              onClick={() => handleClick("flight")}
            >
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.0257 20H35.0642L35.1218 20.2911V20.8732L35.1795 20.9314L35.2372 22.0956L35.3526 23.0852L35.8718 29.1393L36.0449 31.1767V31.7588L36.3334 31.817L37.2565 32.2827L37.7757 32.632L38.2949 33.0395L38.6988 33.3888V33.5052L43.2565 33.5634H49.8334L49.718 33.6798L47.2372 34.7277L45.8526 35.3098L40.2565 35.368L40.9488 36.5904L41.4103 37.6965L41.468 38.0457H67.5449L67.3718 38.1622L66.6795 38.4532H41.6411L41.7565 38.8025L65.6411 38.8607L65.468 38.9771L63.6795 39.7339L62.2949 40.316L59.8142 40.6071L52.6603 41.3638H52.1988L52.5449 42.2952L52.6603 42.9356V43.6341L52.4872 44.5073L52.1988 45.2058L51.7949 45.8462L51.1026 46.5447L50.5257 46.894L49.8911 47.185L49.0834 47.3597H48.1603L47.2372 47.1268L46.3142 46.6611L45.5065 45.9044L45.1026 45.264L44.8142 44.6237L44.6411 43.8669V42.7609L44.7565 42.1788L42.1603 42.4699H41.8142L41.6988 43.1102L41.2949 44.0416L40.7757 44.8565L40.3142 45.4387L39.5642 46.1954L38.7565 46.7775L37.9488 47.2432L36.8526 47.6507L35.9295 47.8836L34.8334 48L33.5642 47.9418L32.4103 47.7089L31.4295 47.3597L30.6218 46.9522L29.9872 46.5447L29.3526 46.0208L28.6026 45.264L28.0257 44.4491L27.5642 43.5759L27.2757 42.6445V42.4699L26.3526 42.4116L24.3334 42.1788L24.4488 42.7609V43.8669L24.218 44.7401L23.9872 45.264L23.5834 45.8462L23.0642 46.4283L22.4872 46.8358L21.8526 47.1268L20.9295 47.3597H20.0065L19.1988 47.185L18.2757 46.7193L17.8142 46.3701L17.2372 45.7879L16.7757 44.973L16.4872 44.0998L16.4295 43.6923V42.9938L16.5449 42.2952L16.8911 41.3638L15.8526 41.3056L15.1026 41.1892L14.2949 41.131L11.5834 40.8399L9.27569 40.6071L7.08338 40.3742L6.50646 40.1996L3.91031 39.0936L3.50646 38.9189V38.8607H9.73723L27.3334 38.8025L27.4488 38.4532H2.41031L1.54492 38.104V38.0457H27.6218L27.7372 37.5218L28.3142 36.2412L28.8334 35.368L23.2372 35.3098L22.0257 34.7859L21.0449 34.3784L19.4295 33.6798L19.3142 33.5634H23.4103L30.2757 33.5052L30.7372 33.0977L31.4295 32.5156L32.468 31.9335L32.8718 31.7588H33.0449V31.1767L33.8526 21.7464L33.9103 20.9314L33.968 20.815V20.2911L34.0257 20Z"
                  fill="#3E67B0"
                />
                <path
                  d="M33.8856 34H35.2043L36.1933 34.1837L36.8526 34.4286L37.5669 34.8571L38.0614 35.2857L38.6109 35.9592L39.0504 36.8163L39.3801 37.7959L39.5449 38.898V39.7551L39.3801 39.9388L39.2153 40H38.7207L36.4131 39.5714L35.479 39.449H33.5559L32.3471 39.6327L30.3691 40H29.8746L29.5999 39.8776L29.5449 39.7551V38.8367L29.7098 37.7347L30.0394 36.7551L30.3691 36.0816L30.8636 35.4082L31.2482 35.0408L31.8526 34.6122L32.457 34.3061L33.446 34.0612L33.8856 34Z"
                  fill="#FFB680"
                />
                <path
                  d="M3.54492 39H17.5449L17.4278 39.2L15.319 41L14.4989 40.95L11.7458 40.7L9.40266 40.5L7.17672 40.3L6.59095 40.15L3.95496 39.2L3.54492 39.05V39Z"
                  fill="#3E67B0"
                />
                <path
                  d="M48.1353 41H48.9064L49.4365 41.241L49.8702 41.6024L50.2076 42.0843L50.4485 42.6867L50.5449 43.2289V43.7711L50.4003 44.494L50.1112 45.0964L49.7738 45.5181L49.1955 45.8795L48.81 46H48.2317L47.7497 45.8193L47.3642 45.5783L47.1232 45.3373L46.7377 44.6747L46.5449 44.012V42.988L46.7377 42.3253L47.1232 41.6627L47.6052 41.241L48.1353 41Z"
                  fill="#FFB680"
                />
                <path
                  d="M19.5931 41H20.4967L21.0991 41.1807L21.6413 41.5422L21.9425 41.7831L22.3642 42.4458L22.5449 42.988V43.9518L22.3642 44.5542L22.0028 45.0964L21.7015 45.3976L21.3401 45.6988L20.6775 45.9398L20.4365 46H19.7136L18.9305 45.759L18.3883 45.3976L17.9666 44.9157L17.6654 44.3133L17.5449 43.7711V43.2892L17.7256 42.506L18.0871 41.9036L18.6895 41.3614L19.3522 41.0602L19.5931 41Z"
                  fill="#FFB680"
                />
                <path
                  d="M3.54492 39H9.65921L10.1164 39.4118L11.5449 40.8824V41L9.25921 40.7647L7.08778 40.5294L6.51635 40.3529L3.94492 39.2353L3.54492 39.0588V39Z"
                  fill="#3E67B0"
                />
                <path
                  d="M1.54492 38H18.5449L18.4269 38.5714L18.1908 39H2.43034L1.54492 38.1429V38Z"
                  fill="#3E67B0"
                />
                <path
                  d="M1.54492 38H9.18402L9.54492 38.7143V39H2.44718L1.54492 38.1429V38Z"
                  fill="#3E67B0"
                />
              </svg>
              <p>Flights</p>
            </a>
            <a
              className={activeService === "bus" ? "active" : ""}
              onClick={() => handleClick("bus")}
            >
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.0651 57.3161C45.2598 57.2232 48.2038 56.9284 50.3984 56V59.6789C50.3984 60.2945 50.1175 60.8849 49.6174 61.3202C49.1173 61.7555 48.439 62 47.7318 62H43.7318C43.0245 62 42.3463 61.7555 41.8462 61.3202C41.3461 60.8849 41.0651 60.2945 41.0651 59.6789V57.3161ZM18.3984 56C20.5931 56.9284 23.5371 57.2232 27.7318 57.3161V59.6789C27.7318 60.2945 27.4508 60.8849 26.9507 61.3202C26.4506 61.7555 25.7723 62 25.0651 62H21.0651C20.3579 62 19.6796 61.7555 19.1795 61.3202C18.6794 60.8849 18.3984 60.2945 18.3984 59.6789V56Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4749 13.0602C19.5488 10 24.4996 10 34.3984 10C44.2973 10 49.2481 10 52.3219 13.0602C55.1149 15.8358 55.3722 20.1468 55.3984 28.2778V38.7222C55.3722 46.8532 55.1149 51.1642 52.3219 53.9398C51.6902 54.5698 50.9552 55.0881 50.1484 55.4725C47.9881 56.5169 45.0901 56.8486 40.9609 56.953C39.0526 57 36.8817 57 34.3984 57C31.9152 57 29.7443 57 27.8359 56.953C23.7068 56.8486 20.8088 56.5169 18.6484 55.4725C17.8417 55.0881 17.1067 54.5698 16.4749 53.9398C13.6819 51.1642 13.4221 46.8532 13.3984 38.7222V28.2778C13.4247 20.1468 13.6819 15.8358 16.4749 13.0602Z"
                  fill="#3E67B0"
                />
                <path
                  d="M49.3484 47C49.3484 46.4696 49.143 45.9609 48.7773 45.5858C48.4116 45.2107 47.9156 45 47.3984 45H43.4984C42.9813 45 42.4853 45.2107 42.1196 45.5858C41.7539 45.9609 41.5484 46.4696 41.5484 47C41.5484 47.5304 41.7539 48.0391 42.1196 48.4142C42.4853 48.7893 42.9813 49 43.4984 49H47.3984C47.9156 49 48.4116 48.7893 48.7773 48.4142C49.143 48.0391 49.3484 47.5304 49.3484 47ZM19.4484 47C19.4484 46.4696 19.6539 45.9609 20.0196 45.5858C20.3853 45.2107 20.8813 45 21.3984 45H25.2984C25.8156 45 26.3116 45.2107 26.6773 45.5858C27.043 45.9609 27.2484 46.4696 27.2484 47C27.2484 47.5304 27.043 48.0391 26.6773 48.4142C26.3116 48.7893 25.8156 49 25.2984 49H21.3984C20.8813 49 20.3853 48.7893 20.0196 48.4142C19.6539 48.0391 19.4484 47.5304 19.4484 47ZM17.4984 29.6667C17.4984 33.4373 17.4984 35.3227 18.6424 36.4933C19.7838 37.6667 21.622 37.6667 25.2984 37.6667H43.4984C47.1748 37.6667 49.013 37.6667 50.1544 36.4933C51.2984 35.3227 51.2984 33.4373 51.2984 29.6667V23C51.2984 19.2293 51.2984 17.344 50.1544 16.1733C49.0156 15 47.1774 15 43.4984 15H25.2984C21.622 15 19.7838 15 18.6424 16.1733C17.4984 17.3413 17.4984 19.2267 17.4984 23V29.6667ZM9.43844 35.8L13.5984 39V28.3333H10.9984C10.3089 28.3333 9.64755 28.6143 9.15996 29.1144C8.67237 29.6145 8.39844 30.2928 8.39844 31V33.6667C8.39844 34.0807 8.49241 34.489 8.67293 34.8592C8.85344 35.2295 9.11553 35.5516 9.43844 35.8ZM57.7984 28.3333H55.1958L55.1984 39L59.3584 35.8C59.6813 35.5516 59.9434 35.2295 60.1239 34.8592C60.3045 34.489 60.3984 34.0807 60.3984 33.6667V31C60.3984 30.2928 60.1245 29.6145 59.6369 29.1144C59.1493 28.6143 58.488 28.3333 57.7984 28.3333Z"
                  fill="#FFB680"
                />
              </svg>
              <p>Busses</p>
            </a>
            <a
              className={activeService === "cab" ? "active" : ""}
              onClick={() => handleClick("cab")}
            >
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.875 4.25C27.3114 4.25 26.7709 4.47388 26.3724 4.8724C25.9739 5.27091 25.75 5.81141 25.75 6.375V8.5H22.8557C20.7895 8.49953 18.7939 9.25171 17.242 10.6159C15.6901 11.98 14.6882 13.8628 14.4237 15.912L13.7353 21.25H10.875C10.3114 21.25 9.77091 21.4739 9.3724 21.8724C8.97388 22.2709 8.75 22.8114 8.75 23.375C8.75 23.9386 8.97388 24.4791 9.3724 24.8776C9.77091 25.2761 10.3114 25.5 10.875 25.5H13.187L13.1445 25.8145C11.8665 26.2322 10.7533 27.0433 9.96399 28.1318C9.17472 29.2203 8.7498 30.5305 8.75 31.875V44.625C8.75 46.3158 9.42165 47.9373 10.6172 49.1328C11.8127 50.3284 13.4342 51 15.125 51H53.375C55.0658 51 56.6873 50.3284 57.8828 49.1328C59.0784 47.9373 59.75 46.3158 59.75 44.625V31.875C59.7502 30.5258 59.3225 29.2114 58.5282 28.1208C57.7339 27.0302 56.6142 26.2197 55.33 25.806L55.2918 25.5H57.625C58.1886 25.5 58.7291 25.2761 59.1276 24.8776C59.5261 24.4791 59.75 23.9386 59.75 23.375C59.75 22.8114 59.5261 22.2709 59.1276 21.8724C58.7291 21.4739 58.1886 21.25 57.625 21.25H54.7477L54.0677 15.9248C53.8062 13.8739 52.8062 11.9887 51.2549 10.6221C49.7036 9.2554 47.7074 8.50096 45.64 8.5H42.75V6.375C42.75 5.81141 42.5261 5.27091 42.1276 4.8724C41.7291 4.47388 41.1886 4.25 40.625 4.25H27.875ZM45.64 12.75C46.673 12.7509 47.6703 13.1281 48.4455 13.8109C49.2206 14.4938 49.7206 15.4356 49.8517 16.4602L51.0077 25.5H17.4753L18.6398 16.456C18.772 15.4314 19.2729 14.49 20.0489 13.8079C20.8248 13.1259 21.8226 12.7498 22.8557 12.75H45.64ZM19.3835 38.25C19.3835 37.832 19.4658 37.418 19.6258 37.0318C19.7858 36.6456 20.0203 36.2947 20.3159 35.9991C20.6114 35.7035 20.9624 35.469 21.3486 35.3091C21.7348 35.1491 22.1487 35.0668 22.5667 35.0668C22.9848 35.0668 23.3987 35.1491 23.7849 35.3091C24.1711 35.469 24.5221 35.7035 24.8176 35.9991C25.1132 36.2947 25.3477 36.6456 25.5077 37.0318C25.6677 37.418 25.75 37.832 25.75 38.25C25.75 39.0942 25.4146 39.9039 24.8176 40.5009C24.2207 41.0979 23.411 41.4332 22.5667 41.4332C21.7225 41.4332 20.9128 41.0979 20.3159 40.5009C19.7189 39.9039 19.3835 39.0942 19.3835 38.25ZM42.75 38.25C42.75 37.4058 43.0854 36.5961 43.6824 35.9991C44.2793 35.4021 45.089 35.0668 45.9332 35.0668C46.7775 35.0668 47.5872 35.4021 48.1841 35.9991C48.7811 36.5961 49.1165 37.4058 49.1165 38.25C49.1165 39.0942 48.7811 39.9039 48.1841 40.5009C47.5872 41.0979 46.7775 41.4332 45.9332 41.4332C45.089 41.4332 44.2793 41.0979 43.6824 40.5009C43.0854 39.9039 42.75 39.0942 42.75 38.25Z"
                  fill="#3E67B0"
                />
                <path
                  d="M53.3622 55.25H46.9872V56.3125C46.9872 57.1579 47.3231 57.9686 47.9208 58.5664C48.5186 59.1642 49.3294 59.5 50.1747 59.5C51.0201 59.5 51.8309 59.1642 52.4287 58.5664C53.0264 57.9686 53.3622 57.1579 53.3622 56.3125V55.25Z"
                  fill="#FFB680"
                />
                <path
                  d="M21.5 55.25H15.125V56.3125C15.125 57.1579 15.4608 57.9686 16.0586 58.5664C16.6564 59.1642 17.4671 59.5 18.3125 59.5C19.1579 59.5 19.9686 59.1642 20.5664 58.5664C21.1642 57.9686 21.5 57.1579 21.5 56.3125V55.25Z"
                  fill="#FFB680"
                />
              </svg>
              <p>Cabs</p>
            </a>
            <a
              className={activeService === "hotel" ? "active" : ""}
              onClick={() => handleClick("hotel")}
            >
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.9335 22.1538C53.4884 22.1538 54.0206 22.3807 54.413 22.7847C54.8054 23.1886 55.0258 23.7364 55.0258 24.3076C55.0258 24.8789 54.8054 25.4267 54.413 25.8306C54.0206 26.2346 53.4884 26.4615 52.9335 26.4615V47.9999C53.4884 47.9999 54.0206 48.2268 54.413 48.6307C54.8054 49.0346 55.0258 49.5825 55.0258 50.1537C55.0258 50.7249 54.8054 51.2728 54.413 51.6767C54.0206 52.0806 53.4884 52.3075 52.9335 52.3075H15.272C14.7171 52.3075 14.1849 52.0806 13.7925 51.6767C13.4001 51.2728 13.1797 50.7249 13.1797 50.1537C13.1797 49.5825 13.4001 49.0346 13.7925 48.6307C14.1849 48.2268 14.7171 47.9999 15.272 47.9999V26.4615C14.7171 26.4615 14.1849 26.2346 13.7925 25.8306C13.4001 25.4267 13.1797 24.8789 13.1797 24.3076C13.1797 23.7364 13.4001 23.1886 13.7925 22.7847C14.1849 22.3807 14.7171 22.1538 15.272 22.1538H52.9335ZM23.6412 30.7692C23.0863 30.7692 22.5541 30.9961 22.1617 31.4C21.7694 31.8039 21.5489 32.3518 21.5489 32.923V47.9999H25.7335V32.923C25.7335 32.3518 25.5131 31.8039 25.1207 31.4C24.7283 30.9961 24.1961 30.7692 23.6412 30.7692ZM34.1028 30.7692C33.5479 30.7692 33.0157 30.9961 32.6233 31.4C32.2309 31.8039 32.0105 32.3518 32.0105 32.923V47.9999H36.1951V32.923C36.1951 32.3518 35.9746 31.8039 35.5822 31.4C35.1899 30.9961 34.6577 30.7692 34.1028 30.7692ZM44.5643 30.7692C44.0094 30.7692 43.4772 30.9961 43.0848 31.4C42.6924 31.8039 42.472 32.3518 42.472 32.923V47.9999H46.6566V32.923C46.6566 32.3518 46.4362 31.8039 46.0438 31.4C45.6514 30.9961 45.1192 30.7692 44.5643 30.7692Z"
                  fill="#3E67B0"
                />
                <path
                  d="M48.1365 16.3232C47.7441 15.9193 47.2119 15.6924 46.657 15.6924H21.5493C20.9944 15.6924 20.4622 15.9193 20.0699 16.3232C19.6775 16.7272 19.457 17.275 19.457 17.8462C19.457 18.4175 19.6775 18.9653 20.0699 19.3692C20.4622 19.7731 20.9944 20.0001 21.5493 20.0001H46.657C47.2119 20.0001 47.7441 19.7731 48.1365 19.3692C48.5289 18.9653 48.7493 18.4175 48.7493 17.8462C48.7493 17.275 48.5289 16.7272 48.1365 16.3232Z"
                  fill="#FFB680"
                />
              </svg>
              <p>Hotels</p>
            </a>
            <a
              className={activeService === "tour" ? "active" : ""}
              onClick={() => handleClick("tour")}
            >
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_271_7647)">
                  <path
                    d="M39.3242 43.342H42.4607V46.4785H39.3242V43.342ZM50.1662 43.342H53.3027V46.4785H50.1662V43.342ZM47.5352 32.218V29.083H43.1882V30.61L44.8097 32.2195L47.5352 32.218Z"
                    fill="#E98824"
                  />
                  <path
                    d="M58.2844 49.1684V42.5549H59.2819L60.2089 41.6384L49.2259 30.6554H47.8624V32.5589H44.6674L42.7639 30.6554H37.4899L26.5189 41.6264L27.4459 42.5534H28.9144V49.1669H27.4811H26.0479C21.7609 45.0659 20.6209 35.7644 21.0214 28.8449L21.0919 28.7039H21.1264C23.0014 28.7039 24.6634 29.6129 25.6984 31.0139L25.7089 31.0289C26.4889 32.0834 26.9584 33.4109 26.9584 34.8464C26.9584 35.8364 26.7364 36.7739 26.3374 37.6124L26.3539 37.5734C27.191 37.3591 27.9692 36.9593 28.6309 36.4034L28.6219 36.4109C29.3111 35.8115 29.8635 35.0709 30.2416 34.2394C30.6197 33.4079 30.8147 32.5048 30.8134 31.5914C30.8134 30.1589 30.3424 28.8374 29.5474 27.7724L29.5594 27.7889C28.8772 26.8377 27.9125 26.1257 26.8025 25.7544C25.6924 25.383 24.4936 25.3711 23.3764 25.7204L23.4154 25.7099C23.8129 25.4624 24.2704 25.2434 24.7519 25.0769L24.7999 25.0619C25.4544 24.8205 26.1468 24.698 26.8444 24.7004C28.4689 24.7004 29.9404 25.3499 31.0159 26.4014L31.0144 26.3999C31.1747 25.5586 31.1268 24.6909 30.8749 23.8724L30.8854 23.9099C30.6366 23.1803 30.242 22.509 29.7255 21.9369C29.209 21.3647 28.5814 20.9037 27.881 20.5819C27.1806 20.2601 26.422 20.0843 25.6514 20.0651C24.8808 20.0459 24.1144 20.1838 23.3989 20.4704L23.4364 20.4569C23.0743 20.5813 22.7222 20.7332 22.3834 20.9114L22.4269 20.8904C22.3242 20.4214 22.1729 19.9644 21.9754 19.5269L21.9934 19.5704C20.6734 16.6109 17.6464 15.2129 15.2269 16.4354C14.5738 16.77 14.0125 17.2592 13.5919 17.8604L13.5829 17.8754C14.4345 17.9585 15.255 18.2395 15.9788 18.6961C16.7025 19.1526 17.3095 19.772 17.7514 20.5049L17.7649 20.5289C17.2039 20.2472 16.6097 20.0371 15.9964 19.9034L15.9454 19.8944C12.2254 19.0949 8.68536 21.1154 8.05086 24.4169C7.88132 25.3226 7.93748 26.2561 8.21436 27.1349L8.20386 27.0959C9.03538 26.1511 10.112 25.4547 11.3146 25.0835C12.5172 24.7124 13.799 24.681 15.0184 24.9929L14.9704 24.9824C15.5839 25.1114 16.1269 25.2974 16.6354 25.5419L16.5919 25.5224C15.3748 25.3594 14.1368 25.5637 13.0366 26.1088C11.9363 26.654 11.0239 27.5153 10.4164 28.5824L10.3999 28.6124C9.76555 29.6824 9.4323 30.904 9.43536 32.1479C9.43536 34.4999 10.6009 36.5789 12.3874 37.8389L12.4099 37.8539C13.1779 38.3714 14.0553 38.7041 14.9734 38.8259L15.0049 38.8289C14.3434 37.7322 13.9953 36.4751 13.9984 35.1944C13.9984 33.8849 14.3539 32.6579 14.9749 31.6064L14.9569 31.6394C15.4179 30.8361 16.0503 30.1443 16.8092 29.6133C17.5681 29.0823 18.4347 28.7252 19.3474 28.5674L19.3849 28.5614C17.2594 38.2409 16.6714 44.9849 18.4249 49.1654H13.3159V51.9854H61.5379V49.1654H58.2844V49.1684ZM46.3594 42.7079H57.1084V49.1684H46.3594V42.7079ZM30.0679 41.4269L37.4929 34.0019L44.9179 41.4269V49.1684H36.7654V43.3424H32.6419V49.1684H30.0589V41.4269H30.0679Z"
                    fill="#3E67B0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_271_7647">
                    <rect
                      width="54"
                      height="36"
                      fill="white"
                      transform="translate(7.95703 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Tours</p>
            </a>
          </div>

          {/* flight form  */}
          <form
            className={activeService === "flight" ? "form_show" : "form_hidden"}
            onClick={() => handleClick("flight")}
          >
            <div className="flight_data">
              <div className="radio_buttons">
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="One Way"
                    defaultChecked
                  />
                  One Way
                </label>
                <label>
                  <input type="radio" name="trip_type" value="Round Trip" />
                  Round Trip
                </label>
                <label>
                  <input type="radio" name="trip_type" value="Multiple City" />
                  Multiple City
                </label>
              </div>
              <div class="travelClassBtns mydict">
                <div className="travel_class">
                  <label>
                    <input
                      type="radio"
                      name="traevel_class"
                      value="Economy"
                      defaultChecked
                    />
                    <span>Economy</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="traevel_class"
                      value="Premier Economy"
                    />
                    <span>Premier Economy</span>
                  </label>
                  <label>
                    <input type="radio" name="traevel_class" value="Business" />
                    <span>Business</span>
                  </label>
                </div>
              </div>
              <div className="flight_search">
                <div className="from_to">
                  <div className="swap_div">
                    <a onClick={swapDestination}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.5 5.24984H16.0833L12 1.1665"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.666 9.9165H1.49935L5.74601 13.4165"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <label>
                    <p>From :</p>
                    <Select
                      value={selectedAirport}
                      onChange={handleSelectChange}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                  <label>
                    <p>To :</p>
                    <Select
                      value={selectedAirport1}
                      onChange={handleSelectChange1}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                </div>
                <div className="search_dates">
                  <label>
                    <p>Date of Departure</p>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                  <label>
                    <p>Date of Return</p>
                    <DatePicker
                      selected={selectedReturndate}
                      onChange={(date) => setselectedReturndate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                      // disabled
                    />
                  </label>
                  <label>
                    <p>Total Travellers:</p>
                    <div className="travellers_total"
                      onClick={() => handleSave("open")}
                    >
                      {/* Display the number in larger font */}
                      <p>
                        {totalTravellers}
                        <span>{travellerText}</span>
                      </p>
                      {/* Display the text in normal size */}
                      {/* <span
                        style={{
                          fontSize: "16px", // Normal font size for the text
                          fontWeight: "normal",
                        }}
                      >
                        {travellerText}
                      </span> */}
                    </div>
                  </label>
                  <div
                    className={
                      travellerOptionsVisible === "open"
                        ? "show travelers"
                        : "hidden travelers"
                    }
                  >
                    <div className="travelers_options">
                      <p>On the day of travel</p>
                      <div className="traveller_option">
                        <p>Adults (12+ Years): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("adult");
                            }}
                          >
                            -
                          </button>
                          <span>{travellers.adult}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("adult");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="traveller_option">
                        <p>Children (2-12 Years): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("child");
                            }}
                          >
                            -
                          </button>
                          <span>{travellers.child}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("child");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="traveller_option">
                        <p>Infants (below 2Y): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("infant");
                            }}
                          >
                            -
                          </button>
                          <span>{travellers.infant}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("infant");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="save_btn">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleSave("close");
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="radio_buttons">
                <h4>Types of fair :</h4>
                <label>
                  <input type="radio" name="person_type" value="Regular" />
                  Regular
                </label>
                <label>
                  <input type="radio" name="person_type" value="Student" />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="person_type"
                    value="Senior Citizen"
                  />
                  Senior Citizen
                </label>
                <label>
                  <input type="radio" name="person_type" value="Armed Forces" />
                  Armed Forces
                </label>
              </div>
            </div>
            <div className="submit_button">
              <button className="btnsearch" type="submit">
                Search
              </button>
            </div>
          </form>

          {/* bus form  */}
          <form
            className={activeService === "bus" ? "form_show" : "form_hidden"}
            onClick={() => handleClick("bus")}
          >
            <div className="flight_data">
              <div className="radio_buttons bus">
                <div className="switch_click">
                  <label>AC</label>
                  <label class="toggle-switch">
                    <input type="checkbox" />
                    <div class="toggle-switch-background">
                      <div class="toggle-switch-handle"></div>
                    </div>
                  </label>
                  <label>Non-AC</label>
                </div>
                <div class="travelClassBtns mydict">
                  <div className="travel_class">
                    <label>
                      <input
                        type="radio"
                        name="bus_type"
                        value="Seater"
                        defaultChecked
                      />
                      <span>Seater</span>
                    </label>
                    <label>
                      <input type="radio" name="bus_type" value="Sleeper" />
                      <span>Sleeper</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flight_search">
                <div className="from_to">
                  <div className="swap_div">
                    <a onClick={swapDestination}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.5 5.24984H16.0833L12 1.1665"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.666 9.9165H1.49935L5.74601 13.4165"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <label>
                    <p>From :</p>
                    <Select
                      value={selectedAirport}
                      onChange={handleSelectChange}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                  <label>
                    <p>To :</p>
                    <Select
                      value={selectedAirport1}
                      onChange={handleSelectChange1}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                </div>
                <div className="search_dates bus_form">
                  <label>
                    <p>Date :</p>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="submit_button">
              <button className="btnsearch" type="submit">
                Search
              </button>
            </div>
          </form>

          {/* cab form */}
          <form
            className={activeService === "cab" ? "form_show" : "form_hidden"}
            onClick={() => handleClick("cab")}
          >
            <div className="flight_data">
              <div className="radio_buttons">
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="Outstation One Way"
                    defaultChecked
                  />
                  Outstation One Way
                </label>
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="Outstation Round Trip"
                  />
                  Outstation Round Trip
                </label>
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="Airport Transfor"
                  />
                  Airport Transfor
                </label>
              </div>
              <div className="flight_search">
                <div className="from_to">
                  <div className="swap_div">
                    <a onClick={swapDestination}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.5 5.24984H16.0833L12 1.1665"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.666 9.9165H1.49935L5.74601 13.4165"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <label>
                    <p>From</p>
                    <Select
                      value={selectedAirport}
                      onChange={handleSelectChange}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                  <label>
                    <p>To</p>
                    <Select
                      value={selectedAirport1}
                      onChange={handleSelectChange1}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                </div>
                <div className="search_dates">
                  <label>
                    <p>Date of Departure</p>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                  <label>
                    <p>Date of Return</p>
                    <DatePicker
                      selected={selectedReturndate}
                      onChange={(date) => setselectedReturndate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="time_container">
              <h3>Select Pickup Time</h3>
              <TimePicker
                onChange={setTime}
                value={time}
                disableClock={true} // To disable the analog clock
                clearIcon={null} // To remove the clear icon
                className="big-time-picker"
              />
              {/* <p className="large-time">Selected Pick Up Time: {time}</p> */}
            </div>
            <div className="submit_button">
              <button className="btnsearch" type="submit">
                Search
              </button>
            </div>
          </form>

          {/* hotel form */}
          <form
            className={activeService === "hotel" ? "form_show" : "form_hidden"}
            onClick={() => handleClick("hotel")}
          >
            <div className="flight_data">
              <div className="flight_search">
                <div className="from_to hotel">
                  <label>
                    <p>City, Property name or Location</p>
                    <Select
                      value={selectedAirport}
                      onChange={handleSelectChange}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                </div>
                <div className="search_dates">
                  <label>
                    <p>Check In</p>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                  <label>
                    <p>check Out</p>
                    <DatePicker
                      selected={selectedReturndate}
                      onChange={(date) => setselectedReturndate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="submit_button">
              <button className="btnsearch" type="submit">
                Search
              </button>
            </div>
          </form>

          {/* tour section */}
          <div
            className={
              activeService === "tour"
                ? "form_show flight_data"
                : "form_hidden flight_data"
            }
            onClick={() => handleClick("tour")}
          >
            <div className="tour_section">
              <a
                className={activeTour === "devotional" ? "active" : ""}
                onClick={() => handleTour("devotional")}
              >
                <div className="tour_name">
                  <div className="tourname_icon">
                    <img src={iccon} />
                  </div>
                  <h3>Devotional</h3>
                </div>
              </a>
              <a
                className={activeTour === "trending" ? "active" : ""}
                onClick={() => handleTour("trending")}
              >
                <div className="tour_name">
                  <div className="tourname_icon">
                    <img src={iccon} />
                  </div>
                  <h3>Trending</h3>
                </div>
              </a>
              <a
                className={activeTour === "honeymoon" ? "active" : ""}
                onClick={() => handleTour("honeymoon")}
              >
                <div className="tour_name">
                  <div className="tourname_icon">
                    <img src={iccon} />
                  </div>
                  <h3>Honeymoon</h3>
                </div>
              </a>
              <a
                className={activeTour === "luxe" ? "active" : ""}
                onClick={() => handleTour("luxe")}
              >
                <div className="tour_name">
                  <div className="tourname_icon">
                    <img src={iccon} />
                  </div>
                  <h3>Luxe Holidays</h3>
                </div>
              </a>
              <a
                className={activeTour === "party" ? "active" : ""}
                onClick={() => handleTour("party")}
              >
                <div className="tour_name">
                  <div className="tourname_icon">
                    <img src={iccon} />
                  </div>
                  <h3>Party Packages</h3>
                </div>
              </a>
            </div>
            <div
              className="carousel-wrapper"
              ref={carouselRef}
              onMouseDown={startDrag}
              onMouseMove={onDrag}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
            >
              <div className="carousel-images">
                {images.map((image, index) => (
                  <div key={index} className="carousel-item">
                    <img src={image.src} alt={image.title} />
                    <div className="image-title">{image.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;