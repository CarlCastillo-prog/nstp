const gridData = [
  {
    id: 1,
    image: '../Guide GO Pictures/studAccDiv.jpg',
    title: 'ACCOUNTING',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/Accounting.png',
    details:
      'Main building, lower ground floor.\n\nFrom the canteen, proceed forward and turn left. Located between the textbook section and cashier.\n\nIts primary function is to oversee financial records, billing processes, and student account management.',
    navigation:
      'How to get there:\n\nEnter the main building through the main entrance or Gate 4. Walk toward the canteen area on the lower ground floor. Proceed forward past the canteen and turn left. The Accounting Office is located between the Textbook Section and the Cashier — look for the signage on your left.',
  },

  {
    id: 2,
    image: '../Guide GO Pictures/cashierOffice.jpg',
    title: 'CASHIER',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/Cashier.png',
    details:
      'Main building, lower ground floor.\n\nFrom the canteen, proceed forward and turn left. Located between the cashier and clinic.\n\nIts primary function is to facilitate payment transactions, including tuition fees, miscellaneous fees, and other financial obligations.',
    navigation:
      'How to get there:\n\nEnter the main building and head to the lower ground floor canteen area. Walk straight past the canteen, then turn left. The Cashier is located along that corridor, between the Textbook Section and the University Clinic — look for the window marked "Cashier".',
  },

  {
    id: 3,
    image: '../Guide GO Pictures/collegeReg.jpg',
    title: 'COLLEGE REGISTRAR',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/College Registrar.png',
    details:
      'Main building, lower ground floor.\n\nFrom the canteen, proceed straight across the quadrangle to reach the College Registrar.\n\nIts primary function is to manage and maintain student records, including enrollment, academic transcripts, and other official academic document specifically for college students.',
    navigation:
      'How to get there:\n\nFrom the main entrance, walk toward the central open area (quadrangle) on the lower ground floor. The College Registrar is directly across the quadrangle from the canteen. Look for the large office with "College Registrar" signage facing the courtyard.',
  },

  {
    id: 4,
    image: '../Guide GO Pictures/civilSecUnit.jpg',
    title: 'CIVIL SECURITY UNIT (CSU)',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/Civil Security.png',
    details:
      'Main building, lower ground floor.\n\nLocated near Gate 4. It is immediately visible upon entering and is situated beside the entrance. Its front directly faces the quadrangle.',
    navigation:
      'How to get there:\n\nUse Gate 4 for the most convenient access. The CSU is immediately visible right beside the entrance as you walk in. Its front desk directly faces the quadrangle, so you cannot miss it upon entering through Gate 4.',
  },

  {
    id: 5,
    image: '../Guide GO Pictures/textbookSec.jpg',
    title: 'TEXTBOOK SECTION',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/Textbook.png',
    details:
      'Main building, lower ground floor.\n\nLocated on the right side of the Accounting Office.\n\nIt serves as the designated area for the purchase of required textbooks.',
    navigation:
      'How to get there:\n\nHead to the lower ground floor near the canteen. Walk past the canteen and turn left. The Textbook Section is on the right side of the Accounting Office — look for the book display and "Textbook Section" signage.',
  },

  {
    id: 6,
    image: '../Guide GO Pictures/senHighOffice.jpg',
    title: 'SENIOR HIGH SCHOOL REGISTRAR',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/SHS Registrar.png',
    details:
      'Main building, lower ground floor.\n\nIt can also be accessed through Gate 4 for a more convenient entry. It is between the Civil Security Unit (CSU) and the College Registrar’s.\n\nThe Senior High School Registrar is responsible for managing student records, enrollment, and academic documentation specifically for senior high school students.',
    navigation:
      'How to get there:\n\nEnter through Gate 4 for easiest access. The Senior High School Registrar is located between the Civil Security Unit (CSU) and the College Registrar on the lower ground floor. Walk past the CSU toward the quadrangle — it is the office right before you reach the College Registrar.',
  },

  {
    id: 7,
    image: '../Guide GO Pictures/eteeap.jpg',
    title: 'ETEEAP OFFICE',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/ETEEAP.png',
    details:
      'Main building, lower ground floor.\n\nIt is beside the canteen and directly across from the textbook area.\n\nThe ETEEAP Office is responsible for managing the Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP), which provides opportunities for individuals to earn a degree based on their work experience and prior learning.',
    navigation:
      'How to get there:\n\nGo to the lower ground floor canteen area. The ETEEAP Office is right beside the canteen and directly across from the Textbook Section. Look for the signage near the canteen entrance.',
  },

  {
    id: 8,
    image: '../Guide GO Pictures/edpOffice.jpg',
    title: 'EDP / IT OFFICE',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/EDP.png',
    details:
      "Main building, lower ground floor.\n\nStanding at the ground floor canteen and facing the college registrar, you will find the EDP/IT office on the left side of the quadrangle, beside the study hall.\n\nThis is where you can get your ID and It is a living, digital, or paper-based document that tracks a student's interests, skills, and career goals.",
    navigation:
      'How to get there:\n\nStand at the ground floor canteen and face the College Registrar across the quadrangle. The EDP/IT Office is on the left side of the quadrangle, right beside the study hall. Walk toward the left wing from the canteen and look for the "EDP / IT Office" signage.',
  },

  {
    id: 9,
    image: '../Guide GO Pictures/univClinic.jpg',
    title: 'UNIVERSITY CLINIC',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/Clinic.png',
    details:
      'Main building, lower ground floor.\n\nLocated beside the College Registrar and is right across the Senior High School Registrar.\n\nIts primary function is to provide basic medical services, first aid, and health assistance to students and staff.',
    navigation:
      'How to get there:\n\nOn the lower ground floor, locate the College Registrar. The University Clinic is right beside it. Alternatively, it is directly across from the Senior High School Registrar. Look for the red cross or "Clinic" signage.',
  },

  {
    id: 10,
    image: '../Guide GO Pictures/collegeGuidance.jpg',
    title: 'COLLEGE GUIDANCE SERVICES CENTER',
    floor: 'Mezzanine Floor',
    floorPlan: '../Map of Guide Go/Mezzanine Floor/CAMPUS.png',
    details:
      'Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar. At the back of the chapel, you will find the College Guidance Office.\n\nIt is responsible for providing counseling services, academic advising, and support to students in their personal and academic development.',
    navigation:
      'How to get there:\n\nUse the stairs located near the College Registrar on the ground floor. Go up one level to the Mezzanine (upper ground floor). At the top of the stairs, head toward the back of the Chapel. The College Guidance Office is located directly behind the Chapel area.',
  },

  {
    id: 11,
    image: '../Guide GO Pictures/chapel.jpg',
    title: 'CHAPEL',
    floor: 'Mezzanine Floor',
    floorPlan: '../Map of Guide Go/Mezzanine Floor/CHAPEL.png',
    details:
      'Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar.\n\nThe Chapel is a place of worship and spiritual reflection for students, faculty, and staff. It serves as a venue for religious services, ceremonies, and other spiritual activities within the university community.',
    navigation:
      'How to get there:\n\nUse the stairs near the College Registrar on the ground floor. Go up one level to the Mezzanine. The Chapel is directly at the top of those stairs — you will see the Chapel doors immediately upon reaching the upper ground floor.',
  },

  {
    id: 12,
    image: '../Guide GO Pictures/campMinistry.jpg',
    title: 'CAMPUS MINISTRY OFFICE',
    floor: 'Mezzanine Floor',
    floorPlan: '../Map of Guide Go/Mezzanine Floor/MINISTRY.png',
    details:
      'Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar, directly across from the Chapel.\n\nThe Campus Ministry Office is responsible for organizing and coordinating religious and spiritual activities on campus. It provides support and resources for students, faculty, and staff in their spiritual growth and development.',
    navigation:
      'How to get there:\n\nUse the stairs near the College Registrar to reach the Mezzanine. Once at the top, the Campus Ministry Office is directly across from the Chapel. Look for the office opposite the Chapel entrance.',
  },

  {
    id: 13,
    image: '../Guide GO Pictures/imsOffice.jpg',
    title: 'IMS OFFICE',
    floor: 'Mezzanine Floor',
    floorPlan: '../Map of Guide Go/Mezzanine Floor/IMS.png',
    details:
      'Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near Gate 2.\n\n The IMS Office is responsible for managing and maintaining the university’s information management systems, including student records, academic data, and other administrative information.',
    navigation:
      'How to get there:\n\nUse the stairs located near Gate 2. Go up one level to the Mezzanine. The IMS Office is located at the top of those stairs on the upper ground floor. Look for the "IMS Office" signage near the Gate 2 stairwell.',
  },

  {
    id: 14,
    image: '../Guide GO Pictures/mainLib.jpg',
    title: 'LIBRARY',
    floor: '3rd Floor',
    floorPlan: '../Map of Guide Go/3rd Floor/library.png',
    details:
      'Main building, 3rd floor.\n\nFrom the canteen, turn right, then take the stairs or elevator and stop at the 3rd floor. After that, turn left and go straight.\n\nThis is where you can find digital materials maintained for reading, study, or research. It is usually a room or digital space where items are available to borrow or use on-site, often with staff support. Libraries can also refer to a specific set of published materials (e.g., a “library of classics”) or a collection of computer software code.',
    navigation:
      'How to get there:\n\nFrom the ground floor canteen, turn right and take the main stairs or elevator. Go up to the 3rd floor. Upon exiting the stairs/elevator on the 3rd floor, turn left and walk straight. The Library entrance will be on your right — look for the large "Library" signage.',
  },

  {
    id: 15,
    image: '../Guide GO Pictures/deanOffice.jpg',
    title: "DEAN'S OFFICE (CCS)",
    floor: '5th Floor',
    floorPlan: '../Map of Guide Go/5th Floor/deans.png',
    details:
      'Main building, 5th floor beside room 526.\n\nThis is where you get your assessment silp and It oversees academic policies, budgets, hiring, and curriculum. Additionally, it handles student services like advising, discipline, withdrawals, and graduation',
    navigation:
      "How to get there (5th Floor):\n\nTake the main stairs or elevator from the ground floor up to the 5th floor.\n\nOn the floor plan, locate Room 526. The Dean's Office is directly beside Room 526. From the stairwell, turn right and walk straight along the main corridor. Look for Room 526 — the Dean's Office is right next to it on the same wing.",
  },

  {
    id: 16,
    image: '../Guide GO Pictures/faculty.jpg',
    title: 'FACULTY ROOM (CCS)',
    floor: '5th Floor',
    floorPlan: '../Map of Guide Go/5th Floor/faculty.png',
    details:
      "Main building, 5th floor beside Dean's Office.\n\nThe Faculty Room is a designated space for faculty members to work, collaborate, and hold meetings. It serves as a common area for professors and instructors to discuss academic matters, share resources, and engage in professional development activities.",
    navigation:
      "How to get there (5th Floor):\n\nTake the main stairs or elevator from the ground floor up to the 5th floor.\n\nOn the floor plan, first locate the Dean's Office beside Room 526. The Faculty Room is immediately next to the Dean's Office on the same wing. From the stairwell, turn right, walk past Room 526 and the Dean's Office — the Faculty Room is right beside it.",
  },

  {
    id: 17,
    image: '../Guide GO Pictures/psitsOffice.jpg',
    title: 'PSITS OFFICE',
    floor: '5th Floor',
    floorPlan: '../Map of Guide Go/5th Floor/psits.png',
    details:
      'Main building, 5th floor beside room 540.\n\nPhilippine Society of Information Technology Students (PSITS) is a student body organization supporting students enrolled in BSIT main campus. Leading the students into an efficient academic and non academic journey. ',
    navigation:
      'How to get there (5th Floor):\n\nTake the main stairs or elevator from the ground floor up to the 5th floor.\n\nOn the floor plan, locate Room 540. The PSITS Office is directly beside Room 540. From the stairwell, follow the main corridor toward the wing where Room 540 is marked — the PSITS Office is right beside that room. Look for the "PSITS" signage on the door.',
  },

  {
    id: 18,
    image: '../Guide GO Pictures/scholarshipOffice.jpg',
    title: 'SCHOLARSHIP OFFICE',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/SCHOLARSHIP.png',
    details:
      'Located inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the first window on the left side. Right after entering the building the scholarship office will be seen.\n\nQueries about the students scholarship will be entertained here.',
    navigation:
      'How to get there:\n\nGo to the Gotianuy Building, located right across from the new engineering building. Enter through the main entrance on the ground floor. The Scholarship Office is the first window on the left side — you will see it immediately right after entering the building.',
  },

  {
    id: 19,
    image: '../Guide GO Pictures/sao.jpg',
    title: 'STUDENT AFFAIR OFFICE (SAO)',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/SAO.png',
    details:
      "Located inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the second window on the left side.\n\nSupports students' non-academic needs, fostering holistic development through campus activities, student leadership training, and welfare services.",
    navigation:
      'How to get there:\n\nGo to the Gotianuy Building, located right across from the new engineering building. Enter through the main entrance on the ground floor. The Student Affairs Office is the second window on the left side, right after the Scholarship Office.',
  },

  {
    id: 20,
    image: '../Guide GO Pictures/nstpcwtsOffice.jpg',
    title: 'NSTP OFFICE',
    floor: 'Ground Floor',
    floorPlan: '../Map of Guide Go/Ground Floor/NSTP.png',
    details:
      'Located inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the last window on the left side. A big NSTP sign can be seen under its window.\n\nAll NSTP related queries will be entertained here.',
    navigation:
      'How to get there:\n\nGo to the Gotianuy Building, located right across from the new engineering building. Enter through the main entrance on the ground floor. Walk to the last window on the left side — you will see a large "NSTP" sign displayed under the window, making it easy to spot.',
  },
];
