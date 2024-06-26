import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import LayerSecurityImage from '../assets/LayerSecurity.png';
import FreeInstallationImage from '../assets/freeInstallation.png'
import wifiImage from '../assets/wifiSignal.png';
import advnaceProtection from '../assets/advancedProtection.png';
import connectivity from '../assets/connectivity.png';
import MobileGateway from '../assets/mobileGateway.png'




export const navItems = [
  { link: "Home", path: "home" },
  { link: "Benefits", path: "benefit" },
  { link: "Features", path: "feature" },
  { link: "Pricing", path: "pricing" },
];

export const userNavItems = [
  {link:"Profile", path:"/"},
]
export const whyus = [
  {
    title: "Layers of Security",
    image: LayerSecurityImage,
    text: " Alpaca VPN goes beyond basic encryption. We offer advanced leak protection features to prevent any unintentional exposure of your data.",
  },
  {
    title: "Encrypted Wifi",
    image: wifiImage,
    text: "Don't let public Wi-Fi networks compromise your security. Alpaca VPN encrypts your internet traffic with  algorithms, creating a secure tunnel.",
  },
  {
    title: "Fast Installation",
    image: FreeInstallationImage,
    text: "Our installation process is designed to be quick and painless. No need for technical expertise or lengthy configuration.",
  },
 
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const featuredBoxes = [
  
  {
    image: MobileGateway,
    title: "Your Secure Open Mobile Gateway",
    description: "Alpaca VPN goes beyond just a secure connection. It`s a comprehensive mobile app packed with features designed to empower you."
  },{
image: advnaceProtection,
title:"Advanced Leak Protection",
description: "Never worry about data leaks. Alpaca VPN goes beyond basic encryption with advanced leak protection features like DNS and IP leak protection. This ensures your true location and online activity."
  },
   {
    image:connectivity,
    title:"Effortless Connectivity",
    description : "Alpaca VPN's user-friendly mobile app makes connecting to a secure server effortless. With a single tap, you can instantly secure your mobile connection and browse freely."
  }
]

export const paymentPlan = [
  {
    price: "$0",
    time: "lifetime",
    pay: "Free",
    precaution: "Try Before You Buy Premium",
    listOne: "Experience instant VPN",
    listTwo: "Connect to a few servers",
    listThree: "Basic security level"
    
  },
  {
    price: "$54",
    time: "month",
    pay: "MONTHLY",
    precaution: "Flexible Security on the Go",
    listOne: "Wider range of server",
    listTwo: "Connect to all servers",
    listThree: "High level security"
  },
  {
    price: "$89",
    time: "/yearly",
    pay: "YEARLY",
    precaution: "Ultimate Protection and Savings",
    listOne: "Discount on yearly",
    listTwo: "Connect to all servers",
    listThree: "High security level"
  },

];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
