const totalschl = {
   schloarship: [
    {
        "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
        "description": "Aims to reduce dropout rate after Class 8 by awarding scholarships to meritorious students from economically weaker sections.",
        "eligibility": "Students in Class 9 who secured at least 55% in Class 8 and parental income less than ₹3.5 lakh/year.",
        "benefits": "₹12,000 per year from Class 9 to 12.",
        "application_process": "Apply online via NSP portal with school verification.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "Post Matric Scholarship for SC Students",
        "description": "Supports SC students pursuing post-matric education by covering tuition, maintenance, and other allowances.",
        "eligibility": "SC students studying in Class 11 to postgraduation with family income < ₹2.5 lakh/year.",
        "benefits": "Full tuition fee, maintenance allowance, and book allowance.",
        "application_process": "Apply online via state scholarship portals or NSP.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "AICTE Pragati Scholarship for Girl Students",
        "description": "Encourages girl students to pursue technical education by offering financial support.",
        "eligibility": "Girl students admitted to AICTE-approved colleges with family income < ₹8 lakh/year.",
        "benefits": "₹50,000 per year for 4 years of degree/diploma course.",
        "application_process": "Apply on NSP with institute verification.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "AICTE Saksham Scholarship Scheme",
        "description": "Provides financial support to differently-abled students pursuing technical education.",
        "eligibility": "Differently-abled students with disability ≥40% and family income < ₹8 lakh/year.",
        "benefits": "₹50,000 per year for up to 4 years.",
        "application_process": "Apply online through NSP with proper documentation.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "INSPIRE Scholarship by DST",
        "description": "Promotes science education by awarding scholarships to students pursuing basic and natural science courses.",
        "eligibility": "Top 1% of Class 12 students or KVPY/JEE/NEET qualifiers enrolling in science UG courses.",
        "benefits": "₹80,000 per year (₹60,000 annual + ₹20,000 summer research grant).",
        "application_process": "Apply online via INSPIRE portal with academic proof.",
        "application_link": "https://online-inspire.gov.in"
    },
    {
        "name": "Central Sector Scheme of Scholarships for College and University Students (CSSS)",
        "description": "Awards scholarships to meritorious students from low-income families to pursue higher education.",
        "eligibility": "Top 20th percentile of Class 12 board exam with parental income < ₹4.5 lakh/year.",
        "benefits": "₹10,000 per year for UG and ₹20,000 for PG courses.",
        "application_process": "Apply on the National Scholarship Portal with income and merit proof.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "Maulana Azad National Fellowship (MANF)",
        "description": "Supports minority students for MPhil and PhD through UGC-recognized universities.",
        "eligibility": "Minority students with family income < ₹6 lakh/year who cleared NET/SET exams.",
        "benefits": "Fellowship up to ₹28,000/month and contingency grant.",
        "application_process": "Apply via UGC or minority affairs portal.",
        "application_link": "https://www.ugc.gov.in"
    },
    {
        "name": "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        "description": "Encourages students to take up research careers in science by offering scholarships and mentorship.",
        "eligibility": "Students in Class 11–12 or first year UG in science streams.",
        "benefits": "₹5,000–₹7,000 monthly stipend + annual contingency grant.",
        "application_process": "Apply online with national-level aptitude test and interview.",
        "application_link": "http://kvpy.iisc.ac.in"
    },
    {
        "name": "Begum Hazrat Mahal National Scholarship",
        "description": "Provides financial support to meritorious minority girls from Class 9 to 12.",
        "eligibility": "Minority girls with at least 50% marks and family income < ₹2 lakh/year.",
        "benefits": "₹5,000 (Class 9–10) and ₹6,000 (Class 11–12) annually.",
        "application_process": "Apply online through Maulana Azad Education Foundation website.",
        "application_link": "https://bhmnsmaef.org"
    },
    {
        "name": "National Fellowship for OBC Students (NF-OBC)",
        "description": "Supports OBC students to pursue MPhil and PhD with financial aid.",
        "eligibility": "OBC candidates with income < ₹8 lakh/year and NET qualification.",
        "benefits": "Monthly stipend of ₹31,000–₹35,000 plus contingency grants.",
        "application_process": "Apply via UGC portal when applications are open.",
        "application_link": "https://www.ugc.gov.in"
    },
    {
        "name": "National Talent Search Examination (NTSE)",
        "description": "A national-level scholarship program to identify and nurture talented students of Class 10.",
        "eligibility": "Indian students studying in Class 10 in recognized schools.",
        "benefits": "Scholarship of ₹1,250/month for Class 11–12 and ₹2,000/month for UG/PG.",
        "application_process": "Apply via NCERT/state education boards; selection based on a written test.",
        "application_link": "https://ncert.nic.in/national-talent-examination.php"
    },
    {
        "name": "Prime Minister’s Research Fellowship (PMRF)",
        "description": "Supports meritorious PhD students from top institutions to pursue research in cutting-edge technologies.",
        "eligibility": "Students pursuing PhD in IITs/IISc/IISERs/NITs with top academic background.",
        "benefits": "Fellowship up to ₹70,000/month and ₹2 lakh annual research grant.",
        "application_process": "Apply online through PMRF portal with academic and research proposal.",
        "application_link": "https://www.pmrf.in"
    },
    {
        "name": "L’Oréal India For Young Women in Science Scholarship",
        "description": "Encourages young women to pursue careers in science by providing financial support for higher studies.",
        "eligibility": "Girls who passed Class 12 in science stream with >85% marks; family income < ₹6 lakh/year.",
        "benefits": "₹2.5 lakh over the duration of graduation (science field only).",
        "application_process": "Apply online via the official L’Oréal Foundation website.",
        "application_link": "https://www.foryoungwomeninscience.com"
    },
    {
        "name": "Siemens Scholarship Program",
        "description": "Supports first-year engineering students from economically disadvantaged backgrounds.",
        "eligibility": "First-year engineering students with income < ₹2 lakh/year and ≥60% in Class 12.",
        "benefits": "Covers tuition, books, accommodation, and career mentoring.",
        "application_process": "Apply online through Siemens India Foundation website.",
        "application_link": "https://www.siemens.co.in/en/company/sustainability/corporate-citizenship/siemens-scholarship-program.html"
    },
    {
        "name": "Colgate Keep India Smiling Scholarship",
        "description": "Offers scholarships to students from Class 11 to graduation level across various fields.",
        "eligibility": "Meritorious students with family income < ₹5 lakh/year; varies by level.",
        "benefits": "₹20,000 to ₹75,000 depending on course level.",
        "application_process": "Apply through Buddy4Study portal.",
        "application_link": "https://www.buddy4study.com/colgate"
    },
    {
        "name": "ONGC Scholarship for Meritorious SC/ST Students",
        "description": "Supports SC/ST students pursuing professional courses in engineering, medicine, management, and geosciences.",
        "eligibility": "SC/ST students with ≥60% in Class 12; family income < ₹4.5 lakh/year.",
        "benefits": "₹48,000 per year for the full course duration.",
        "application_process": "Apply online via ONGC Foundation website.",
        "application_link": "https://www.ongcscholar.org"
    },
    {
        "name": "Reliance Foundation Scholarships",
        "description": "Merit-based scholarships for UG and PG students in tech and innovation domains.",
        "eligibility": "Students enrolled in eligible UG/PG programs in AI, computer science, mathematics, etc.",
        "benefits": "₹2 lakh/year (UG) and up to ₹6 lakh total (PG) plus mentoring.",
        "application_process": "Apply via Reliance Foundation official portal.",
        "application_link": "https://scholarships.reliancefoundation.org"
    },
    {
        "name": "HDFC Educational Crisis Scholarship Support (ECSS)",
        "description": "Helps students facing financial crisis due to personal or family emergencies.",
        "eligibility": "Students from Class 6 to PG level; proof of crisis required.",
        "benefits": "Up to ₹75,000 or tuition fees, whichever is lower.",
        "application_process": "Apply through HDFC ECSS website.",
        "application_link": "https://www.hdfcbank.com/personal/resources/learning-centre/plan-your-finances/educational-crisis-scholarship"
    },
    {
        "name": "Santoor Women's Scholarship",
        "description": "Supports girls from disadvantaged backgrounds to pursue higher education.",
        "eligibility": "Girls from Andhra Pradesh, Telangana, Karnataka who completed Class 12 and enrolled in graduation.",
        "benefits": "₹24,000/year for tuition and other expenses for 3 years.",
        "application_process": "Apply via Santoor scholarship website or through Wipro Foundation.",
        "application_link": "https://www.santoorscholarships.com"
    },
    {
        "name": "Vidyasaarathi Scholarship",
        "description": "A technology-enabled scholarship platform to support students across various levels by corporates like NSDL.",
        "eligibility": "Vary by scholarship; generally for UG/PG students from economically weaker sections.",
        "benefits": "₹5,000 to ₹50,000 depending on sponsor and course.",
        "application_process": "Register and apply through Vidyasaarathi portal.",
        "application_link": "https://www.vidyasaarathi.co.in"
    },
    {
        "name": "Fair and Lovely (Glow & Lovely) Foundation Scholarship",
        "description": "Offers scholarships to women pursuing undergraduate, postgraduate, and vocational courses.",
        "eligibility": "Women aged 15–30 years, Class 12 passed, with family income < ₹6 lakh/year.",
        "benefits": "Scholarship amount up to ₹25,000–₹50,000 depending on course.",
        "application_process": "Apply through the Buddy4Study portal.",
        "application_link": "https://www.buddy4study.com/page/glow-and-lovely-career-foundation-scholarship"
    },
    {
        "name": "Ishan Uday Scholarship Scheme for NER",
        "description": "Encourages higher education among students from the North Eastern Region of India.",
        "eligibility": "Students from NER who have passed Class 12 and are enrolled in a UG course; family income < ₹4.5 lakh/year.",
        "benefits": "₹5,400/month for general courses and ₹7,800/month for technical courses.",
        "application_process": "Apply via the National Scholarship Portal.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "Ratan Tata Scholarship for Engineering Students",
        "description": "Supports Indian undergraduate engineering students at Cornell University, USA.",
        "eligibility": "Indian students accepted into Cornell’s UG engineering program with financial need.",
        "benefits": "Covers full tuition and living expenses for 4 years.",
        "application_process": "Apply during Cornell admission and indicate financial aid requirement.",
        "application_link": "https://admissions.cornell.edu"
    },
    {
        "name": "JN Tata Endowment for the Higher Education of Indians",
        "description": "Provides loan scholarships for Indian students pursuing PG/PhD abroad.",
        "eligibility": "Indian students with a good academic record and admission to an international university.",
        "benefits": "Loan scholarship ranging from ₹1 lakh to ₹10 lakh; partial travel grants available.",
        "application_process": "Apply online on the JN Tata Endowment website.",
        "application_link": "https://www.jntataendowment.org"
    },
    {
        "name": "Indira Gandhi Single Girl Child Scholarship",
        "description": "Encourages single girl children to pursue PG studies through UGC-recognized universities.",
        "eligibility": "Single girl child enrolled in PG programs (non-professional) in regular mode.",
        "benefits": "₹36,200 annually for 2 years.",
        "application_process": "Apply through the UGC scholarship portal.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "Narotam Sekhsaria Scholarship Programme",
        "description": "Merit-based loan scholarship for students pursuing PG courses in India or abroad.",
        "eligibility": "Indian graduates with excellent academic record, seeking admission to top institutions.",
        "benefits": "Interest-free loan scholarship with partial grants depending on need.",
        "application_process": "Apply online via the official Narotam Sekhsaria Foundation website.",
        "application_link": "https://www.nsscholarship.net"
    },
    {
        "name": "KC Mahindra Scholarships for Postgraduate Studies Abroad",
        "description": "Supports Indian students going abroad for PG education.",
        "eligibility": "Indian students with first-class UG degree and confirmed admission in a reputable foreign university.",
        "benefits": "Up to ₹8 lakh per scholar and ₹4 lakh as interest-free loan.",
        "application_process": "Apply online at KC Mahindra Education Trust website.",
        "application_link": "https://www.kcmet.org"
    },
    {
        "name": "Homi Bhabha Centre for Science Education (HBCSE) Olympiad Scholarships",
        "description": "Offers scholarships and mentorship to students selected in national science/maths olympiads.",
        "eligibility": "Students qualified in NSE, INO, or equivalent Olympiad exams.",
        "benefits": "Free training camps, travel support, and scholarships for selected international Olympiad participants.",
        "application_process": "Participate through school nominations and national selection exams.",
        "application_link": "https://olympiads.hbcse.tifr.res.in"
    },
    {
        "name": "Raman Kant Munjal Scholarship",
        "description": "Supports underprivileged students pursuing professional UG courses like BBA, B.Com, etc.",
        "eligibility": "Class 12 students with family income < ₹4 lakh/year, enrolled in eligible UG program.",
        "benefits": "₹50,000 to ₹5 lakh per year for 3 years.",
        "application_process": "Apply through the Hero Group Foundation website or Buddy4Study.",
        "application_link": "https://www.buddy4study.com/page/raman-kant-munjal-scholarship"
    },
    {
        "name": "Tata Trusts Means Grant for College",
        "description": "Financial assistance for college students in Mumbai pursuing higher studies.",
        "eligibility": "College students (UG/PG) in Mumbai with financial need.",
        "benefits": "Partial tuition fee reimbursement.",
        "application_process": "Apply offline through the Tata Trusts office with required documents.",
        "application_link": "https://www.tatatrusts.org"
    },
    {
        "name": "ICCR Atal Bihari Vajpayee General Scholarship Scheme",
        "description": "Offered by the Indian Council for Cultural Relations (ICCR) to international students for undergraduate, postgraduate, and doctoral studies in India.",
        "eligibility": "International students from specified countries with good academic records.",
        "benefits": "Covers tuition fees, accommodation, living expenses, and medical insurance.",
        "application_process": "Apply online through the ICCR A2A Scholarship Portal.",
        "application_link": "https://www.iccr.gov.in/a2a-scholars"
    },
    {
        "name": "Reliance Foundation Undergraduate Scholarships",
        "description": "Supports up to 5,000 meritorious undergraduate students from all streams on a merit-cum-means basis.",
        "eligibility": "First-year undergraduate students in any stream with a household income < ₹15 lakh/year.",
        "benefits": "Up to ₹2 lakh over the duration of the degree program.",
        "application_process": "Apply online through the Reliance Foundation Scholarships portal.",
        "application_link": "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx"
    },
    {
        "name": "UGC National Scholarship for Post Graduate Studies",
        "description": "Provides financial assistance to Indian students pursuing postgraduate degrees in recognized universities.",
        "eligibility": "Graduates with at least 55% marks enrolling in full-time postgraduate programs.",
        "benefits": "Monthly stipend and contingency grant as per UGC norms.",
        "application_process": "Apply online through the UGC scholarship portal.",
        "application_link": "https://www.ugc.gov.in/Scholarships/stu_Scholarship6"
    },
    {
        "name": "Study in India Scholarship Program",
        "description": "Offers scholarships to international students to pursue higher education in Indian institutions.",
        "eligibility": "International students with good academic records seeking admission in Indian colleges.",
        "benefits": "Covers tuition fees and accommodation expenses.",
        "application_process": "Apply online through the Study in India portal.",
        "application_link": "https://studyindiascholarship.com/"
    },
    {
        "name": "GREAT Scholarships India by British Council",
        "description": "Provides scholarships for Indian students to pursue postgraduate studies in the UK.",
        "eligibility": "Indian students with an undergraduate degree and strong academic background.",
        "benefits": "Minimum of £10,000 towards tuition fees for a one-year postgraduate course.",
        "application_process": "Apply directly to participating UK universities.",
        "application_link": "https://www.britishcouncil.in/study-uk/scholarships/great-scholarships"
    },
    {
        "name": "Royal Holloway India Postgraduate Scholarship",
        "description": "Offered by Royal Holloway, University of London, to Indian students for full-time master's degrees.",
        "eligibility": "Indian residents with an offer to study a full-time master's degree starting in September 2025 or January 2026.",
        "benefits": "Tuition fee reduction of £4,000.",
        "application_process": "Apply online through the Royal Holloway scholarships portal.",
        "application_link": "https://www.royalholloway.ac.uk/studying-here/fees-and-funding/scholarships/royal-holloway-india-postgraduate-scholarship/"
    },
    {
        "name": "Fulbright-Nehru Master's Fellowships",
        "description": "Supports outstanding Indian students to pursue master's degrees in the USA.",
        "eligibility": "Indian citizens with at least 55% marks in bachelor's degree and three years of work experience.",
        "benefits": "Covers tuition, living expenses, airfare, and health insurance.",
        "application_process": "Apply online through the USIEF portal.",
        "application_link": "http://www.usief.org.in"
    },
    {
        "name": "K.C. Mahindra Scholarships for Post-Graduate Studies Abroad",
        "description": "Provides interest-free loan scholarships to Indian students for postgraduate studies abroad.",
        "eligibility": "Indian graduates with a first-class degree and admission to a reputable foreign university.",
        "benefits": "Up to ₹8 lakh per scholar.",
        "application_process": "Apply online through the K.C. Mahindra Education Trust website.",
        "application_link": "https://www.kcmet.org/what-we-do-scholarship-grants.aspx"
    },
    {
        "name": "Inlaks Shivdasani Foundation Scholarships",
        "description": "Offers scholarships to Indian students for full-time master's, MPhil, or doctoral programs abroad.",
        "eligibility": "Indian citizens with a good first degree and admission to a top-ranked institution.",
        "benefits": "Up to $100,000 covering tuition, living expenses, and one-way travel.",
        "application_process": "Apply online through the Inlaks Foundation website.",
        "application_link": "https://www.inlaksfoundation.org/scholarships/"
    },
    {
        "name": "JN Tata Endowment Loan Scholarships",
        "description": "Provides loan scholarships to Indian students for higher studies abroad.",
        "eligibility": "Indian graduates with a consistently good academic record and admission to a foreign university.",
        "benefits": "Loan scholarships ranging from ₹1 lakh to ₹10 lakh.",
        "application_process": "Apply online through the JN Tata Endowment website.",
        "application_link": "https://www.jntataendowment.org"
    },
    {
        "name": "INSPIRE Scholarship (SHE) by DST",
        "description": "Department of Science and Technology offers this to encourage students to pursue natural and basic sciences.",
        "eligibility": "Class 12 passed with top 1% marks, pursuing UG in science streams (B.Sc., Integrated M.Sc.).",
        "benefits": "₹80,000 per annum for 5 years.",
        "application_process": "Apply through the INSPIRE Program website.",
        "application_link": "https://online-inspire.gov.in"
    },
    {
        "name": "Sitaram Jindal Foundation Scholarship",
        "description": "Supports students from Class 11 to postgraduation and diploma courses.",
        "eligibility": "Indian students from economically weaker backgrounds; minimum marks vary by course.",
        "benefits": "₹500 to ₹2,500 per month depending on course and category.",
        "application_process": "Apply online or offline through Sitaram Jindal Foundation website.",
        "application_link": "https://www.sitaramjindalfoundation.org"
    },
    {
        "name": "ONGC Scholarship for SC/ST/OBC/General (Economically Weaker) Students",
        "description": "For meritorious students from marginalized and EWS categories.",
        "eligibility": "SC/ST/OBC/EWS students in 1st year of Engineering/MBBS/MBA/Masters in Geology/Geophysics; income < ₹2 lakh/year.",
        "benefits": "₹48,000 per annum for full course duration.",
        "application_process": "Apply online through ONGC Foundation portal.",
        "application_link": "https://www.ongcscholar.org"
    },
    {
        "name": "Vidyasaarathi Scholarship by NSDL",
        "description": "A technology-driven platform offering financial aid from corporates to deserving students.",
        "eligibility": "Indian students enrolled in UG/PG/Diploma courses with family income < ₹3 lakh/year.",
        "benefits": "Varies by provider—covers tuition fees and books.",
        "application_process": "Apply via Vidyasaarathi portal.",
        "application_link": "https://www.vidyasaarathi.co.in"
    },
    {
        "name": "Tata Capital Pankh Scholarship",
        "description": "Supports underprivileged students pursuing education from Class 6 to UG/PG levels.",
        "eligibility": "Indian students with income < ₹4 lakh/year.",
        "benefits": "Up to 80% of tuition fees or ₹12,000–₹50,000 depending on the course.",
        "application_process": "Apply through Buddy4Study platform.",
        "application_link": "https://www.buddy4study.com/page/tata-capital-pankh-scholarship-program"
    },
    {
        "name": "Central Sector Scheme of Scholarships for College and University Students",
        "description": "Merit-cum-means scholarship by MHRD for students in regular UG/PG courses.",
        "eligibility": "Top 20th percentile in Class 12 from state/central boards; family income < ₹8 lakh/year.",
        "benefits": "₹10,000/year at UG level; ₹20,000/year at PG level.",
        "application_process": "Apply via National Scholarship Portal.",
        "application_link": "https://scholarships.gov.in"
    },
    {
        "name": "IndusInd Foundation Scholarship",
        "description": "Supports meritorious and needy students for higher education after Class 12.",
        "eligibility": "Class 12 pass with 85%+ marks; family income criteria apply.",
        "benefits": "Covers tuition and education-related expenses.",
        "application_process": "Download form and apply by post/email.",
        "application_link": "https://www.indusindfoundation.com"
    },
    {
        "name": "Kotak Kanya Scholarship",
        "description": "Empowers meritorious girl students from EWS backgrounds to pursue professional graduation.",
        "eligibility": "Class 12 passed with 85%+ marks; income < ₹3.2 lakh/year; must be pursuing professional UG course.",
        "benefits": "Up to ₹1.5 lakh/year for 3–5 years.",
        "application_process": "Apply via Buddy4Study platform.",
        "application_link": "https://www.buddy4study.com/page/kotak-kanya-scholarship"
    },
    {
        "name": "Kind Scholarship for Meritorious Students",
        "description": "Private scholarship for academically bright students facing financial hardships.",
        "eligibility": "Open to Class 9 to graduation level students from low-income families.",
        "benefits": "₹6,000–₹36,000 annually depending on course.",
        "application_process": "Apply via Buddy4Study portal.",
        "application_link": "https://www.buddy4study.com"
    },
    {
        "name": "Sahu Jain Trust Loan Scholarship",
        "description": "Provides interest-free loan scholarships to Indian students pursuing technical and professional courses.",
        "eligibility": "Students pursuing graduation/postgraduation in technical or professional courses in India.",
        "benefits": "₹2,500 to ₹25,000 per annum as interest-free loan.",
        "application_process": "Apply offline with printed forms from the Sahu Jain Trust.",
        "application_link": "https://www.sahujaintrust.timesofindia.com"
    },

    {
        "name": "Erasmus Mundus Joint Master Degrees",
        "description": "A prestigious, integrated, international study program jointly delivered by an international consortium of higher education institutions.",
        "eligibility": "Students from any country; must have a bachelor's degree.",
        "benefits": "Full tuition fees, travel allowance, installation costs, and subsistence allowance.",
        "application_process": "Apply online through the Erasmus Mundus catalog.",
        "application_link": "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"
    },
    {
        "name": "Chevening Scholarships",
        "description": "UK government’s global scholarship program, funded by the Foreign and Commonwealth Office (FCO) and partner organizations.",
        "eligibility": "Outstanding emerging leaders from around the world to pursue one-year master’s degrees in the UK.",
        "benefits": "Covers tuition fees, travel costs, living allowance, and additional grants.",
        "application_process": "Apply online through the Chevening website.",
        "application_link": "https://www.chevening.org/apply/"
    },
    {
        "name": "Commonwealth Scholarships",
        "description": "For students from developing Commonwealth countries to pursue master's and PhD studies in the UK.",
        "eligibility": "Citizens of a Commonwealth country with an undergraduate honors degree of at least upper second class.",
        "benefits": "Covers tuition fees, airfare, and living allowance.",
        "application_process": "Apply through the Commonwealth Scholarship Commission's online application system.",
        "application_link": "http://cscuk.dfid.gov.uk/apply/"
    },
    {
        "name": "Australia Awards Scholarships",
        "description": "Long-term development awards administered by the Department of Foreign Affairs and Trade.",
        "eligibility": "Citizens of participating countries in Asia, Pacific, Africa, and the Middle East; must meet specific country criteria.",
        "benefits": "Full tuition fees, return air travel, establishment allowance, contribution to living expenses.",
        "application_process": "Apply online through the Australia Awards website.",
        "application_link": "https://dfat.gov.au/people-to-people/australia-awards/Pages/how-to-apply.aspx"
    },
    {
        "name": "MEXT Scholarship (Japan)",
        "description": "Offered by the Japanese Ministry of Education, Culture, Sports, Science, and Technology for undergraduate, research, and specialized training studies.",
        "eligibility": "Non-Japanese citizens; age and academic background criteria vary by program.",
        "benefits": "Covers tuition fees, monthly allowance, and airfare.",
        "application_process": "Apply through the Japanese embassy or consulate in your country.",
        "application_link": "https://www.studyinjapan.go.jp/en/smap-stopj-applications-research.html"
    },
    {
        "name": "Swiss Government Excellence Scholarships",
        "description": "For foreign scholars and artists to pursue research or further studies at Swiss institutions.",
        "eligibility": "Postgraduate researchers with a master's degree or equivalent.",
        "benefits": "Monthly payment, exemption of tuition fees, health insurance, airfare allowance.",
        "application_process": "Apply through the Swiss diplomatic representation in your country.",
        "application_link": "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
    },
    {
        "name": "Gates Cambridge Scholarships",
        "description": "For outstanding applicants from outside the UK to pursue a full-time postgraduate degree in any subject at the University of Cambridge.",
        "eligibility": "Citizens of any country outside the UK; must apply to pursue one of the eligible courses.",
        "benefits": "Covers the full cost of studying at Cambridge, including tuition fees, maintenance allowance, travel costs.",
        "application_process": "Apply online through the University of Cambridge's Graduate Application Portal.",
        "application_link": "https://www.gatescambridge.org/apply/"
    },
    {
        "name": "Rhodes Scholarships",
        "description": "Postgraduate awards supporting exceptional students from around the world to study at the University of Oxford.",
        "eligibility": "Citizens of eligible countries; aged 18-24; must have completed a bachelor's degree.",
        "benefits": "Covers all university and college fees, personal stipend, and airfare.",
        "application_process": "Apply online through the Rhodes Trust website.",
        "application_link": "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/"
    },
    {
        "name": "DAAD Scholarships (Germany)",
        "description": "Offers a wide range of scholarships for international students to study in Germany at various degree levels.",
        "eligibility": "Varies by program; generally requires a bachelor's degree and proficiency in English or German.",
        "benefits": "Monthly stipend, travel allowance, health insurance, and tuition fees where applicable.",
        "application_process": "Apply online through the DAAD portal.",
        "application_link": "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
    },
    {
        "name": "Yale University Scholarships USA",
        "description": "Fully funded scholarships for international students for undergraduate, master's, and PhD studies at Yale University.",
        "eligibility": "Open to international students demonstrating financial need.",
        "benefits": "Can vary from a few hundred dollars to over $70,000 per year; average need-based scholarship is over $50,000.",
        "application_process": "Apply for financial aid during the admission application process.",
        "application_link": "https://admissions.yale.edu/financial-aid"
    },
    {
        "name": "LSE Commonwealth Shared Scholarship Scheme (CSSS)",
        "description": "Offered by the London School of Economics and Political Science in collaboration with the UK Department for International Development to support students from developing Commonwealth countries.",
        "eligibility": "Students from developing Commonwealth nations with a first-class or upper second-class undergraduate degree.",
        "benefits": "Covers full tuition fees, travel costs, and maintenance allowance.",
        "application_process": "Apply through the LSE Graduate Admissions online portal.",
        "application_link": "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/Scholarships-and-other-funding/Commonwealth-Shared-Scholarship-Scheme"
    },
    {
        "name": "Saltire Scholarship",
        "description": "Offered by the Scottish Government in collaboration with Scottish universities to attract students from India, China, Pakistan, USA, Canada, and Japan for master's programs in science, technology, healthcare, and renewable energy.",
        "eligibility": "Students from specified countries with an offer from a Scottish university for eligible master's programs.",
        "benefits": "£8,000 towards tuition fees.",
        "application_process": "Apply through the Study in Scotland website.",
        "application_link": "https://www.scotland.org/study/saltire-scholarships"
    },
    {
        "name": "Orange Tulip Scholarship",
        "description": "Aimed at Indian students to pursue undergraduate or postgraduate studies in the Netherlands, funded by Dutch higher education institutions and multinationals.",
        "eligibility": "Indian students with an offer from a participating Dutch institution.",
        "benefits": "Varies by institution; can include full or partial tuition fee waivers.",
        "application_process": "Apply through the Nuffic Neso India website.",
        "application_link": "https://www.nesoindia.org/scholarships/orange-tulip-scholarship"
    },
    {
        "name": "Campus France Charpak Scholarship",
        "description": "Offered by the French government to support Indian students pursuing master's programs in France.",
        "eligibility": "Indian students aged 30 or under with an offer from a French institution for a master's program.",
        "benefits": "Includes living allowance, tuition fee waivers, visa fee waiver, and assistance in finding accommodation.",
        "application_process": "Apply through the Campus France India website.",
        "application_link": "https://www.inde.campusfrance.org/charpak-masters-program"
    },
    {
        "name": "Jio Scholarship Program",
        "description": "Offered by Reliance Foundation to provide financial assistance to meritorious students from economically weaker sections for higher education.",
        "eligibility": "Students who have secured at least 70% marks in 12th standard with a family income less than ₹4 lakh per annum.",
        "benefits": "Up to ₹2 lakh per annum.",
        "application_process": "Apply through the official Jio Scholarship portal.",
        "application_link": "https://www.jio.com/en-in/jio-scholarship"
    },
    {
        "name": "Tata Scholarship for Cornell University",
        "description": "Provides financial support to Indian students with exceptional academic merit and financial need for undergraduate studies at Cornell University.",
        "eligibility": "Indian citizens with strong academic credentials applying to Cornell University.",
        "benefits": "Full cost of attendance for the entire undergraduate program.",
        "application_process": "Apply through Cornell University's financial aid office.",
        "application_link": "https://admissions.cornell.edu/apply/international-students/tata-scholarship"
    },
    {
        "name": "LIC Golden Jubilee Scholarship Scheme",
        "description": "Offered by the Life Insurance Corporation of India to support meritorious students from economically weaker sections for higher education.",
        "eligibility": "Students with family income less than ₹1 lakh per annum who have secured at least 60% marks in 12th standard.",
        "benefits": "₹20,000 per annum for degree courses and ₹25,000 per annum for professional courses.",
        "application_process": "Apply through the LIC India website.",
        "application_link": "https://www.licindia.in/Bottom-Links/Golden-Jubilee-Foundation"
    },
    {
        "name": "KC Mahindra Scholarships for Post-Graduate Studies Abroad",
        "description": "Provides financial assistance to deserving Indian students pursuing postgraduate studies at top international universities.",
        "eligibility": "Students with at least 75% marks in 12th standard and demonstrable financial need.",
        "benefits": "Interest-free loan scholarship of up to ₹8 lakh.",
        "application_process": "Apply through the KC Mahindra Education Trust website.",
        "application_link": "https://www.kcmet.org/what-we-do-Scholarship-Grants.aspx"
    },
    {
        "name": "Türkiye Scholarships",
        "description": "Funded by the Government of Turkey, offering scholarships to international students for associate, undergraduate, master's, and PhD studies in Turkey.",
        "eligibility": "International students meeting academic criteria; specific requirements vary by program.",
        "benefits": "Covers tuition fees, accommodation, health insurance, and monthly stipend.",
        "application_process": "Apply through the Türkiye Scholarships online portal.",
        "application_link": "https://www.turkiyeburslari.gov.tr/"
    },
    {
        "name": "Stanford Reliance Dhirubhai Fellowship",
        "description": "Offered by Reliance Industries and Stanford Graduate School of Business to support Indian students pursuing an MBA at Stanford.",
        "eligibility": "Indian students with a strong academic record, leadership qualities, and commitment to returning to India within two years of completing the MBA.",
        "benefits": "Approximately $150,000 for the two-year MBA program.",
        "application_process": "Apply through Stanford GSB's admissions portal.",
        "application_link": "https://www.gsb.stanford.edu/programs/mba/financial-aid/types/fellowships/reliance"
    },
    {
        "name": "Weidenfeld-Hoffmann Scholarships and Leadership Programme",
        "description": "Provides scholarships for outstanding students from developing and emerging economies to pursue graduate studies at the University of Oxford.",
        "eligibility": "Students from eligible countries with a commitment to return to their country of origin and contribute to its development.",
        "benefits": "Covers 100% of course fees and provides a grant for living costs.",
        "application_process": "Apply through the University of Oxford's graduate application portal.",
        "application_link": "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/fees-funding-and-scholarships/oxford-scholarships/weidenfeld-hoffmann-scholarships-and-leadership-programme"
    }
]
}
export default totalschl;