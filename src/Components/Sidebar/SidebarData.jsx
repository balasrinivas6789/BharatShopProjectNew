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
   { name: "Make Booking", route: "FlightTicketDateWiseNew" },
   { name: "Transaction Log", route: "FlightLogs" },
   { name: "Reports", route: "" },
   { name: "Markup Commission", route: "" },
   { name: "Cancellation Charges", route: "" },
  ],
 },
 {
  id: 4,
  title: "Hotels",
  icon: four,
  items: [
   { name: "Make Booking", route: "hotels" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup Commission", route: "" },
   { name: "Cancellation Charges", route: "" },
  ],
 },
 {
  id: 5,
  title: "Buses",
  icon: five,
  items: [
   { name: "Make Booking", route: "busesbooking" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup Commission", route: "" },
   { name: "Cancellation Charges", route: "" },
  ],
 },

 {
  id: 27,
  title: "Cab",
  icon: Group,
  items: [
   { name: "Make Booking", route: "cabbooking" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup Commission", route: "" },
   { name: "Cancellation Charges", route: "" },
  ],
 },

 {
  id: 6,
  title: "Tour packages",
  icon: six,
  items: [
   { name: "Make Booking", route: "tourpackages" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup Commission", route: "" },
   { name: "Cancellation Charges", route: "" },
  ],
 },

 {
  id: 1,
  title: "Recharges",
  icon: Group,
  items: [
   { name: "Mobile Recharge", route: "" },
   { name: "View Commission", route: "" },
   { name: "Set Commission", route: "" },
   { name: "Reports", route: "" },
   { name: "Recharge Incentives", route: "" },
   { name: "Recharge Incentives Log", route: "" },
  ],
 },

 {
  id: 2,
  title: "Bill payments",
  icon: mask,
  items: [
   { name: "Bill Payments", route: "" },
   { name: "View Commission", route: "" },
   { name: "Set Commission", route: "" },
   { name: "Reports", route: "" },
   { name: "Recharge Incentives", route: "" },
   { name: "Recharge Incentives Log", route: "" },
  ],
 },

 {
  id: 8,
  title: "APES",
  icon: eight,
  items: [
   { name: "Make Transaction", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Set Commission", route: "" },
   { name: "NEFT Request", route: "" },
   { name: "Reports", route: "" },
  ],
 },

 {
  id: 9,
  title: "Aadhaar pay",
  icon: nine,
  items: [
   { name: "Make Transaction", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Set Commission", route: "" },
   { name: "NEFT Request", route: "" },
   { name: "Reports", route: "" },
  ],
 },

 {
  id: 10,
  title: "DMT",
  icon: ten,
  items: [
   { name: "Make Transaction", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Set Commission", route: "" },
   { name: "NEFT Request", route: "" },
   { name: "Reports", route: "" },
  ],
 },

 {
  id: 11,
  title: "Micro ATM",
  icon: eleven,
  items: [
   { name: "Make Transaction", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Set Commission", route: "" },
   { name: "NEFT Request", route: "" },
   { name: "Reports", route: "" },
  ],
 },

 {
  id: 12,
  title: "Courier (Domestic)",
  icon: twelve,
  items: [
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
   { name: "RTO", route: "" },
  ],
 },

 {
  id: 13,
  title: "International Courier",
  icon: thirteen,
  items: [
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
   { name: "RTO", route: "" },
  ],
 },

 {
  id: 14,
  title: "Motor Insurance",
  icon: fourteen,
  items: [
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
  ],
 },

 {
  id: 15,
  title: "Medical Insurance",
  icon: fifteen,
  items: [
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
  ],
 },

 {
  id: 16,
  title: "Term Life Insurance",
  icon: sixteen,
  items: [
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
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
   { name: "Make Bookings", route: "" },
   { name: "Transaction Log", route: "" },
   { name: "Reports", route: "" },
   { name: "Service Charges", route: "" },
  ],
 },

 {
  id: 19,
  title: "GST Apply",
  icon: nineteen,
  items: [
   { name: "Make Enquiry", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Service Charges", route: "" },
  ],
 },

 {
  id: 20,
  title: "GST Filling",
  icon: twenty,
  items: [
   { name: "Make Enquiry", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Service Charges", route: "" },
  ],
 },

 {
  id: 21,
  title: "Company Registration",
  icon: twentyone,
  items: [
   { name: "Make Enquiry", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Service Charges", route: "" },
  ],
 },

 {
  id: 22,
  title: "Govt Services",
  icon: eight,
  items: [
   { name: "Make Enquiry", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Service Charges", route: "" },
  ],
 },

 {
  id: 24,
  title: "Lab Test",
  icon: fourteen,
  items: [
   { name: "Make Booking", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
  ],
 },

 {
  id: 25,
  title: "Medicines",
  icon: fourteen,
  items: [
   { name: "Make Booking", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
  ],
 },

 {
  id: 26,
  title: "Affiliated Marketing",
  icon: last,
  items: [
   { name: "Make Booking", route: "" },
   { name: "Categories", route: "" },
   { name: "Add Product", route: "" },
   { name: "Transaction Logs", route: "" },
   { name: "Reports", route: "" },
   { name: "Markup/Commission", route: "" },
  ],
 },
];
export default accordions;
