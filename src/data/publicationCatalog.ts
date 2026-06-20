export type PublicationRecord = {
  serial: number;
  authors: string;
  title: string;
  publishedDate: string;
};

export type AwardRecord = {
  serial: number;
  award: string;
  date: string;
};

export const journalPapers: PublicationRecord[] = [
  {
    serial: 1,
    authors: "HIRONAO Takahashi, Uzair Lakhani, Asif Raza",
    title:
      "Knowledge Upload Service Using Semantic Based Categorization. Mehran University Research Journal of Engineering & Technology, Vol. 38, No. 4, 999-1008",
    publishedDate: "October 2019",
  },
  {
    serial: 2,
    authors: "Hironao Takahashi, Khalid Mahmood Malik, Mori Kinji",
    title:
      "The impact of Japanese economy by emotion sensing communication. Journal of Business Strategy 17th, ISSN 1993-5765",
    publishedDate: "1-July-2015",
  },
  {
    serial: 3,
    authors: "Hironao Takahashi, Khalid Mahmood Malik, Mori Kinji",
    title:
      "Autonomous Decentralized Multi-Layer Cache System (ADMLCS) for low-latency user push web services for high availability and timeliness. Intech Journal of Emerging Technology, ISBN 979-953-307-622-4",
    publishedDate: "March 2012",
  },
  {
    serial: 4,
    authors: "Hironao Takahashi, Khalid Mahmood Malik, Mori Kinji",
    title:
      "Autonomous L3 Cache Technology for High Responsiveness. IPSJ Transaction Journal of Information Processing, Vol. 20, No. 2",
    publishedDate: "Feb 2012",
  },
  {
    serial: 5,
    authors: "Hironao Takahashi, Mori Kinji",
    title:
      "Web application firewall to analyze autonomous distributed response to cyber attack of a local HTTP level. IEICE Special Published 10, pp.1595-1603, Vol J94-D No.10 (WAF)",
    publishedDate: "October 2011",
  },
  {
    serial: 6,
    authors: "高橋宏尚, 森欣司",
    title: "IPSJ 50th Anniversary: 自律分散システムの高応答I/Oノードの挑戦",
    publishedDate: "May 2010",
  },
  {
    serial: 7,
    authors: "高橋宏尚, Khalid Mahmood Malik, 森欣司",
    title:
      "IPSJ Special Issue: Push型Webサービスにおける高応答通信のための自律分散イベントチャリ",
    publishedDate: "10-Aug-2010",
  },
  {
    serial: 8,
    authors: "K. Mahmood, R. Sakamoto, X. Lu, K. Mori",
    title:
      "Autonomous Pull-Push Community Multi-Service-area Construction Technology to Achieve Service Assurance. Journal of Convergence Information Technology",
    publishedDate: "2010",
  },
  {
    serial: 9,
    authors: "K. Mahmood, X.D. Lu, Y. Horikoshi, K. Mori",
    title:
      "Autonomous Pull-Push Community Construction Technology for High-Assurance. IEICE Trans. on Info. & Syst., Vol.E92-D, No.10, pp.1836-1846",
    publishedDate: "2009",
  },
  {
    serial: 10,
    authors: "K. Mahmood, X. Lu, K. Mori",
    title:
      "Autonomous Community Construction Technology to Achieve Service Assurance in ADCS. IEICE Trans. on Info. & Syst., Vol.E91-D, No.9, pp.2259-2266",
    publishedDate: "09/01/2008",
  },
];

