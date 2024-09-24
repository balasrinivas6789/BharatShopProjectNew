import Group from "../../images/SideBarIcons/Group.svg";
import mask from "../../images/SideBarIcons/Mask group.svg";
import third from "../../images/SideBarIcons/Component 1.svg";
import four from "../../images/SideBarIcons/four.svg";
import five from "../../images/SideBarIcons/Vector.svg";
import six from "../../images/SideBarIcons/six.svg";
import seven from "../../images/SideBarIcons/Apes.svg";
import eight from "../../images/SideBarIcons/Apes.svg";
import nine from "../../images/SideBarIcons/Apes.svg";
import ten from "../../images/SideBarIcons/Apes.svg";
import eleven from "../../images/SideBarIcons/eleve3n.svg";
import twelve from "../../images/SideBarIcons/eleve3n.svg";
import thirteen from "../../images/SideBarIcons/kooo.svg";
import fourteen from "../../images/SideBarIcons/fourteen.svg";
import fifteen from "../../images/SideBarIcons/fifteen.svg";
import sixteen from "../../images/SideBarIcons/sixteen.svg";
import seventeen from "../../images/SideBarIcons/seventeen.svg";
import eighteen from "../../images/SideBarIcons/seventeen.svg";
import nineteen from "../../images/SideBarIcons/seventeen.svg";
import twenty from "../../images/SideBarIcons/seventeen.svg";
import twentyone from "../../images/SideBarIcons/twenty two.svg";
import last from "../../images/SideBarIcons/last.svg";

