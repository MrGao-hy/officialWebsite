---
layout: page
---

<team :teachInfo="teachInfo" title1="Teacher" title2="Current Students" title3="Graduated Students" />

<script setup>
const teachInfo = {
    name: "Peiyan Song",
    title: "Professor · Master Supervisor",
    educationTitle: "Educational Background",
    education: [
        "Sep. 2007 - Jul. 2010, Institute of Chinese Information Processing, Beijing Normal University, Natural Language Processing, PhD",
        "Sep. 2003 - Jul. 2006, Graduate School of Chinese Academy of Social Sciences, Natural Language Processing, Master",
        "Sep. 1999 - Jul. 2003, Qufu Normal University, Shandong Province, Chinese Language and Literature (Minor in Computer Science), Bachelor"
    ],
    experienceTitle: "Work Experience",
    experience: [
        "Jan. 2023 – Present, School of Management, Tianjin Normal University, Professor, Master Supervisor",
        "Jan. 2022 – Dec. 2022, School of Management, Tianjin Normal University, Associate Professor, Master Supervisor",
        "Oct. 2019 – Dec. 2021, School of Management, Tianjin Normal University, Associate Research Librarian, Master Supervisor",
        "Aug. 2015 – Oct. 2019, Technical Support Center, Institute of Scientific and Technical Information of China, Associate Research Librarian, Master Supervisor",
        "Jul. 2010 – Aug. 2015, Information Resource Center, Institute of Scientific and Technical Information of China, Assistant Researcher, Associate Research Librarian",
        "Jul. 2006 – Sep. 2007, Beijing Tianyu Zhitong Information Technology Co., Ltd., Project Manager"
    ]
}
</script>