export const internationalReviewedPapers: PublicationRecord[] = [
  {
    serial: 1,
    authors: "Hironao Takahashi, Mubashir Khan, Uzair Lakhani",
    title:
      "Enhance the Mining Popularity with Low Power Consumption on PoA Autonomous Decentralized Voting Blockchain. ISADS 2025",
    publishedDate: "2025",
  },
  {
    serial: 2,
    authors: "Hironao Takahashi, Shinji Nakano, Uzair Lakhani",
    title:
      "SHA256d Hash Rate Enhancement by L3 Cache. IEEE 7th Conference on Consumer Electronics (GCCE), ISSN: 2378-8143",
    publishedDate: "13-December-2018",
  },
  {
    serial: 3,
    authors: "H Takahashi, M Waqar, M Kamran",
    title:
      "Late transaction settlement on PoA voting Blockchain for higher security crypto token transfer. IEEE 14th Global Conference on Consumer Electronics (GCCE), pp.425-426",
    publishedDate: "2025",
  },
  {
    serial: 4,
    authors: "H Takahashi, U Lakhani, A Soomro, MM Khan, Muhammad Kamran",
    title:
      "Representative Node on Voting Blockchain for High Secure Mobile Wallet Users. IEEE 13th Global Conference on Consumer Electronics (GCCE), pp.1099-1101",
    publishedDate: "2024",
  },
  {
    serial: 2,
    authors: "Dr. Hironao Takahashi",
    title:
      "Autonomous Decentralized Kernel Cache Architecture for Multi Ontology Based Information Extraction on Microsoft Windows. IEEE ISADS 2017",
    publishedDate: "22-25/03/2017",
  },
  {
    serial: 3,
    authors: "Dr. Hironao Takahashi",
    title:
      "Improving the Understanding between Control Tower Operator & Pilot Using Semantic Techniques. IEEE SASWIN 2017",
    publishedDate: "22-25/03/2017",
  },
  {
    serial: 4,
    authors: "Dr. Hironao Takahashi",
    title:
      "Pilot Eye Monitoring for Aircraft Safety Using Semantic Web Tools & Technologies. IEEE GCCE 2016",
    publishedDate: "11-15/10/2016",
  },
  {
    serial: 5,
    authors: "Dr. Hironao Takahashi",
    title:
      "Innovative High Quality Aircraft Maintenance by Wisdom of Semantic Database Using Historical Data of Operation Staffs. IEEE ISMS 2016",
    publishedDate: "25-27/01/2016",
  },
  {
    serial: 6,
    authors: "Dr. Hironao Takahashi",
    title:
      "Cloud Based Sports Analytics Using Semantic Web Tools and Technologies. IEEE GCCE 2015",
    publishedDate: "25-30/01/2015",
  },
  {
    serial: 7,
    authors: "Khalid Mahmood, Hironao Takahashi, Mazen Alobaidi",
    title:
      "A Semantic Approach for Traceability Link Recovery in Aerospace Requirements Management System. IEEE ISADS 2015 Taiwan",
    publishedDate: "26/02/2015",
  },
  {
    serial: 8,
    authors: "Khalid Mahmood, Hironao Takahashi, Asif Raza, Asma Qaiser, Aadil Farooqui",
    title:
      "Semantic Based Highly Accurate Autonomous Decentralized URL Classification System for Web Filtering. IEEE ISADS",
    publishedDate: "15/02/2015",
  },
  {
    serial: 9,
    authors: "Hironao Takahashi, Khalid Mahmood, Uzair Lakhani",
    title:
      "Autonomous Decentralized Semantic Based URL Filtering System for Low Latency. IEEE ISADS 2015 Taiwan",
    publishedDate: "10/02/2015",
  },
  {
    serial: 10,
    authors: "Dr. Hironao Takahashi",
    title: "High Assurance System Engineering (HASE) for URL Filtering. IEEE HASE 2016",
    publishedDate: "09/01/2014-11/01/2014",
  },
  {
    serial: 11,
    authors: "Hironao Takahashi, Khalid Mahmood Malik, Rikyo Takahashi, Kinji Mori",
    title:
      "Emotion Sense Ontology to avoid Human Error on Autonomous Decentralized Multi-Layered Cache System. ISADS 2013, Mexico City",
    publishedDate: "03/05/2013",
  },
  {
    serial: 12,
    authors: "Khalid Mahmood, Hironao Takahashi, Yasukai Arakawa",
    title:
      "Gateway Access Permission Technology for High Assurance. IEEE 32nd ICDCS Workshops, INSPEC Accession Number: 12911442",
    publishedDate: "06-August-2012",
  },
  {
    serial: 13,
    authors: "Rikyo Takahashi, Hironao Takahashi, Khalid Mahmood Malik",
    title: "Human Environment Information Conference at University of Tokyo",
    publishedDate: "08/30/2012",
  },
  {
    serial: 14,
    authors: "Rikyo Takahashi, Hironao Takahashi, Khalid Mahmood Malik",
    title: "Emotion Sensor Communication to Web Virtual Shop Service for Individual User",
    publishedDate: "08/01/2012",
  },
  {
    serial: 15,
    authors: "Khalid Mahmood Malik, Hironao Takahashi, Kinji Mori",
    title: "Gateway Access Permission Technology for High Assurance. IEEE ADSN 2012, China",
    publishedDate: "06/01/2012",
  },
  {
    serial: 16,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title: "IEEE ISADS 2011 conference paper: Application for ADMLC system to WAF",
    publishedDate: "Oct 2010",
  },
  {
    serial: 17,
    authors:
      "Abdul Razzaq, Ali Hur, Muddassar Masood, Khalid Latif, Hafiz Farooq Ahmad, Hironao Takahashi",
    title:
      "Foundation of Semantic Rule Engine to Protect Web Application Attacks. IEEE Proc. ISADS 2011, Tokyo",
    publishedDate: "2011",
  },
  {
    serial: 18,
    authors: "K. Mahmood, Hiro Takahashi, X.D. Lu, K. Mori",
    title:
      "Autonomous Decentralized Community Wireless Sensor Network System Architecture for High-Speed Connectivity under Dynamical Situation. IEEE ISADS 2009, pp.297-304, Athens",
    publishedDate: "2011",
  },
  {
    serial: 19,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "Autonomous Short Latency System for Web Application Layer Firewall. IEEE RTSOAA 2010, Florida, pp.14-16",
    publishedDate: "July 2010",
  },
  {
    serial: 20,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "Autonomous online expansion/reduction system technology for high I/O demand service. ICAET10, pp.21-24",
    publishedDate: "June 2010",
  },
  {
    serial: 21,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "Autonomous online expansion/reduction system technology for high I/O demand service. ICAET10, pp.21-24",
    publishedDate: "June 2010",
  },
  {
    serial: 22,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "The Advantage of Block Level L4 Cache for NAND Flash SSD in Web Application Environment. IEEE Web DB Forum 2009",
    publishedDate: "Nov 2009",
  },
  {
    serial: 23,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "Balanced Memory Architecture for High I/O Intensive Information Services for Autonomous Decentralized System. IEEE ISADS",
    publishedDate: "March 2009",
  },
  {
    serial: 24,
    authors: "K. Mahmood, S. Niki, X.D. Lu, K. Mori",
    title:
      "Autonomous Hybrid Pull-Push Context-aware Community Service Dissemination Technology to Achieve High Assurance. IEEE ISADS 2009, pp.499-506, Athens",
    publishedDate: "March 2009",
  },
  {
    serial: 25,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "Usage Pattern Based Pre-fetching For Mechanical Mass Storage. IEEE HONET 2008 / 32nd Annual Conference on Artificial Intelligence",
    publishedDate: "Sep 2009",
  },
  {
    serial: 26,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title: "IEEE HASE 2008 conference publication, Nanjing",
    publishedDate: "Dec 2008",
  },
  {
    serial: 27,
    authors: "K. Mahmood, S. Niki, X.D. Lu, K. Mori",
    title:
      "A Novel Ripple-based Context-cognizant Service Discovery Method in Autonomous Decentralized Community System. IEEE HASE Symposium, pp.405-413, Nanjing",
    publishedDate: "Dec 2008",
  },
  {
    serial: 28,
    authors: "K. Mahmood, Y. Horikoshi, S. Niki, X.D. Lu, K. Mori",
    title:
      "Progressive Ripple-Based Service Discovery for High Response Time in Autonomous Decentralized Community System. FTDCS 2008, pp.81-87, Kunming",
    publishedDate: "Oct 2008",
  },
  {
    serial: 29,
    authors: "K. Mahmood, S. Niki, X. Lu, K. Mori",
    title:
      "Context-cognizant community construction in Autonomous Decentralized Community System to Achieve Timeliness. CSA 2008, Hobart",
    publishedDate: "2008",
  },
  {
    serial: 30,
    authors: "K. Mahmood, Y. Kanamaru, X.D. Lu, K. Mori",
    title:
      "Autonomous Decentralized Community Construction Technology for High Quality Information Service. ICDCSW, pp.563-568, Beijing",
    publishedDate: "June 2008",
  },
  {
    serial: 31,
    authors: "K. Mahmood, S. Niki, Y. Nakahara, X.D. Lu, I. Luque, K. Mori",
    title:
      "Autonomous Real-Time Navigation for Service Level Agreement in Distributed Information Service System. IEEE ISADS 2007, pp.231-238, Sedona",
    publishedDate: "March 2007",
  },
  {
    serial: 32,
    authors: "Hironao Takahashi, Uzair Lakhani, Amjad Hussain",
    title:
      "Secure sharing for Cryptocurrency Wallet in Autonomous Decentralized Multi Layered Cache System. ISADS 2019 IEEE, Netherlands",
    publishedDate: "8th-10th APR 2019",
  },
  {
    serial: 33,
    authors: "Hironao Takahashi, Uzair Lakhani",
    title:
      "Multiple Layered Security Analyses Method for Cryptocurrency Exchange Services. GCCE 2019 Osaka, OS-CPS session",
    publishedDate: "15th-18th OCT 2019",
  },
  {
    serial: 34,
    authors: "Hironao Takahashi, Uzair Lakhani, Amjad Hussain",
    title:
      "Observation Agent Node for Secure Sharing Data Store in Autonomous Decentralized Network. GCCE 2019 Osaka, OS-CPS session",
    publishedDate: "15th-18th OCT 2019",
  },
  {
    serial: 35,
    authors: "Hironao Takahashi, Uzair Lakhani",
    title:
      "Kernel Based Cache Effect on Blockchain Node Synchronization. GCCE 2020 Kobe, OS-CPS session",
    publishedDate: "13th-16th OCT 2020",
  },
  {
    serial: 36,
    authors: "Hironao Takahashi, Uzair Lakhani",
    title: "Voting Blockchain for High Security NFT. GCCE 2021 Kyoto, OS-CPS session",
    publishedDate: "12th-15th OCT 2021",
  },
  {
    serial: 37,
    authors: "Hironao Takahashi, Uzair Lakhani",
    title:
      "Sustainable NFT Blockchain Storage for High Availability and Security. GCCE 2022 Osaka, OS-CPS session",
    publishedDate: "18th-21st OCT 2022",
  },
  {
    serial: 38,
    authors: "Hironao Takahashi, Uzair Lakhani",
    title:
      "Implementation of Smart Contract on Autonomous Decentralized Voting Blockchain. ISADS 2023 IEEE, Universidad Panamericana, Mexico City (Accepted Paper #9287)",
    publishedDate: "March 15th-17th 2023",
  },
];