const accordions = [
  {
    id: 3,
    title: "Flights",
    icon: third,
    items: [
      { name: "Make Booking", route: "/flightsbooking" },
      { name: "Transaction Log", route: "/flightslog" },
      { name: "Reports", route: "/flightsreports" },
      { name: "Markup Commission", route: "/flightsmarkup" },
      { name: "Cancellation Charges", route: "/flightscancellation" },
    ],
  },
  {
    id: 4,
    title: "Hotels",
    icon: four,
    items: [
      { name: "Make Booking", route: "/hotelsbooking" },
      { name: "Transaction Log", route: "/hotelslog" },
      { name: "Reports", route: "/hotelsreports" },
      { name: "Markup Commission", route: "/hotelsmarkup" },
      { name: "Cancellation Charges", route: "/hotelscancellation" },
    ],
  },
  {
    id: 5,
    title: "Buses",
    icon: five,
    items: [
      { name: "Make Booking", route: "/busesbooking" },
      { name: "Transaction Log", route: "/buseslog" },
      { name: "Reports", route: "/busesreports" },
      { name: "Markup Commission", route: "/busesmarkup" },
      { name: "Cancellation Charges", route: "/busescancellation" },
    ],
  },

  {
    id: 27,
    title: "Cab",
    icon: Group,
    items: [
      { name: "Make Booking", route: "/cabbooking" },
      { name: "Transaction Log", route: "/cablog" },
      { name: "Reports", route: "/cabreports" },
      { name: "Markup Commission", route: "/cabmarkup" },
      { name: "Cancellation Charges", route: "/cabcancellation" },
    ],
  },

  {
    id: 6,
    title: "Tour packages",
    icon: six,
    items: [
      { name: "Make Booking", route: "/tourpackagesbooking" },
      { name: "Transaction Log", route: "/tourpackageslog" },
      { name: "Reports", route: "/tourpackagesreports" },
      { name: "Markup Commission", route: "/tourpackagesmarkup" },
      { name: "Cancellation Charges", route: "/tourpackagescancellation" },
    ],
  },

  {
    id: 1,
    title: "Recharges",
    icon: Group,
    items: [
      { name: "Mobile Recharge", route: "/mobilerecharge" },
      { name: "View Commission", route: "/viewcommission" },
      { name: "Set Commission", route: "/setcommission" },
      { name: "Reports", route: "/rechargesreports" },
      { name: "Recharge Incentives", route: "/rechargeincentives" },
      { name: "Recharge Incentives Log", route: "/rechargeincentiveslog" },
    ],
  },

  {
    id: 2,
    title: "Bill payments",
    icon: mask,
    items: [
      { name: "Bill Payments", route: "/billpayments" },
      { name: "View Commission", route: "/viewcommission" },
      { name: "Set Commission", route: "/setcommission" },
      { name: "Reports", route: "/billpaymentsreports" },
      { name: "Recharge Incentives", route: "/rechargeincentives" },
      { name: "Recharge Incentives Log", route: "/rechargeincentiveslog" },
    ],
  },

  {
    id: 8,
    title: "APES",
    icon: eight,
    items: [
      { name: "Make Transaction", route: "/apestransaction" },
      { name: "Transaction Log", route: "/apeslog" },
      { name: "Set Commission", route: "/apessetcommission" },
      { name: "NEFT Request", route: "/apesneftrequest" },
      { name: "Reports", route: "/apesreports" },
    ],
  },

  {
    id: 9,
    title: "Aadhaar pay",
    icon: nine,
    items: [
      { name: "Make Transaction", route: "/aadhaarpaytransaction" },
      { name: "Transaction Log", route: "/aadhaarpaylog" },
      { name: "Set Commission", route: "/aadhaarpaysetcommission" },
      { name: "NEFT Request", route: "/aadhaarpayneftrequest" },
      { name: "Reports", route: "/aadhaarpayreports" },
    ],
  },

  {
    id: 10,
    title: "DMT",
    icon: ten,
    items: [
      { name: "Make Transaction", route: "/dmttransaction" },
      { name: "Transaction Log", route: "/dmtlog" },
      { name: "Set Commission", route: "/dmtsetcommission" },
      { name: "NEFT Request", route: "/dmtneftrequest" },
      { name: "Reports", route: "/dmtreports" },
    ],
  },

  {
    id: 11,
    title: "Micro ATM",
    icon: eleven,
    items: [
      { name: "Make Transaction", route: "/microatmtransaction" },
      { name: "Transaction Log", route: "/microatmlog" },
      { name: "Set Commission", route: "/microatmsetcommission" },
      { name: "NEFT Request", route: "/microatmneftrequest" },
      { name: "Reports", route: "/microatmreports" },
    ],
  },

  {
    id: 12,
    title: "Courier (Domestic)",
    icon: twelve,
    items: [
      { name: "Make Bookings", route: "/courierbookings" },
      { name: "Transaction Log", route: "/courierlog" },
      { name: "Reports", route: "/courierreports" },
      { name: "Markup/Commission", route: "/couriermarkup" },
      { name: "RTO", route: "/courierRTO" },
    ],
  },

  {
    id: 13,
    title: "International Courier",
    icon: thirteen,
    items: [
      { name: "Make Bookings", route: "/internationalcourierbookings" },
      { name: "Transaction Log", route: "/internationalcourierlog" },
      { name: "Reports", route: "/internationalcourierreports" },
      { name: "Markup/Commission", route: "/internationalcouriermarkup" },
      { name: "RTO", route: "/internationalcourierRTO" },
    ],
  },

  {
    id: 14,
    title: "Motor Insurance",
    icon: fourteen,
    items: [
      { name: "Make Bookings", route: "/motorinsurancebookings" },
      { name: "Transaction Log", route: "/motorinsurancelog" },
      { name: "Reports", route: "/motorinsurancereports" },
      { name: "Markup/Commission", route: "/motorinsurancemarkup" },
    ],
  },

  {
    id: 15,
    title: "Medical Insurance",
    icon: fifteen,
    items: [
      { name: "Make Bookings", route: "/medicalinsurancebookings" },
      { name: "Transaction Log", route: "/medicalinsurancelog" },
      { name: "Reports", route: "/medicalinsurancereports" },
      { name: "Markup/Commission", route: "/medicalinsurancemarkup" },
    ],
  },

  {
    id: 16,
    title: "Term Life Insurance",
    icon: sixteen,
    items: [
      { name: "Make Bookings", route: "/termlifeinsurancebookings" },
      { name: "Transaction Log", route: "/termlifeinsurancelog" },
      { name: "Reports", route: "/termlifeinsurancereports" },
      { name: "Markup/Commission", route: "/termlifeinsurancemarkup" },
    ],
  },

  {
  id: 17,
  title: "E-commerce",
  icon : seventeen,
  items: [
    { name: "Make Bookings", route: "EcommerceMainPage" },
    { name: "Category", route: "category" },
    { name: "Sub Category" },  
    { name: "Add Product" },
    { name: "Description" },
    { name: "Inventory" },
    { name: "MRP" },
    { name: "BSP" },
    { name: "Transaction Log" },
    { name: "Reports" },
    { name: "Markup/Commission" },
  ],
},
  {
    id: 18,
    title: "Pan Card",
    icon: eighteen,
    items: [
      { name: "Make Bookings", route: "/pancardbookings" },
      { name: "Transaction Log", route: "/pancardlog" },
      { name: "Reports", route: "/pancardreports" },
      { name: "Service Charges", route: "/pancardservicecharges" },
    ],
  },

  {
    id: 19,
    title: "GST Apply",
    icon: nineteen,
    items: [
      { name: "Make Enquiry", route: "/gstapplyenquiry" },
      { name: "Transaction Logs", route: "/gstapplylogs" },
      { name: "Reports", route: "/gstapplyreports" },
      { name: "Service Charges", route: "/gstapplyservicecharges" },
    ],
  },

  {
    id: 20,
    title: "GST Filling",
    icon: twenty,
    items: [
      { name: "Make Enquiry", route: "/gstfillingenquiry" },
      { name: "Transaction Logs", route: "/gstfillinglogs" },
      { name: "Reports", route: "/gstfillingreports" },
      { name: "Service Charges", route: "/gstfillingservicecharges" },
    ],
  },

  {
    id: 21,
    title: "Company Registration",
    icon: twentyone,
    items: [
      { name: "Make Enquiry", route: "/companyregistrationenquiry" },
      { name: "Transaction Logs", route: "/companyregistrationlogs" },
      { name: "Reports", route: "/companyregistrationreports" },
      { name: "Service Charges", route: "/companyregistrationservicecharges" },
    ],
  },

  {
    id: 22,
    title: "Govt Services",
    icon: eight,
    items: [
      { name: "Make Enquiry", route: "/govtservicesenquiry" },
      { name: "Transaction Logs", route: "/govtserviceslogs" },
      { name: "Reports", route: "/govtservicesreports" },
      { name: "Service Charges", route: "/govtservicescharges" },
    ],
  },

  {
    id: 24,
    title: "Lab Test",
    icon: fourteen,
    items: [
      { name: "Make Booking", route: "/labtestbooking" },
      { name: "Transaction Logs", route: "/labtestlogs" },
      { name: "Reports", route: "/labtestreports" },
      { name: "Markup/Commission", route: "/labtestmarkup" },
    ],
  },

  {
    id: 25,
    title: "Medicines",
    icon: fourteen,
    items: [
      { name: "Make Booking", route: "/medicinesbooking" },
      { name: "Transaction Logs", route: "/medicineslogs" },
      { name: "Reports", route: "/medicinesreports" },
      { name: "Markup/Commission", route: "/medicinesmarkup" },
    ],
  },

  {
    id: 26,
    title: "Affiliated Marketing",
    icon: last,
    items: [
      { name: "Make Booking", route: "/affiliatedmarketingbooking" },
      { name: "Categories", route: "/affiliatedmarketingcategories" },
      { name: "Add Product", route: "/affiliatedmarketingaddproduct" },
      { name: "Transaction Logs", route: "/affiliatedmarketinglogs" },
      { name: "Reports", route: "/affiliatedmarketingreports" },
      { name: "Markup/Commission", route: "/affiliatedmarketingmarkup" },
    ],
  },
];
export default accordions;

