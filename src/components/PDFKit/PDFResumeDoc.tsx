import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { Education, Experience, PersonalInfo, Project, Skills } from "@/types/ResumeDetailsTypes";

type PDFResumeDocProp = {
  personalInfo: PersonalInfo | null;
  education: Education | null;
  experience: Experience | null;
  skills: Skills | null;
  project: Project | null;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 20,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  code: {
    fontFamily: "Courier",
    fontSize: 10,
    marginBottom: 5,
  },
  link: {
    color: "blue",
    textDecoration: "none",
    fontSize: 12,
  },
});

export default function PDFResumeDoc({ personalInfo, education, experience, skills, project }: PDFResumeDocProp) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>{personalInfo?.fullName}</Text>
          <Text style={styles.text}>{personalInfo?.jobTitle}</Text>
          <Text style={styles.text}>{personalInfo?.address}</Text>
          <Text style={styles.text}>{personalInfo?.email}</Text>
          <Text style={styles.text}>{personalInfo?.phoneNumber}</Text>
          <View style={styles.section}>
            {personalInfo?.socialLinks.map((social, index) => (
              <Link key={index} style={styles.link} src={social.link}>
                {social.socialMedia}
              </Link>
            ))}
          </View>
          <Text style={styles.text}>{education?.institution}</Text>
          <Text style={styles.text}>{education?.location}</Text>
          <Text style={styles.text}>{education?.degree}</Text>
          <Text style={styles.text}>{education?.field}</Text>
          <Text style={styles.text}>{education?.educationStartDate}</Text>
          <Text style={styles.text}>{education?.educationEndDate}</Text>
          <Text style={styles.text}>{education?.scoreType} - {education?.score}</Text>
          {/* changing score type not reflecting on pdf */}
          <Text style={styles.text}>{experience?.organization}</Text>
          <Text style={styles.text}>{experience?.location}</Text>
          <Text style={styles.text}>{experience?.title}</Text>
          <Text style={styles.text}>{experience?.description}</Text>
          <Text style={styles.text}>{experience?.startDate}</Text>
          <Text style={styles.text}>{experience?.endDate}</Text>
          <Text style={styles.text}>{skills?.languages}</Text>
          <Text style={styles.text}>{skills?.libraries}</Text>
          <Text style={styles.text}>{skills?.platforms}</Text>
          <Text style={styles.text}>{project?.projectTitle}</Text>
          <Text style={styles.text}>{project?.technologies}</Text>
          <Text style={styles.text}>{project?.projectLinks}</Text>
          <Text style={styles.text}>{project?.description}</Text>
          <Text style={styles.text}>{project?.projectStart}</Text>
          <Text style={styles.text}>{project?.projectEnd}</Text>
          
          
        </View>
        
      </Page>
    </Document>
  );
}
