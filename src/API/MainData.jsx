const totalschemes = {
    schemes: [
        {
            "name": "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
            "description": "Launched in 2014, this scheme aims at financial inclusion by providing access to banking services to every Indian, especially the poor and underserved. It offers basic savings accounts, access to credit, insurance, and pension facilities.",
            "eligibility": "All Indian citizens above the age of 10 can open a Jan Dhan account.",
            "benefits": "Zero balance savings account, RuPay debit card, accident insurance cover of ₹1 lakh, overdraft facility up to ₹10,000.",
            "application_process": "Accounts can be opened at any bank branch or business correspondent point. Aadhar card, voter ID, or other valid documents are required.",
            "application_link": "https://pmjdy.gov.in"
        },
        {
            "name": "Shaadi Mubarak Scheme",
            "description": "Launched by the Telangana Government, this scheme provides financial assistance of ₹1,00,116 to economically backward Muslim girls at the time of their marriage. It aims to ease the financial burden of marriage for poor families and promote social security for minority communities.",
            "eligibility": "Bride must be a resident of Telangana, belong to the Muslim minority, be at least 18 years old, and her family income should not exceed ₹2,00,000 annually. The groom must be at least 21 years old.",
            "benefits": "One-time financial assistance of ₹1,00,116 directly transferred to the bride's mother's bank account before the marriage ceremony.",
            "application_process": "Apply online through the Telangana ePass portal with required documents including Aadhaar, age proof, income certificate, bank details, and marriage confirmation documents.",
            "application_link": "https://telanganaepass.cgg.gov.in/ShaadiMubarak.do"
        },
        {
            "name": "Pradhan Mantri Awas Yojana (PMAY)",
            "description": "A housing scheme to provide affordable housing to urban and rural poor. The scheme provides financial assistance for home construction or renovation.",
            "eligibility": "Low Income Group (LIG), Economically Weaker Section (EWS), and Middle Income Groups (MIG-I & MIG-II).",
            "benefits": "Subsidy on home loan interest up to ₹2.67 lakh.",
            "application_process": "Apply online through the official portal or Common Service Centres (CSCs).",
            "application_link": "https://pmaymis.gov.in"
        },
        {
            "name": "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
            "description": "World’s largest government-funded health insurance scheme offering free treatment up to ₹5 lakh per family per year at empaneled hospitals.",
            "eligibility": "Families identified as poor and vulnerable under SECC 2011 database.",
            "benefits": "Health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
            "application_process": "Check eligibility at the official website using mobile number or ration card.",
            "application_link": "https://mera.pmjay.gov.in"
        },
        {
            "name": "Pradhan Mantri Mudra Yojana (PMMY)",
            "description": "Supports small and micro enterprises by providing loans up to ₹10 lakh without collateral through Mudra banks.",
            "eligibility": "Non-corporate, non-farm small/micro enterprises.",
            "benefits": "Loans categorized into Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
            "application_process": "Apply at any bank, NBFC, or MFI with business proof and ID.",
            "application_link": "https://www.mudra.org.in"
        },
        {
            "name": "Atal Pension Yojana (APY)",
            "description": "Aimed at providing pension benefits to workers in the unorganized sector after retirement.",
            "eligibility": "All citizens aged 18–40 years with a savings bank account.",
            "benefits": "Monthly pension between ₹1,000–₹5,000 after age 60 based on contribution.",
            "application_process": "Enroll via banks with Aadhaar and mobile number.",
            "application_link": "https://npscra.nsdl.co.in/scheme-details.php"
        },
        {
            "name": "Stand-Up India Scheme",
            "description": "Promotes entrepreneurship among SC/ST and women by providing bank loans between ₹10 lakh and ₹1 crore.",
            "eligibility": "SC/ST and/or women entrepreneurs aged above 18 starting a new enterprise.",
            "benefits": "Bank loan between ₹10 lakh and ₹1 crore for greenfield projects.",
            "application_process": "Apply online or visit any bank with project plan and identity proof.",
            "application_link": "https://www.standupmitra.in"
        },
        {
            "name": "Digital India Programme",
            "description": "A flagship programme to transform India into a digitally empowered society and knowledge economy.",
            "eligibility": "All citizens; focus on rural areas, students, and small entrepreneurs.",
            "benefits": "Access to digital literacy, e-Governance services, digital lockers, and broadband for all.",
            "application_process": "Varies per sub-scheme; access through Digital India portal.",
            "application_link": "https://www.digitalindia.gov.in"
        },
        {
            "name": "Skill India Mission",
            "description": "Aims to train over 40 crore people in different skills by 2022. Managed by NSDC under Ministry of Skill Development and Entrepreneurship.",
            "eligibility": "Youth aged 15–45 years; some schemes focus on dropout students and unemployed.",
            "benefits": "Free/affordable vocational training in hundreds of trades and placement assistance.",
            "application_process": "Apply via the Skill India Portal or through registered Training Providers.",
            "application_link": "https://www.skillindia.gov.in"
        },
        {
            "name": "National Social Assistance Programme (NSAP)",
            "description": "A welfare programme providing financial assistance to elderly, widows, and persons with disabilities.",
            "eligibility": "BPL households, age and category specific (old age, widow, disabled).",
            "benefits": "Monthly pension ranging from ₹200–₹500 depending on the category and state top-ups.",
            "application_process": "Apply through local panchayats or municipal offices with ID and proof of BPL.",
            "application_link": "https://nsap.nic.in"
        },
        {
            "name": "Sukanya Samriddhi Yojana",
            "description": "A savings scheme aimed at the welfare of girl children to meet education and marriage expenses.",
            "eligibility": "Girl children under the age of 10 years.",
            "benefits": "High interest rate (currently 8.2%), tax benefits, and guaranteed maturity returns at age 21.",
            "application_process": "Account can be opened in post offices or banks with girl child’s birth certificate.",
            "application_link": "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
        },
        {
            "name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
            "description": "Launched in 2019, PM-KISAN provides income support to small and marginal farmers by offering direct cash transfers.",
            "eligibility": "All small and marginal landholding farmer families with cultivable land (up to 2 hectares).",
            "benefits": "₹6,000 per year in three equal installments of ₹2,000, directly transferred to the bank account.",
            "application_process": "Farmers can apply online via the portal or visit CSCs with Aadhaar, land records, and bank passbook.",
            "application_link": "https://pmkisan.gov.in"
        },
        {
            "name": "National Health Mission (NHM)",
            "description": "The NHM seeks to provide accessible, affordable, and quality healthcare to rural and urban populations, especially vulnerable groups.",
            "eligibility": "All citizens, with focus on rural and BPL families.",
            "benefits": "Free/reduced-cost maternal care, child immunization, disease control, and health infrastructure.",
            "application_process": "Services are available at public hospitals and primary health centres.",
            "application_link": "https://nhm.gov.in"
        },
        {
            "name": "Ujjwala Yojana (Pradhan Mantri Ujjwala Yojana - PMUY)",
            "description": "A scheme to provide LPG connections to BPL families, especially women, to reduce dependency on traditional cooking methods.",
            "eligibility": "Women from BPL households identified in SECC 2011.",
            "benefits": "Free LPG connection with subsidy for refills and stove.",
            "application_process": "Apply through LPG distributors with valid ID and BPL documents.",
            "application_link": "https://www.pmuy.gov.in"
        },
        {
            "name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
            "description": "This scheme focuses on skill development for rural youth to improve their employability in various sectors.",
            "eligibility": "Rural youth aged 15–35 from poor families (as per BPL/SECC lists).",
            "benefits": "Free vocational training, certification, placement assistance, and soft skill development.",
            "application_process": "Apply online or visit local training centres affiliated with DDU-GKY.",
            "application_link": "https://ddugky.gov.in"
        },
        {
            "name": "National Education Policy (NEP) Implementation Schemes",
            "description": "A cluster of schemes under NEP 2020 aimed at reforming school and higher education, including foundational literacy, digital learning, and teacher training.",
            "eligibility": "Students, teachers, and educational institutions across India.",
            "benefits": "Modernized curriculum, digital classrooms, multilingual education, and teacher capacity building.",
            "application_process": "Implementation through schools, higher education institutions, and government departments.",
            "application_link": "https://www.education.gov.in"
        },
        {
            "name": "National Apprenticeship Promotion Scheme (NAPS)",
            "description": "Encourages companies to hire apprentices and train them while providing financial support.",
            "eligibility": "Any individual aged 14 or above who has completed basic education.",
            "benefits": "Government shares 25% of stipend up to ₹1,500 per month and reimburses training costs.",
            "application_process": "Register on the apprenticeship portal as an apprentice or employer.",
            "application_link": "https://apprenticeshipindia.gov.in"
        },
        {
            "name": "Mission Shakti (Women Empowerment)",
            "description": "An umbrella scheme for the protection, safety, and empowerment of women, including Beti Bachao Beti Padhao and One Stop Centre.",
            "eligibility": "Women and girls across India, especially from disadvantaged backgrounds.",
            "benefits": "Counseling, shelter, legal aid, skill development, education campaigns, and financial support.",
            "application_process": "Access through district-level centres, helplines, or Women & Child Welfare Departments.",
            "application_link": "https://wcd.nic.in/schemes/mission-shakti"
        },
        {
            "name": "National Rural Employment Guarantee Scheme (MGNREGA)",
            "description": "Provides 100 days of wage employment in a financial year to rural households to enhance livelihood security.",
            "eligibility": "Adult members of rural households willing to do unskilled manual work.",
            "benefits": "Guaranteed 100 days of wage employment annually with minimum wages.",
            "application_process": "Register at the Gram Panchayat with job card.",
            "application_link": "https://nrega.nic.in"
        },
        {
            "name": "National Urban Livelihoods Mission (DAY-NULM)",
            "description": "Focuses on organizing urban poor into self-help groups and providing skill training for gainful employment.",
            "eligibility": "Urban poor including street vendors, unemployed youth, and vulnerable sections.",
            "benefits": "Self-employment support, training, loans, social mobilization, and shelters for homeless.",
            "application_process": "Apply via municipal departments or ULBs (Urban Local Bodies).",
            "application_link": "https://nulm.gov.in"
        },
        {
            "name": "Poshan Abhiyaan (National Nutrition Mission)",
            "description": "Aims to reduce stunting, undernutrition, anemia and low birth weight in children and women through technology and community participation.",
            "eligibility": "Pregnant women, lactating mothers, children (0–6 years), adolescent girls.",
            "benefits": "Nutrition counseling, supplementary food, health monitoring, and anganwadi services.",
            "application_process": "Delivered through Anganwadi centers; enroll locally via health workers.",
            "application_link": "https://icds-wcd.nic.in/nnm"
        },
        {
            "name": "Jal Jeevan Mission",
            "description": "Launched in 2019, the mission aims to provide functional household tap connections (FHTCs) to every rural household by 2024 with adequate quantity and prescribed quality of water.",
            "eligibility": "All rural households, especially in water-stressed areas.",
            "benefits": "Access to safe and adequate drinking water at the doorstep, village-level infrastructure.",
            "application_process": "Implemented through Gram Panchayats and local government bodies.",
            "application_link": "https://jaljeevanmission.gov.in"
        },
        {
            "name": "National Digital Health Mission (NDHM)",
            "description": "Aims to digitize healthcare by creating a digital health ID, repository of health records, and telemedicine access.",
            "eligibility": "All Indian citizens; optional registration.",
            "benefits": "Digital health ID, access to medical records online, doctor/hospital directory, e-prescriptions.",
            "application_process": "Register online with Aadhaar or mobile number.",
            "application_link": "https://healthid.ndhm.gov.in"
        },
        {
            "name": "PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)",
            "description": "Micro-credit scheme for street vendors impacted by COVID-19, offering collateral-free loans to restart their business.",
            "eligibility": "Street vendors in urban areas, including vendors from peri-urban/rural areas vending within urban limits.",
            "benefits": "Loan of ₹10,000, interest subsidy, digital transaction rewards.",
            "application_process": "Apply online or through municipal offices with vendor certificate or ID.",
            "application_link": "https://pmsvanidhi.mohua.gov.in"
        },
        {
            "name": "Saubhagya – Pradhan Mantri Sahaj Bijli Har Ghar Yojana",
            "description": "Ensures electricity access to all un-electrified households in rural and urban India.",
            "eligibility": "All un-electrified households, especially poor families.",
            "benefits": "Free electricity connections to BPL households, subsidized connection for others.",
            "application_process": "Survey-based identification; apply via DISCOM or local electricity board.",
            "application_link": "https://saubhagya.gov.in"
        },
        {
            "name": "National SC/ST Hub",
            "description": "Aims to promote SC/ST entrepreneurs by supporting their participation in the MSME sector.",
            "eligibility": "SC/ST-owned micro and small enterprises with valid Udyam registration.",
            "benefits": "Capacity building, market access, vendor development, subsidy on participation in trade fairs.",
            "application_process": "Register through NSIC or the hub’s nodal centres.",
            "application_link": "https://scsthub.in"
        },
        {
            "name": "Mission Vatsalya",
            "description": "Aims to ensure the protection, welfare, and development of children in difficult circumstances through institutional and non-institutional care.",
            "eligibility": "Orphaned, abandoned, and vulnerable children; child care institutions.",
            "benefits": "Support for foster care, adoption, sponsorship, and juvenile justice systems.",
            "application_process": "Cases handled by Child Welfare Committees, District Child Protection Units.",
            "application_link": "https://wcd.nic.in/schemes/mission-vatsalya"
        },
        {
            "name": "PM Gati Shakti Yojana",
            "description": "Integrated infrastructure scheme aimed at developing multimodal logistics parks and coordinated infrastructure planning across sectors.",
            "eligibility": "Infrastructure ministries, public and private sector infrastructure players.",
            "benefits": "Improved logistics efficiency, reduced cost and project delays, data-driven infrastructure development.",
            "application_process": "Infrastructure projects integrated through a digital platform; not for individual application.",
            "application_link": "https://gati-shakti.gov.in"
        },
        {
            "name": "Solar Rooftop Scheme",
            "description": "Promotes solar energy adoption by subsidizing installation of solar rooftop panels in residential buildings.",
            "eligibility": "All Indian residential households connected to the grid.",
            "benefits": "Subsidy of up to 40% for solar panel installation (1–3 kW systems).",
            "application_process": "Apply via DISCOMs or the national solar rooftop portal with electricity bill and ID.",
            "application_link": "https://solarrooftop.gov.in"
        },
        {
            "name": "E-Shram Portal",
            "description": "India’s first national database for unorganized workers, helping them access social security schemes.",
            "eligibility": "Unorganized workers aged 16–59 (migrants, construction, gig workers, etc).",
            "benefits": "e-SHRAM card, accident insurance up to ₹2 lakh, future benefits linked via Aadhaar.",
            "application_process": "Self-registration via portal or CSCs with Aadhaar and mobile number.",
            "application_link": "https://eshram.gov.in"
        },
        {
            "name": "FAME India Scheme (Faster Adoption and Manufacturing of Hybrid and Electric Vehicles)",
            "description": "Promotes adoption of electric vehicles by offering incentives to buyers and manufacturers.",
            "eligibility": "Consumers purchasing electric/hybrid vehicles; OEMs must be registered with the scheme.",
            "benefits": "Subsidy on electric two-wheelers, three-wheelers, and four-wheelers.",
            "application_process": "Discount applied directly by registered manufacturers/dealers at point of sale.",
            "application_link": "https://fame2.heavyindustry.gov.in"
        },
        {
            "name": "Stand-Up India Scheme",
            "description": "Provides loans to SC/ST and women entrepreneurs for setting up greenfield enterprises in manufacturing, services, or trading.",
            "eligibility": "SC/ST or women entrepreneurs aged 18+, planning to set up first-time venture in non-farm sector.",
            "benefits": "Bank loans between ₹10 lakh to ₹1 crore with refinance support and handholding services.",
            "application_process": "Apply online or through SIDBI or designated bank branches.",
            "application_link": "https://www.standupmitra.in"
        },
        {
            "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            "description": "Crop insurance scheme to provide financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
            "eligibility": "All farmers growing notified crops in notified areas and who have insurable interest.",
            "benefits": "Low premium rates (2% for Kharif, 1.5% for Rabi), compensation for crop loss.",
            "application_process": "Apply through banks, CSCs, or online before sowing season.",
            "application_link": "https://pmfby.gov.in"
        },
        {
            "name": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
            "description": "Flagship skill development scheme that offers industry-relevant training to youth for better employment opportunities.",
            "eligibility": "Indian youth aged 15–45, school/college dropouts or unemployed.",
            "benefits": "Free skill training, placement assistance, certification, and stipend.",
            "application_process": "Enroll at PMKVY training centers or via the official website.",
            "application_link": "https://www.pmkvyofficial.org"
        },
        {
            "name": "Unnat Jyoti by Affordable LEDs for All (UJALA)",
            "description": "Promotes energy efficiency by distributing LED bulbs, tube lights, and fans at subsidized rates to households.",
            "eligibility": "All residential consumers with valid electricity connection.",
            "benefits": "Affordable LED products that reduce electricity bills and carbon footprint.",
            "application_process": "Purchase through DISCOM-authorized distribution centers or UJALA vans with ID and bill.",
            "application_link": "https://www.eeslindia.org/en/ujala"
        },
        {
            "name": "PM CARES for Children",
            "description": "Supports children who lost both parents or legal guardians due to COVID-19, helping with education, health, and financial support.",
            "eligibility": "Children under 18 who lost both parents/legal guardians during COVID-19 pandemic (from March 2020).",
            "benefits": "Monthly stipend, education support, health insurance, and ₹10 lakh on turning 23.",
            "application_process": "Identified and enrolled by state/district authorities; guardians can also apply.",
            "application_link": "https://pmcaresforchildren.in"
        },
        {
            "name": "National Career Service (NCS)",
            "description": "Online job portal that connects job seekers with employers and provides career-related services and counseling.",
            "eligibility": "All Indian citizens seeking employment or career guidance.",
            "benefits": "Job matching, career counseling, skill training, and job fairs.",
            "application_process": "Register on the NCS portal and create a job profile.",
            "application_link": "https://www.ncs.gov.in"
        },
        {
            "name": "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)",
            "description": "Improves basic urban infrastructure and promotes sustainable urban development, especially water supply and sewerage.",
            "eligibility": "Urban Local Bodies (ULBs) in selected cities; citizens benefit from upgraded infrastructure.",
            "benefits": "Better urban infrastructure, water supply, sewerage, green spaces, and mobility.",
            "application_process": "Implemented by city governments; no direct individual application needed.",
            "application_link": "https://amrut.gov.in"
        },
        {
            "name": "PM Vishwakarma Scheme",
            "description": "Aims to uplift traditional artisans and craftsmen through financial support, training, and market linkage.",
            "eligibility": "Traditional artisans (e.g., blacksmiths, carpenters, goldsmiths) from SC/ST/OBC/general categories.",
            "benefits": "₹15,000 toolkit incentive, skill training, ₹1 lakh–₹2 lakh loan with 5% interest.",
            "application_process": "Apply via CSCs or online portal with Aadhaar, caste certificate, and bank details.",
            "application_link": "https://pmvishwakarma.gov.in"
        },
        {
            "name": "Khelo India Programme",
            "description": "Promotes sports among youth through talent identification, development, and infrastructure support at grassroots level.",
            "eligibility": "Students and athletes under 18 years; selection through trials.",
            "benefits": "Annual scholarship of ₹6.28 lakh for 8 years, training, coaching, sports gear, and infrastructure.",
            "application_process": "Register via Khelo India portal or participate in district/state trials.",
            "application_link": "https://kheloindia.gov.in"
        },
        {
            "name": "Digital India Programme",
            "description": "Flagship initiative to transform India into a digitally empowered society and knowledge economy.",
            "eligibility": "All Indian citizens; institutions and startups benefit via digital enablement schemes.",
            "benefits": "E-governance, broadband access, digital literacy, startup support, public Wi-Fi, and more.",
            "application_process": "Implemented through government departments and platforms like CSCs.",
            "application_link": "https://digitalindia.gov.in"
        },
        {
            "name": "Startup India Scheme",
            "description": "Launched to support entrepreneurs and build a strong startup ecosystem through tax exemptions, funding, and ease of doing business.",
            "eligibility": "Startups recognized by DPIIT; company age < 10 years, turnover < ₹100 crore.",
            "benefits": "3-year tax holiday, self-certification, IPR support, funding access.",
            "application_process": "Register on Startup India portal and obtain DPIIT recognition.",
            "application_link": "https://www.startupindia.gov.in"
        },
        {
            "name": "Ayushman Bharat Digital Mission (ABDM)",
            "description": "Aims to create a digital health ecosystem with health ID, healthcare professionals registry, and electronic health records.",
            "eligibility": "All citizens are eligible for voluntary registration.",
            "benefits": "Health ID, digitized medical history, faster treatment access, teleconsultation.",
            "application_process": "Register using Aadhaar or mobile number via the official portal.",
            "application_link": "https://abdm.gov.in"
        },
        {
            "name": "Padhan Mantri Krishi Sinchai Yojana (PMKSY)",
            "description": "Focused on extending irrigation coverage and improving water use efficiency.",
            "eligibility": "All farmers, especially those in water-scarce and rain-fed areas.",
            "benefits": "Subsidies on drip/sprinkler irrigation systems, canal and groundwater development.",
            "application_process": "Apply via the state agriculture department or panchayat.",
            "application_link": "https://pmksy.gov.in"
        },
        {
            "name": "PM Kisan Samman Nidhi Yojana (PM-KISAN)",
            "description": "Provides income support of ₹6,000 per year to all landholding farmer families in three equal installments.",
            "eligibility": "All landholding farmers with valid documents and bank account.",
            "benefits": "Direct benefit transfer (DBT) of ₹2,000 every four months.",
            "application_process": "Apply online or at CSCs with Aadhaar, land records, and bank account.",
            "application_link": "https://pmkisan.gov.in"
        },
        {
            "name": "SWAYAM – Study Webs of Active-Learning for Young Aspiring Minds",
            "description": "Provides online education from Class 9 to postgraduation, including certification from top institutions like IITs and IIMs.",
            "eligibility": "Students, teachers, professionals seeking free online learning.",
            "benefits": "Free access to courses; paid certification available.",
            "application_process": "Enroll through the SWAYAM portal with an email ID.",
            "application_link": "https://swayam.gov.in"
        },
        {
            "name": "Rashtriya Gokul Mission",
            "description": "Improves indigenous bovine breeds and genetic makeup of Indian cattle.",
            "eligibility": "Farmers and dairy entrepreneurs involved in cattle rearing.",
            "benefits": "Financial support for breeding services, Gokul Grams, and IVF technology.",
            "application_process": "Apply through state animal husbandry departments.",
            "application_link": "https://dahd.nic.in"
        },
        {
            "name": "Integrated Child Development Services (ICDS)",
            "description": "Comprehensive child welfare scheme providing health, nutrition, and preschool education to children under 6 years and pregnant women.",
            "eligibility": "Children under 6, pregnant and lactating mothers, especially in rural/urban slums.",
            "benefits": "Supplementary nutrition, immunization, preschool education, health check-ups.",
            "application_process": "Registration at Anganwadi Centers (AWCs).",
            "application_link": "https://wcd.nic.in/icds"
        },
        {
            "name": "Atal Innovation Mission (AIM)",
            "description": "Promotes a culture of innovation and entrepreneurship across schools, universities, and startups.",
            "eligibility": "Schools (for tinkering labs), academic institutions, startups, and incubators.",
            "benefits": "Funding support, Atal Tinkering Labs, incubation centres, mentorship.",
            "application_process": "Apply online under respective AIM initiatives.",
            "application_link": "https://aim.gov.in"
        },
        {
            "name": "Poshan Abhiyaan",
            "description": "Flagship program to improve nutritional outcomes for children, adolescents, pregnant women, and lactating mothers.",
            "eligibility": "Children under 6, adolescent girls, pregnant and lactating mothers.",
            "benefits": "Nutritional counseling, monitoring via digital tools, community-based health drives.",
            "application_process": "Services availed through Anganwadi and health centers.",
            "application_link": "https://poshanabhiyaan.gov.in"
        },
        {
            "name": "Skill India Mission",
            "description": "Aims to train over 40 crore people in India in different skills by 2025 through industry-relevant training.",
            "eligibility": "Indian youth aged 15–45, especially unemployed and school dropouts.",
            "benefits": "Free training, certification, and job placement assistance.",
            "application_process": "Register on Skill India portal or visit any training center.",
            "application_link": "https://www.skillindia.gov.in"
        }
    ]
}

export default totalschemes;