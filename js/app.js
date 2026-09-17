// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "966541134385"; // Replace with real WhatsApp Business number
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with real Web3Forms access key
const PHONE_NUMBER = "+966541134385"; // Replace with real company phone number

// --- TRANSLATIONS CATALOG ---
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_contact: "Contact Us",
    nav_blogs: "Blogs & FAQ",
    btn_book: "Book a Home Visit",
    btn_call: "Call Us",
    
    // Homepage content
    hero_eyebrow: "Serving Families Across Jeddah",
    hero_title: "The clinic, at <em>your</em> door.",
    hero_subhead: "MCE Care brings professional home nursing, certified physiotherapy, home lab tests, doctor consultations, and caregiver services directly to your door in Jeddah. Book your home visit today.",
    hero_stat_services_num: "4",
    hero_stat_services_lbl: "Core Services",
    hero_stat_arrival_num: "Under 60 Mins",
    hero_stat_arrival_lbl: "Response Time",
    hero_stat_cities_num: "Jeddah",
    hero_stat_cities_lbl: "Coverage Area",
    
    tracking_title: "LIVE VISIT TRACKING",
    tracking_city: "Jeddah (Al Safa)",
    tracking_status: "Visit Status: En Route",
    tracking_desc: "Dr. Layla (Physiotherapist) is arriving in approximately 12 minutes.",
    
    trust_1: "All providers are professional, compassionate, well-experienced, and fully licensed.",
    trust_2: "Same-day bookings and scheduled care available",
    trust_3: "Male and female practitioners available by choice",
    trust_4: "Secure digital medical summaries straight to your phone",
    trust_5: "Strict medical hygiene and infection prevention protocols are adhered to at all times.",
    
    services_eyebrow: "What We Offer",
    services_title: "Four ways we bring care home.",
    service_1_title: "Physiotherapy at Home",
    service_1_desc: "Get customized rehabilitation programs including post-surgery recovery, chronic pain relief, and mobility assistance, delivered in privacy by certified therapists.",
    service_1_badge: "45-60 min sessions",
    service_2_title: "Home Lab Tests",
    service_2_desc: "Avoid clinics. Our certified lab technicians collect samples hygienically at your convenience, sending secure digital results to your phone within 24 hours.",
    service_2_badge: "Results in 24 hours",
    service_3_title: "Home Consultation",
    service_3_desc: "Schedule home visits with general physicians for diagnostic checks, prescription renewals, and patient monitoring, to avoid unnecessary trips to the hospital.",
    service_3_badge: "General Physicians",
    service_4_title: "Home Nursing & Caregiver",
    service_4_desc: "Access compassionate, licensed nurses and caregivers specialized in clinical wound care, injections, post-operative support, elderly assistance, and daily live-in care.",
    service_4_badge: "Licensed Nurses & Caregivers",
    services_guarantee_1: "All providers are professional, compassionate, well-experienced, and fully licensed.",
    services_guarantee_2: "Strict medical hygiene and infection prevention protocols are adhered to at all times. Delivered directly at your doorstep.",
    price_from: "From 99 SAR",
    price_caregiver: "From 150 SAR",
    price_physio: "From 200 SAR",
    price_consultation: "From 200 SAR",
    price_lab: "From 99 SAR",
    
    how_eyebrow: "How it works",
    how_title: "From a phone call to care at your door.",
    how_step1_title: "Choose a service",
    how_step1_desc: "Select between Physiotherapy, Home Lab Tests, Doctor Visit, or Caretaker services.",
    how_step2_title: "Pick a time",
    how_step2_desc: "Choose a date and time slot that suits your family, and note practitioner gender preference.",
    how_step3_title: "Provider arrives",
    how_step3_desc: "Our licensed, fully-equipped healthcare professional arrives directly at your doorstep.",
    how_step4_title: "Care summary",
    how_step4_desc: "Receive digital reports, doctor summaries, and recommendations directly on your phone.",
    
    why_eyebrow: "Why Families Trust Us",
    why_title: "What it feels like to have care come to you.",
    why_quote1: '\"Having a licensed physiotherapist come to our home in Jeddah saved my father hours of stressful travel. The rehabilitation sessions were gentle, professional, and highly effective.\"',
    why_quote2: '\"Ordered a comprehensive home lab panel for my elderly mother. The technician arrived on time, was extremely hygienic, and we got digital results within 24 hours.\"',
    why_quote3: '\"Knowing my grandmother has a compassionate, live-in caregiver in Jeddah gives our family absolute peace of mind. The level of respect and communication is amazing.\"',
    why_team_caption: "Our Licensed Care Team",
    why_high_1_title: "SCFHS Certified",
    why_high_1_desc: "All medical professionals are registered with the Saudi Commission for Health Specialties.",
    why_high_2_title: "100% Verified Credentials",
    why_high_2_desc: "Rigorous vetting ensures clinical excellence and complete family safety.",
    why_high_3_title: "Bilingual Support",
    why_high_3_desc: "Clear, direct communication in both Arabic and English during visits.",
    
    // About Us content
    about_eyebrow: "Our Story",
    about_title: "Compassionate care at your doorstep in Jeddah",
    about_mission_title: "Our Mission",
    about_mission_desc: "MCE Care exists to bring professional, high-quality, and reliable medical services directly to families in Jeddah. We specialize in post-surgery rehabilitation, chronic pain relief, elderly support, and home doctor visits, removing the physical burden of clinic travel.",
    about_values_title: "Our Core Values",
    value_dignity_title: "Dignity & Care",
    value_dignity_desc: "We treat every patient like family, prioritizing comfort and emotional well-being.",
    value_punctuality_title: "Punctuality",
    value_punctuality_desc: "Time is critical in healthcare; our professionals arrive as scheduled.",
    value_safety_title: "Patient Safety",
    value_safety_desc: "Strict medical protocols and verified licensed healthcare practitioners.",
    about_safety_eyebrow: "Patient Safety First",
    about_safety_title: "Our Clinical Safety Protocols",
    about_safety_desc: "We enforce strict healthcare protocols to protect you and your loved ones during every home visit. From sanitization to continuous monitoring, safety is our top priority.",
    about_safety_pt1: "100% sterilized medical kits for every session.",
    about_safety_pt2: "Continuous oversight by senior general physicians.",
    about_safety_pt3: "Full background, identity, and licensing checks for all staff.",
    about_coverage_title: "Jeddah Coverage Areas",
    about_coverage_desc: "We currently serve families across all major districts of Jeddah, including Al-Sharafeyah, Al-Hamra, Al-Safa, Al-Naeem, Al-Rawdah, and Al-Balad.",

    // Services page content
    services_page_title: "Our Specialized Home Healthcare Services",
    services_page_desc: "Professional medical care delivered in the safety, comfort, and privacy of your home.",
    service_1_details: "Our licensed physiotherapists provide targeted post-surgery recovery plans, elder mobility assistance, stroke rehabilitation, and chronic pain management. Every session is personalized to help you regain movement quickly without leaving home.",
    service_2_details: "Avoid busy lab queues. Our certified lab technicians collect blood samples hygienically at your convenience. We deliver secure digital reports straight to your phone within 24 hours.",
    service_3_details: "Have an experienced general physician visit your home for diagnostic checkups, prescription renewals, chronic condition monitoring, and family checkups to avoid unnecessary trips to the hospital.",
    service_4_details: "We provide compassionate, licensed clinical nurses and caregivers for all home clinical nursing needs (wound dressing, injection administration, fluid management) as well as long-term daily support. Available on hourly, daily, or live-in plans.",
    insurance_title: "Insurance & Direct Billing",
    insurance_desc: "We accept payment and coordinate with leading insurance providers including Bupa and Tawuniya. We also support cash, credit cards, and Mada for easy direct billing.",

    // Contact page content
    contact_eyebrow: "Get in Touch",
    contact_safety_title: "Our Commitment to Safety & Quality",
    contact_safety_desc: "At MCE Care, patient safety is our highest priority. We follow strict clinical guidelines for home medical care.",
    contact_safety_point1_title: "Rigorous Sanitization",
    contact_safety_point1_desc: "All equipment is sterilized before and after visits. Staff utilize fresh personal protective gear (PPE).",
    contact_safety_point2_title: "Licensed Professionals",
    contact_safety_point2_desc: "Every nurse, therapist, and physician holds active licensing from the Saudi Commission for Health Specialties.",
    contact_safety_point3_title: "Patient Confidentiality",
    contact_safety_point3_desc: "Your personal and health information is protected in compliance with Saudi national healthcare standards.",
    contact_title: "We are ready to assist you anytime",
    contact_subtitle: "Have a question or want to request a callback? Complete the form below and our coordinators will reach out same-day.",
    contact_form_title: "Request a Call Back",
    contact_details_title: "Direct Contact",
    contact_landline_lbl: "Landline",
    contact_landline_val: "+966 12 670 0523",
    contact_hours_title: "Working Hours",
    contact_hours_desc: "Saturday to Thursday, 9:00 AM - 6:00 PM",
    contact_address_card_title: "Address",
    addr_street_lbl: "Street Address",
    addr_street_val: "6778 King Fahad Branch Rd, Ash Sharafiyah District",
    addr_postal_lbl: "Postal Code",
    addr_postal_val: "22316",
    addr_city_lbl: "City & Country",
    addr_city_val: "Jeddah, Kingdom of Saudi Arabia",
    form_name_lbl: "Full Name *",
    form_name_placeholder: "e.g., Abdullah Al-Otaibi",
    form_phone_lbl: "Phone Number (Saudi Arabia) *",
    form_phone_placeholder: "e.g., +966 5X XXX XXXX",
    form_service_lbl: "Select Service *",
    form_service_placeholder: "Choose a service",
    form_gender_lbl: "Provider Gender Preference",
    form_gender_opt_none: "No Preference",
    form_gender_opt_female: "Female Practitioner",
    form_gender_opt_male: "Male Practitioner",
    form_city_lbl: "City *",
    form_city_placeholder: "Select your city",
    form_msg_lbl: "Your Message",
    form_msg_placeholder: "Enter any additional details or requirements...",
    form_date_lbl: "Preferred Date",
    form_submit_contact: "Submit & Send to WhatsApp",

    // Blogs page content
    blogs_title: "Health Insights & Guides",
    blogs_desc: "Practical advice and resources from our medical experts.",
    read_time: "min read",
    category_guide: "Guide",
    category_tips: "Health Tips",
    category_elderly: "Elderly Care",
    category_recovery: "Recovery",
    blog_1_title: "When to Consider Home Physiotherapy vs. a Clinic Visit",
    blog_1_excerpt: "Discover the core benefits of receiving rehabilitation sessions in your own home instead of commuting...",
    blog_2_title: "How Home Lab Testing Works — What to Expect",
    blog_2_excerpt: "Learn about the hygienic sample collection protocols and how secure digital reports reach you...",
    blog_3_title: "Caring for Elderly Parents at Home: A Family's Guide",
    blog_3_excerpt: "A comprehensive guide on adjustments, physical safety setups, and home caregiver assistance...",
    
    // FAQ
    faq_eyebrow: "Got Questions?",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Are your healthcare practitioners licensed?",
    faq_a1: "Yes. All doctors, nurses, and therapists on our team are licensed by the Saudi Commission for Health Specialties (SCFHS) and undergo strict background and credential verification.",
    faq_q2: "What areas of Jeddah do you serve?",
    faq_a2: "We cover all major districts across Jeddah. Tell us your location during booking to confirm prompt provider availability.",
    faq_q3: "Can I request a male or female provider?",
    faq_a3: "Absolutely. You can select your gender preference during booking, and we will match your request accordingly.",
    faq_q4: "How do I make a payment? Do you accept insurance?",
    faq_a4: "We support Bupa and Tawuniya insurance for direct billing. We also accept Mada cards, credit cards, and cash.",
    faq_q5: "How far in advance do I need to book?",
    faq_a5: "For scheduled services, 24 hours is ideal. However, same-day bookings are available depending on practitioner availability.",
    faq_q6: "Can I book a service for a family member?",
    faq_a6: "Yes, many of our clients book checkups, lab work, or caregivers for their parents and children.",
    faq_q7: "What is your rescheduling or cancellation policy?",
    faq_a7: "You can reschedule or cancel visits without penalty up to 4 hours before the scheduled arrival time.",
    faq_q8: "What should I prepare before a home lab test?",
    faq_a8: "Some blood tests require fasting. Our coordinators will guide you on specific preparation instructions upon booking confirmation.",

    // General messages
    modal_title: "Book a Home Visit",
    modal_desc: "Fill in the form to notify our medical coordinator and start your booking process.",
    form_submit: "Confirm Booking",
    success_title: "Request Received",
    success_desc: "Thank you, <strong>{name}</strong>.<br>We have registered your request for <strong>{service}</strong>.<br><br>Redirecting you to WhatsApp to complete your schedule details...",
    
    Riyadh: "Jeddah (Central Branch)",
    Jeddah: "Jeddah",
    Dammam: "Jeddah (North Branch)",
    
    // Missing Footer and CTA keys
    footer_phone_lbl: "Phone Support",
    footer_email_lbl: "Email Support",
    footer_blurb: "Providing families with certified and compassionate home healthcare services directly at your doorstep. Your health, safety, and recovery are our primary goals.",
    footer_title_services: "Our Services",
    footer_title_company: "Company",
    footer_title_contact: "Contact Us",
    footer_copyright: "Copyright © 2026 MCE Care. All rights reserved. Serving Jeddah.",
    footer_address: "Building 6778, King Fahad Branch Rd, Ash Sharafiyah Dist., Jeddah 22316 - 3327, Kingdom of Saudi Arabia",
    cta_title: "Ready to bring care home?",
    cta_desc: "Schedule your same-day home appointment with Jeddah's most trusted home healthcare network.",
    wa_chat_btn: "Chat with us",
    wa_online_status: "Typically replies in minutes",
    wa_welcome_msg: "Hello! How can we help you today with your home healthcare booking?",
    wa_start_chat: "Start Chat on WhatsApp",
    
    // Accreditations
    accreditation_eyebrow: "Official Licensing & Strategic Partners",
    accreditation_title: "Accredited & Recognized by Saudi Authorities",
    accreditation_desc: "MCE Care operates under strict compliance with Saudi health regulations, commercial standards, and business governance.",
    logo_moh_title: "Ministry of Health",
    badge_moh: "Licensed Care Provider",
    logo_monshaat_title: "Monsha'at",
    badge_monshaat: "Verified Enterprise",
    logo_sbc_title: "Saudi Business Center",
    badge_sbc: "Certified Business",
    footer_iso_title: "ISO Certified Standards:"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_contact: "اتصل بنا",
    nav_blogs: "المدونة والأسئلة الشائعة",
    btn_book: "احجز زيارة منزلية",
    btn_call: "اتصل بنا",
    
    // Homepage content
    hero_eyebrow: "نخدم الآن العائلات في جدة",
    hero_title: "العيادة، عند <em>بابك</em>.",
    hero_subhead: "تقدم الرعاية الطبية خدمات التمريض المنزلي المهني، والعلاج الطبيعي المعتمد، الفحوصات المخبرية المنزلية، استشارات الأطباء، ومرافق الرعاية مباشرة في منزلك — في أي مكان في جدة. احجز موعدك اليوم.",
    hero_stat_services_num: "٤",
    hero_stat_services_lbl: "خدمات أساسية",
    hero_stat_arrival_num: "أقل من ٦٠ دقيقة",
    hero_stat_arrival_lbl: "وقت الاستجابة",
    hero_stat_cities_num: "جدة",
    hero_stat_cities_lbl: "منطقة التغطية",
    
    tracking_title: "تتبع الزيارة المباشر",
    tracking_city: "جدة (حي الصفا)",
    tracking_status: "حالة الزيارة: في الطريق",
    tracking_desc: "الدكتورة ليلى (أخصائية العلاج الطبيعي) تصل خلال ١٢ دقيقة تقريباً.",
    
    trust_1: "جميع مقدمي الخدمة محترفون، رحماء، ذوو خبرة عالية، ومترخصون بالكامل.",
    trust_2: "تتوفر زيارات في نفس اليوم وزيارات مجدولة",
    trust_3: "مقدمو الخدمة من الذكور والإناث، حسب اختيارك",
    trust_4: "تقارير رقمية تُرسل مباشرة إلى هاتفك",
    trust_5: "يتم الالتزام ببروتوكولات النظافة الطبية الصارمة والوقاية من العدوى في جميع الأوقات.",
    
    services_eyebrow: "ما نقدمه",
    services_title: "أربع طرق نجلب بها الرعاية إلى منزلك.",
    service_1_title: "العلاج الطبيعي بالمنزل",
    service_1_desc: "احصل على برامج إعادة تأهيل مخصصة تشمل التعافي بعد الجراحة، وتخفيف الآلام المزمنة، والمساعدة في الحركة، يتم تقديمها بخصوصية بواسطة معالجين معتمدين.",
    service_1_badge: "جلسات من ٤٥-٦٠ دقيقة",
    service_2_title: "التحاليل المخبرية المنزلية",
    service_2_desc: "تجنب زيارة العيادات مع أخصائيي سحب الدم المعتمدين لدينا الذين يأتون إليك. نقوم بسحب العينات بطريقة صحية ونرسل نتائج تحاليلك الرقمية لهاتفك في غضون ٢٤ ساعة.",
    service_2_badge: "النتائج خلال ٢٤ ساعة",
    service_3_title: "الاستشارة الطبية المنزلية",
    service_3_desc: "جدول موعداً مع الأطباء العامين لإجراء فحوصات منزلية، تشخيصات، تجديد الوصفات الطبية، ومتابعة المريض بدقة دون عناء الانتقال للعيادات.",
    service_3_badge: "أطباء عامون وأخصائيون",
    service_4_title: "التمريض والرعاية المنزلية",
    service_4_desc: "ممرضون ومرافقون مرخصون ومؤهلون لمساعدة كبار السن، الرعاية الطبية المنزلية كالحقن والعناية بالجروح، الرعاية بعد العمليات، والمساعدة البدنية. متوفر بخيارات مرنة بالساعة أو الإقامة الكاملة 24/7.",
    service_4_badge: "ممرضون ومرافقون مرخصون",
    services_guarantee_1: "جميع مقدمي الخدمة محترفون، رحماء، ذوو خبرة عالية، ومترخصون بالكامل.",
    services_guarantee_2: "يتم الالتزام ببروتوكولات النظافة الطبية الصارمة والوقاية من العدوى في جميع الأوقات. مباشرة عند عتبة بابك.",
    price_from: "تبدأ من ٩٩ ر.س",
    price_caregiver: "تبدأ من ١٥٠ ر.س",
    price_physio: "تبدأ من ٢٠٠ ر.س",
    price_consultation: "تبدأ من ٢٠٠ ر.س",
    price_lab: "تبدأ من ٩٩ ر.س",
    
    how_eyebrow: "آلية العمل",
    how_title: "من مكالمة هاتفية إلى رعاية عند بابك.",
    how_step1_title: "اختر الخدمة",
    how_step1_desc: "اختر من بين العلاج الطبيعي، أو التحاليل المخبرية المنزلية، أو استشارات الأطباء، أو رعاية المرافق المنزلي.",
    how_step2_title: "حدد الوقت",
    how_step2_desc: "اختر التاريخ والوقت المناسبين لك، وحدد رغبتك في تفضيل جنس مقدم الخدمة (ذكر أو أنثى).",
    how_step3_title: "يصل مقدم الخدمة",
    how_step3_desc: "يصل ممارس الرعاية الصحية المرخص لدينا إلى باب بيتك حاملاً معه جميع المعدات الطبية اللازمة.",
    how_step4_title: "ملخص الرعاية",
    how_step4_desc: "اطلع على التقارير الطبية الرقمية، ملاحظات العلاج، والوصفات الطبية مباشرة على هاتفك المحمول.",
    
    why_eyebrow: "تثق بنا العائلات",
    why_title: "كيف تبدو الرعاية وهي تأتي إليك.",
    why_quote1: '\"إن توفير أخصائي علاج طبيعي مرخص يأتي لبيتنا في جدة وفر على والدي ساعات من السفر المتعب بالسيارة لإعادة التأهيل بعد السكتة الدماغية. الجلسات كانت لطيفة ومريحة وفعالة للغاية.\"',
    why_quote2: '\"طلبت إجراء تحليل دم شامل لوالدتي الطاعنة في السن. وصل أخصائي سحب الدم في الموعد وأتم التحاليل بنظافة تامة. تسلمت تقارير التحاليل الرقمية مباشرة على هاتفي في أقل من ٢٤ ساعة.\"',
    why_quote3: '\"إن معرفة أن لجدتي مرافقة رعاية مقيمة ودودة ومحترفة في جدة تمنح عائلتنا بأكملها راحة البال. مستوى الرعاية والاحترام والتواصل رائع حقاً.\"',
    why_team_caption: "فريق الرعاية المرخص لدينا",
    why_high_1_title: "معتمدون من هيئة التخصصات الصحية",
    why_high_1_desc: "جميع الكوادر الطبية مسجلون ومرخصون من الهيئة السعودية للتخصصات الصحية.",
    why_high_2_title: "فحص كامل للمؤهلات والسيرة",
    why_high_2_desc: "نتحقق بدقة من الخلفية المهنية لضمان التميز الطبي والأمان التام لعائلتك.",
    why_high_3_title: "تواصل ثنائي اللغة",
    why_high_3_desc: "تواصل واضح ومباشر باللغتين العربية والإنجليزية لراحة تامة أثناء تقديم الرعاية.",
    
    // About Us content
    about_eyebrow: "قصتنا",
    about_title: "رعاية صحية رحيمة عند باب بيتك في جدة",
    about_mission_title: "رسالتنا",
    about_mission_desc: "تأسست الرعاية الطبية لتقديم خدمات طبية احترافية وعالية الجودة وموثوقة مباشرة للأسر السعودية في جدة. نحن متخصصون في إعادة التأهيل بعد الجراحة، وتخفيف الآلام المزمنة، ودعم كبار السن، وزيارات الأطباء المنزلية، مما يزيل عبء السفر إلى العيادات.",
    about_values_title: "قيمنا الأساسية",
    value_dignity_title: "الكرامة والرعاية",
    value_dignity_desc: "نعامل كل مريض كفرد من عائلتنا، ونعطي الأولوية للراحة والسلامة النفسية.",
    value_punctuality_title: "الالتزام بالمواعيد",
    value_punctuality_desc: "الوقت أمر بالغ الأهمية في الرعاية الصحية؛ يصل ممارسونا في الموعد المحدد.",
    value_safety_title: "سلامة المرضى",
    value_safety_desc: "بروتوكولات طبية صارمة وممارسو رعاية صحية مرخصون ومفحوصو السيرة.",
    about_safety_eyebrow: "سلامة المرضى أولاً",
    about_safety_title: "بروتوكولات السلامة السريرية لدينا",
    about_safety_desc: "نحن نطبق بروتوكولات رعاية صحية صارمة لحمايتك وحماية أحبائك خلال كل زيارة منزلية. من التعقيم إلى المراقبة المستمرة، السلامة هي أولويتنا القصوى.",
    about_safety_pt1: "حقائب ومعدات طبية معقمة بنسبة ١٠٠٪ لكل جلسة علاجية.",
    about_safety_pt2: "إشراف طبي مستمر من قبل أطباء عامين وأخصائيين استشاريين.",
    about_safety_pt3: "فحص كامل للسيرة الذاتية، الهوية، والتراخيص الطبية لجميع الكوادر.",
    about_coverage_title: "مناطق التغطية في جدة",
    about_coverage_desc: "نخدم حاليًا العائلات في جميع الأحياء الرئيسية بجدة، بما في ذلك الشرفية، الحمراء، الصفا، النعيم، الروضة، والبلد.",

    // Services page content
    services_page_title: "خدمات الرعاية الصحية المنزلية المتخصصة لدينا",
    services_page_desc: "رعاية طبية احترافية تُقدم بأمان وراحة وخصوصية في منزلك.",
    service_1_details: "يقدم أخصائيو العلاج الطبيعي المرخصون لدينا خطط تعافي مخصصة بعد الجراحة، ومساعدة كبار السن على الحركة، وإعادة التأهيل بعد السكتة الدماغية، وإدارة الآلام المزمنة. كل جلسة مصممة خصيصاً لمساعدتك على استعادة الحركة بسرعة دون مغادرة المنزل.",
    service_2_details: "تجنب طوابير المختبرات المزدحمة. يقوم أخصائيو سحب الدم المعتمدون لدينا بجمع عينات الدم بطريقة صحية تناسبك. ونرسل تقارير تحاليلك الرقمية الآمنة مباشرة لهاتفك في غضون ٢٤ ساعة.",
    service_3_details: "اطلب زيارة طبيب عام ذي خبرة لمنزلك لإجراء فحوصات تشخيصية، تجديد الوصفات الطبية، متابعة الحالات المزمنة، والفحوصات العائلية دون عناء الذهاب للعيادة.",
    service_4_details: "نوفر ممرضين وممرضات مرخصين سريريًا ومرافقي رعاية لتلبية جميع احتياجات التمريض المنزلي (غيار الجروح، إعطاء الحقن والمحاليل، ورعاية كبار السن) بالإضافة للمساعدة اليومية. متوفر بالساعة أو اليوم أو رعاية مقيمة.",
    insurance_title: "التأمين والفواتير المباشرة",
    insurance_desc: "نقبل الدفع والتنسيق مع كبرى شركات التأمين بما في ذلك بوبا والتعاونية. كما ندعم الدفع النقدي، البطاقات الائتمانية، ومدى لتسهيل الفواتير المباشرة.",

    // Contact page content
    contact_eyebrow: "اتصل بنا",
    contact_safety_title: "التزامنا بالسلامة والجودة",
    contact_safety_desc: "في MCE Care، سلامة المرضى هي أولويتنا القصوى. نتبع إرشادات سريرية صارمة لتقديم الرعاية الطبية المنزلية بأمان.",
    contact_safety_point1_title: "تعقيم صارم ومستمر",
    contact_safety_point1_desc: "يتم تعقيم جميع الأدوات والأجهزة قبل وبعد الزيارة. يستخدم الطاقم مستلزمات وقاية شخصية جديدة تماماً.",
    contact_safety_point2_title: "كوادر مرخصة رسمياً",
    contact_safety_point2_desc: "يحمل كل ممرض، أخصائي، وطبيب ترخيصاً سارياً من الهيئة السعودية للتخصصات الصحية.",
    contact_safety_point3_title: "سرية تامة لبيانات المرضى",
    contact_safety_point3_desc: "معلوماتك الشخصية والطبية محمية بالكامل بما يتماشى مع الأنظمة والمعايير الصحية الوطنية.",
    contact_title: "نحن مستعدون لمساعدتك في أي وقت",
    contact_subtitle: "لديك سؤال أو ترغب في طلب معاودة الاتصال بك؟ أكمل النموذج أدناه وسيتواصل معك منسقونا في نفس اليوم.",
    contact_form_title: "طلب معاودة الاتصال",
    contact_details_title: "الاتصال المباشر",
    contact_landline_lbl: "الهاتف الثابت",
    contact_landline_val: "+966 12 670 0523",
    contact_hours_title: "ساعات العمل",
    contact_hours_desc: "من السبت إلى الخميس، من 9:00 صباحاً حتى 6:00 مساءً",
    contact_address_card_title: "العنوان",
    addr_street_lbl: "العنوان",
    addr_street_val: "طريق الملك فهد فرعي، حي الشرفية، مبنى 6778",
    addr_postal_lbl: "الرمز البريدي",
    addr_postal_val: "22316",
    addr_city_lbl: "المدينة",
    addr_city_val: "جدة، المملكة العربية السعودية",
    form_name_lbl: "الاسم الكامل *",
    form_name_placeholder: "مثال: عبد الله العتيبي",
    form_phone_lbl: "رقم الجوال (المملكة العربية السعودية) *",
    form_phone_placeholder: "مثال: +966 5X XXX XXXX",
    form_service_lbl: "اختر الخدمة *",
    form_service_placeholder: "اختر خدمة من القائمة",
    form_gender_lbl: "تفضيل جنس مقدم الخدمة",
    form_gender_opt_none: "لا تفضيل",
    form_gender_opt_female: "أخصائية (أنثى)",
    form_gender_opt_male: "أخصائي (ذكر)",
    form_city_lbl: "المدينة *",
    form_city_placeholder: "اختر المدينة",
    form_msg_lbl: "رسالتك",
    form_msg_placeholder: "أدخل أي تفاصيل أو متطلبات إضافية...",
    form_date_lbl: "التاريخ المفضل",
    form_submit_contact: "إرسال والتحويل إلى واتساب",

    // Blogs page content
    blogs_title: "إرشادات ومعلومات صحية",
    blogs_desc: "نصائح وإرشادات عملية من خبرائنا الطبيين.",
    read_time: "دقائق قراءة",
    category_guide: "دليل",
    category_tips: "نصائح صحية",
    category_elderly: "رعاية كبار السن",
    category_recovery: "التعافي",
    blog_1_title: "متى يجب التفكير في العلاج الطبيعي المنزلي مقابل زيارة العيادة",
    blog_1_excerpt: "اكتشف الفوائد الأساسية لتلقي جلسات إعادة التأهيل في منزلك بدلاً من الانتقال...",
    blog_2_title: "كيف تعمل التحاليل المخبرية المنزلية — ماذا تتوقع",
    blog_2_excerpt: "تعرف على بروتوكولات جمع العينات الصحية وكيف تصلك تقارير التحاليل الرقمية...",
    blog_3_title: "رعاية الوالدين المسنين في المنزل: دليل الأسرة السعودية",
    blog_3_excerpt: "دليل شامل عن التعديلات المنزلية، إعدادات السلامة البدنية، ومساعدة مرافق الرعاية...",

    // FAQ
    faq_eyebrow: "لديك استفسار؟",
    faq_title: "الأسئلة الشائعة",
    faq_q1: "هل مقدمو الخدمة لديكم مرخصون؟",
    faq_a1: "نعم. جميع الأطباء والممرضين والمعالجين في فريقنا مرخصون من الهيئات الصحية السعودية ذات الصلة ومفحوصو السيرة والخبرة قبل انضمامهم إلينا.",
    faq_q2: "ما هي المناطق التي تغطونها في جدة؟",
    faq_a2: "نغطي جميع الأحياء والمناطق الرئيسية بمدينة جدة. أخبرنا بمنطقتك عند الحجز وسنؤكد لك توفر الخدمة فوراً.",
    faq_q3: "هل يمكنني اختيار مقدم خدمة ذكر أو أنثى؟",
    faq_a3: "نعم — يمكنك تحديد تفضيل جنس مقدم الخدمة (ذكر أو أنثى) عند الحجز، وسنقوم بمطابقة طلبك قدر الإمكان.",
    faq_q4: "كيف يتم حساب الأسعار؟ وهل تقبلون التأمين؟",
    faq_a4: "نقبل تأمين بوبا والتعاونية للفواتير المباشرة. كما ندعم الدفع عبر مدى، البطاقات الائتمانية، أو الدفع نقداً.",
    faq_q5: "كم من الوقت مسبقاً يجب علي الحجز؟",
    faq_a5: "يفضل الحجز قبل ٢٤ ساعة، ولكن تتوفر حوزات في نفس اليوم وفقاً لتوفر مقدمي الرعاية والجدول الزمني.",
    faq_q6: "هل يمكنني الحجز لأحد أفراد العائلة؟",
    faq_a6: "نعم بكل تأكيد. يمكنك الحجز لوالديك أو أطفالك وتقديم تفاصيل الاتصال والموقع الخاصة بهم.",
    faq_q7: "ما هي سياسة الإلغاء أو إعادة الجدولة؟",
    faq_a7: "يمكنك إلغاء أو إعادة جدولة الموعد دون رسوم إضافية حتى ٤ ساعات قبل موعد وصول الممارس الطبي.",
    faq_q8: "ماذا يجب علي تحضيره قبل إجراء تحليل الدم المنزلي؟",
    faq_a8: "تتطلب بعض التحاليل الصيام لعدة ساعات. سيزودك منسق المواعيد بالتعليمات الكاملة قبل الزيارة.",

    // General messages
    modal_title: "طلب زيارة منزلية",
    modal_desc: "يرجى تعبئة نموذج الطلب السريع أدناه. سيتصل بك منسق المواعيد لتأكيد التفاصيل.",
    form_submit: "تأكيد الطلب",
    success_title: "تم استلام الطلب",
    success_desc: "شكراً لك يا <strong>{name}</strong>.<br>لقد سجلنا طلبك لـ <strong>{service}</strong>.<br><br>جاري تحويلك الآن لتأكيد تفاصيل الموعد عبر واتساب...",
    
    Riyadh: "جدة (الفرع الرئيسي)",
    Jeddah: "جدة",
    Dammam: "جدة (الفرع الشمالي)",
    
    // Missing Footer and CTA keys
    footer_phone_lbl: "الدعم الهاتفي",
    footer_email_lbl: "الدعم عبر البريد الإلكتروني",
    footer_blurb: "تقديم خدمات رعاية صحية منزلية معتمدة ورحيمة للعائلات مباشرة عند عتبة بابهم. إن سلامتك واختيارك وتماثلك للشفاء هي أهدافنا الأساسية.",
    footer_title_services: "خدماتنا",
    footer_title_company: "الشركة",
    footer_title_contact: "اتصل بنا",
    footer_copyright: "حقوق الطبع والنشر © ٢٠٢٦ MCE Care. جميع الحقوق محفوظة. نخدم جدة.",
    footer_address: "طريق الملك فهد فرعي، حي الشرفية، مبنى 6778، جدة 22316 - 3327، المملكة العربية السعودية",
    cta_title: "هل أنت مستعد لجلب الرعاية إلى منزلك؟",
    cta_desc: "قم بجدولة موعدك المنزلي في نفس اليوم مع شبكة الرعاية الصحية المنزلية الأكثر ثقة في جدة.",
    wa_chat_btn: "راسلنا الآن",
    wa_online_status: "نشط حالياً - الرد خلال دقائق",
    wa_welcome_msg: "مرحباً! كيف يمكننا مساعدتك اليوم في حجز خدمات الرعاية الصحية المنزلية؟",
    wa_start_chat: "بدء المحادثة على واتساب",

    // Accreditations
    accreditation_eyebrow: "التراخيص الرسمية والشركاء المعتمدون",
    accreditation_title: "معتمدون ومسجلون لدى الجهات الحكومية بالمملكة",
    accreditation_desc: "تعمل الرعاية الطبية وفق أعلى معايير الامتثال والاشتراطات المعتمدة من الجهات الصحية والتجارية بالمملكة العربية السعودية.",
    logo_moh_title: "وزارة الصحة",
    badge_moh: "منشأة صحية مرخصة",
    logo_monshaat_title: "منشآت",
    badge_monshaat: "منشأة معتمدة",
    logo_sbc_title: "المركز السعودي للأعمال",
    badge_sbc: "توثيق الأعمال الرسمي",
    footer_iso_title: "معايير الجودة الأيزو المعتمدة:"
  }
};