export const invitedPapers: PublicationRecord[] = [
  {
    serial: 1,
    authors: "Hironao Takahashi",
    title: "NUST invitation speech: Timeliness ADS concept and its application",
    publishedDate: "02/10/2010",
  },
  {
    serial: 2,
    authors: "Hironao Takahashi",
    title: "NUST invitation speech: L4 cache node architecture",
    publishedDate: "03/02/2009",
  },
  {
    serial: 3,
    authors: "Hironao Takahashi",
    title: "NUST invitation speech: ADDTS concept and L3 cache node",
    publishedDate: "Nov 2008",
  },
  {
    serial: 4,
    authors: "Hironao Takahashi",
    title: "HePIX Taiwan invited paper",
    publishedDate: "Oct 2008",
  },
];

export const domesticPapers: PublicationRecord[] = [
  {
    serial: 1,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "High assurance L3 cache micro SD card to smartphone application. ADS research conference No.36, Tokyo Hosei University",
    publishedDate: "Sep 2011",
  },
  {
    serial: 2,
    authors: "Hironao Takahashi, Ali M. Hu, Hafiz Farooq Ahmad, Kinji Mori",
    title: "Semantic Rule Detection Approach to Web Application Firewall. IPSJ/IEICE Web DB Forum",
    publishedDate: "Nov 2010",
  },
  {
    serial: 3,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title: "Assurance conference presentation",
    publishedDate: "02/21/2009",
  },
  {
    serial: 4,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title: "Assurance conference presentation",
    publishedDate: "07/01/2008",
  },
  {
    serial: 5,
    authors: "高橋宏尚",
    title: "画像電子学会研究会 [招待講演] ワイヤレス通信における安全性を高める研究報告",
    publishedDate: "03/01/2008",
  },
  {
    serial: 6,
    authors: "K. Mahmood, S. Niki, S. Murakami, X. Lu, K. Mori",
    title:
      "Scalable Autonomous Load Balanced Topology Construction for Mobile Wireless Sensor Network. IEICE 23rd Assurance Symposium, Tokyo",
    publishedDate: "11/01/2007",
  },
  {
    serial: 7,
    authors: "K. Mahmood, S. Zhong, X. Lu, K. Mori",
    title:
      "Autonomous Decentralized Mobile Community System for Service Assurance to Local-majority Users. IEICE 29th Assurance Symposium, Tokyo",
    publishedDate: "01/01/2010",
  },
  {
    serial: 8,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "ADS research conference No.28 in Hiroshima: Advancing technology for high I/O intensive assurance system using hybrid case reasons",
    publishedDate: "-",
  },
  {
    serial: 9,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "ADS research conference No.29 in Tokyo Waseda University: Minimized Write I/O latency model on ADS architecture",
    publishedDate: "-",
  },
  {
    serial: 10,
    authors: "Hironao Takahashi, Hafiz Farooq Ahmad, Kinji Mori",
    title:
      "ADS research conference No.30 in Tokyo: Autonomous Decentralized Data Transmission System",
    publishedDate: "-",
  },
];

export const publicationAwards: AwardRecord[] = [
  {
    serial: 1,
    award: "Interop finalist award at 2012 GSR emotion sense service",
    date: "2012",
  },
  {
    serial: 2,
    award: "Interop finalist award at 2011 SWAF",
    date: "2011",
  },
  {
    serial: 3,
    award: "Japan Interop technology venture special award: L3 cache SSD",
    date: "2010 Feb",
  },
  {
    serial: 4,
    award: "Tsukuba venture advanced technology enterprise special award",
    date: "2010",
  },
  {
    serial: 5,
    award:
      "TiECon 2010: The World's Largest Conference for Entrepreneurs, Santa Clara Convention Center",
    date: "2010",
  },
  {
    serial: 6,
    award: "Software division finalist award (Top 5%)",
    date: "-",
  },
];