// --- INITIALIZE & TRANSLATE ---
document.addEventListener('DOMContentLoaded', () => {
  // --- PRELOADER LOGIC (ONCE PER SESSION) ---
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const isPreloaded = sessionStorage.getItem('site-preloaded');
    if (isPreloaded) {
      preloader.style.display = 'none';
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('fade-out');
          sessionStorage.setItem('site-preloaded', 'true');
        }, 1000);
      });
      // Fallback: hide preloader after 3 seconds
      setTimeout(() => {
        preloader.classList.add('fade-out');
        sessionStorage.setItem('site-preloaded', 'true');
      }, 3000);
    }
  }

  const htmlEl = document.documentElement;
  const btnEn = document.getElementById('lang-btn-en');
  const btnAr = document.getElementById('lang-btn-ar');

  const applyTranslations = (lang) => {
    // Set lang and dir attributes
    htmlEl.setAttribute('data-lang', lang);
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('preferred-lang', lang);

    // Translate attributes and text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else if (el.tagName === 'OPTION') {
          el.textContent = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Translate nodes with internal HTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Switch active indicator class for buttons
    if (btnAr && btnEn) {
      if (lang === 'ar') {
        btnAr.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnAr.classList.remove('active');
      }
    }
    
    // Add loaded class to body to prevent text flash
    htmlEl.classList.add('translations-loaded');

    // Refresh dynamic form price previews for current language
    const serviceSelects = document.querySelectorAll('select[name="service"]');
    serviceSelects.forEach(select => {
      if (typeof window.updateFormPriceDisplay === 'function') {
        window.updateFormPriceDisplay(select);
      }
    });
  };

  // Check stored language
  const savedLang = localStorage.getItem('preferred-lang') || 'ar';
  applyTranslations(savedLang);

  if (btnEn) btnEn.addEventListener('click', () => applyTranslations('en'));
  if (btnAr) btnAr.addEventListener('click', () => applyTranslations('ar'));

  // --- HIGHLIGHT ACTIVE NAV LINK ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath && currentPath.includes(linkPath)) {
      link.style.color = "var(--gold)";
    }
  });

  // --- MOBILE NAVIGATION BAR LOGIC ---
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navCloseBtn = document.getElementById('nav-close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  if (navToggleBtn && mobileMenu) {
    const openMobileMenu = () => {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      navToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
      mobileMenu.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
      navToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    navToggleBtn.addEventListener('click', openMobileMenu);
    if (navCloseBtn) navCloseBtn.addEventListener('click', closeMobileMenu);
    mobileNavItems.forEach(item => item.addEventListener('click', closeMobileMenu));
  }

  // --- GLOBAL WHATSAPP REDIRECT FOR BOOK NOW ---
  const serviceMessageMap = {
    en: {
      Physiotherapy: "Hi, I want to book this service: Physiotherapy",
      "Home Lab Tests": "Hi, I want to book this service: Home Lab Tests",
      "Home Consultation": "Hi, I want to book this service: Home Consultation",
      "Home Caregiver": "Hi, I want to book this service: Home Nursing & Caregiver",
      generic: "Hi, I'd like to know more about your services."
    },
    ar: {
      Physiotherapy: "مرحبًا، أريد حجز هذه الخدمة: العلاج الطبيعي",
      "Home Lab Tests": "مرحبًا، أريد حجز هذه الخدمة: الفحوصات المخبرية المنزلية",
      "Home Consultation": "مرحبًا، أريد حجز هذه الخدمة: الاستشارة الطبية المنزلية",
      "Home Caregiver": "مرحبًا، أريد حجز هذه الخدمة: التمريض والرعاية المنزلية",
      generic: "مرحبًا، أرغب في معرفة المزيد عن خدماتكم."
    }
  };

  const getWhatsAppLink = (serviceKey) => {
    const activeLang = htmlEl.getAttribute('data-lang') || 'ar';
    const textMap = serviceMessageMap[activeLang] || serviceMessageMap['ar'];
    const text = textMap[serviceKey] || textMap['generic'];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Wire up WhatsApp redirection logic to all buttons with data-whatsapp-service
  document.querySelectorAll('[data-whatsapp-service]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-whatsapp-service');
      window.open(getWhatsAppLink(service), '_blank');
    });
  });

  // Generic Floating buttons and Footer buttons
  const phoneCallLinks = document.querySelectorAll('[href="tel:PHONE_PLACEHOLDER"]');
  phoneCallLinks.forEach(link => {
    link.setAttribute('href', `tel:${PHONE_NUMBER}`);
  });

  // --- DYNAMIC FORM SERVICE PRICING LOGIC ---
  const servicePriceMap = {
    'Home Caregiver': { en: 'From 150 SAR', ar: 'تبدأ من ١٥٠ ر.س' },
    'Physiotherapy': { en: 'From 200 SAR (1 hr)', ar: 'تبدأ من ٢٠٠ ر.س (ساعة واحدة)' },
    'Home Lab Tests': { en: 'From 99 SAR', ar: 'تبدأ من ٩٩ ر.س' },
    'Home Consultation': { en: 'From 200 SAR', ar: 'تبدأ من ٢٠٠ ر.س' }
  };

  window.updateFormPriceDisplay = function(selectElem) {
    if (!selectElem) return;
    const formGroup = selectElem.closest('.form-group') || selectElem.parentElement;
    let badgeElem = formGroup.querySelector('.form-price-badge-preview');
    const selectedVal = selectElem.value;
    const currentLang = document.documentElement.getAttribute('lang') || 'ar';

    if (selectedVal && servicePriceMap[selectedVal]) {
      const priceText = servicePriceMap[selectedVal][currentLang] || servicePriceMap[selectedVal]['en'];
      if (!badgeElem) {
        badgeElem = document.createElement('div');
        badgeElem.className = 'form-price-badge-preview';
        formGroup.appendChild(badgeElem);
      }
      badgeElem.innerHTML = `<span class="price-icon">🏷️</span> <span class="price-label">${currentLang === 'ar' ? 'السعر التقديري:' : 'Estimated Price:'}</span> <strong class="price-val">${priceText}</strong>`;
      badgeElem.classList.add('visible');
    } else if (badgeElem) {
      badgeElem.classList.remove('visible');
    }
  };

  const serviceSelects = document.querySelectorAll('select[name="service"]');
  serviceSelects.forEach(select => {
    select.addEventListener('change', () => window.updateFormPriceDisplay(select));
  });

  // --- BOOKING MODAL LOGIC (GLOBAL TRIGGER) ---
  const modalOverlay = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');
  const bookingForm = document.getElementById('booking-form');
  const modalFormContent = document.getElementById('modal-form-content');
  const modalSuccessContent = document.getElementById('modal-success-content');
  const successDescRender = document.getElementById('success-desc-render');
  
  let lastFocusedElement = null;

  if (modalOverlay) {
    const openModal = (e) => {
      lastFocusedElement = document.activeElement;
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      
      if (bookingForm) bookingForm.reset();
      if (modalFormContent) modalFormContent.style.display = 'block';
      if (modalSuccessContent) modalSuccessContent.style.display = 'none';

      const bookingServiceSelect = document.getElementById('booking-service');
      if (e && e.currentTarget) {
        const preselectedService = e.currentTarget.getAttribute('data-whatsapp-service');
        if (preselectedService && bookingServiceSelect) {
          bookingServiceSelect.value = preselectedService;
        }
      }

      if (bookingServiceSelect) {
        window.updateFormPriceDisplay(bookingServiceSelect);
      }

      const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
      const firstFocusable = focusableElements[0];
      if (firstFocusable) firstFocusable.focus();
    };

    const closeModal = () => {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement) lastFocusedElement.focus();
    };

    openModalButtons.forEach(btn => btn.addEventListener('click', openModal));
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // Keyboard support for Modal (Escape & Tab trap)
    document.addEventListener('keydown', (e) => {
      if (!modalOverlay.classList.contains('active')) return;

      if (e.key === 'Escape') closeModal();

      if (e.key === 'Tab') {
        const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  // --- FORM SUBMISSION W/ REAL ENDPOINT (WEB3FORMS) + WHATSAPP REDIRECT ---
  const handleBookingFormSubmit = (form, isModal = false) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]') || document.getElementById('booking-name');
      const phoneInput = form.querySelector('[name="phone"]') || document.getElementById('booking-phone');
      const serviceSelect = form.querySelector('[name="service"]') || document.getElementById('booking-service');
      const citySelect = form.querySelector('[name="city"]') || document.getElementById('booking-city');
      const msgInput = form.querySelector('[name="message"]') || document.getElementById('booking-message');
      const dateInput = form.querySelector('[name="preferred_date"]') || document.getElementById('booking-date');

      let isValid = true;
      const validateField = (element) => {
        if (!element) return;
        if (!element.value.trim()) {
          element.style.borderColor = 'var(--rose)';
          isValid = false;
        } else {
          element.style.borderColor = 'rgba(18, 48, 47, 0.15)';
        }
      };

      validateField(nameInput);
      validateField(phoneInput);
      validateField(serviceSelect);
      validateField(citySelect);

      if (!isValid) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      // Construct payload for Web3Forms
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", `New Home Care Booking Request - ${serviceSelect.value}`);

      // Perform AJAX submission
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Construct WhatsApp Deep Link Message
        const activeLang = htmlEl.getAttribute('data-lang') || 'ar';
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const cityText = citySelect.options[citySelect.selectedIndex].text;
        
        let whatsAppMsg = "";
        if (activeLang === 'ar') {
          whatsAppMsg = `طلب حجز جديد من الموقع:\n\nالاسم: ${nameInput.value.trim()}\nرقم الجوال: ${phoneInput.value.trim()}\nالخدمة: ${serviceText}\nالمدينة: ${cityText}`;
          if (dateInput && dateInput.value) whatsAppMsg += `\nالتاريخ المفضل: ${dateInput.value}`;
          if (msgInput && msgInput.value) whatsAppMsg += `\nالرسالة: ${msgInput.value.trim()}`;
        } else {
          whatsAppMsg = `New Booking Request from Website:\n\nName: ${nameInput.value.trim()}\nPhone: ${phoneInput.value.trim()}\nService: ${serviceText}\nCity: ${cityText}`;
          if (dateInput && dateInput.value) whatsAppMsg += `\nPreferred Date: ${dateInput.value}`;
          if (msgInput && msgInput.value) whatsAppMsg += `\nMessage: ${msgInput.value.trim()}`;
        }

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsAppMsg)}`;

        if (isModal && modalSuccessContent && successDescRender) {
          const rawTemplate = translations[activeLang].success_desc;
          const finalMessage = rawTemplate
            .replace('{name}', nameInput.value.trim())
            .replace('{service}', serviceText);
          
          successDescRender.innerHTML = finalMessage;
          if (modalFormContent) modalFormContent.style.display = 'none';
          modalSuccessContent.style.display = 'flex';
          
          setTimeout(() => {
            window.location.href = waUrl;
          }, 2000);
        } else {
          window.location.href = waUrl;
        }
      })
      .catch(error => {
        console.error("Submission error:", error);
        alert(activeLang === 'ar' ? 'عذراً، حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.' : 'Sorry, something went wrong. Please try again.');
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  };

  if (bookingForm) handleBookingFormSubmit(bookingForm, true);
  
  const contactPageForm = document.getElementById('contact-form');
  if (contactPageForm) handleBookingFormSubmit(contactPageForm, false);

  // Reset borders on input
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(control => {
    control.addEventListener('input', () => {
      if (control.value.trim()) {
        control.style.borderColor = 'rgba(18, 48, 47, 0.15)';
      }
    });
  });

  // --- ACCORDION FAQ LOGIC ---
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      faqTriggers.forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) {
          p.style.maxHeight = null;
          p.setAttribute('aria-hidden', 'true');
        }
      });

      if (!isExpanded && panel) {
        trigger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // --- SCROLL INTERSECTION OBSERVER REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- HEADER SCROLL ACTION ---
  const headerEl = document.querySelector('.header');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    });
  }

  // --- REDUCED MOTION CHECK ---
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const svgElement = document.getElementById('tracking-svg');
    if (svgElement && typeof svgElement.pauseAnimations === 'function') {
      svgElement.pauseAnimations();
    }
  }

  // --- INTERACTIVE WHATSAPP WIDGET ---
  const waWidgetBtn = document.getElementById('wa-widget-btn');
  const waChatWindow = document.getElementById('wa-chat-window');
  const waChatClose = document.getElementById('wa-chat-close');

  if (waWidgetBtn && waChatWindow) {
    waWidgetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatWindow.classList.toggle('active');
    });

    if (waChatClose) {
      waChatClose.addEventListener('click', (e) => {
        e.stopPropagation();
        waChatWindow.classList.remove('active');
      });
    }

    // Close window when clicking outside
    document.addEventListener('click', (e) => {
      if (!waChatWindow.contains(e.target) && !waWidgetBtn.contains(e.target)) {
        waChatWindow.classList.remove('active');
      }
    });
  }
});

