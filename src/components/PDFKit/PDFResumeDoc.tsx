import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import {
  PersonalInfo,
  Education,
  Experience,
  Skills,
  Project,
} from "@/types/ResumeDetailsTypes";

type PDFResumeDocProps = {
  personalInfo: PersonalInfo | null;
  education: Education | null;
  experience: Experience | null;
  skills: Skills | null;
  project: Project | null;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  link: {
    fontSize: 12,
    textDecoration: "none",
    marginRight: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 10,
  },
});

export default function PDFResumeDoc({
  personalInfo,
  education,
  experience,
  skills,
  project,
}: PDFResumeDocProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>{personalInfo?.fullName}</Text>
          <Text style={styles.text}>{personalInfo?.jobTitle}</Text>
          <Text style={styles.text}>{personalInfo?.address}</Text>
          <Text style={styles.text}>{personalInfo?.email}</Text>
          <Text style={styles.text}>{personalInfo?.phoneNumber}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Link style={styles.link} href={personalInfo?.socialLinks[0].link}>
              {personalInfo?.socialLinks[0].socialMedia}
            </Link>
            <Link style={styles.link} href={personalInfo?.socialLinks[1].link}>
              {personalInfo?.socialLinks[1].socialMedia}
            </Link>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          <Text style={styles.text}>{education?.degree}</Text>
          <Text style={styles.text}>{education?.field}</Text>
          <Text style={styles.text}>{education?.institution}</Text>
          <Text style={styles.text}>{education?.location}</Text>
          <Text style={styles.text}>
            {education?.educationStartDate} - {education?.educationEndDate}
          </Text>
          <Text style={styles.text}>
            {education?.scoreType} - {education?.score}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          <Text style={styles.text}>{experience?.title}</Text>
          <Text style={styles.text}>{experience?.organization}</Text>
          <Text style={styles.text}>{experience?.location}</Text>
          <Text style={styles.text}>
            {experience?.startDate} - {experience?.endDate}
          </Text>
          <Text style={styles.text}>{experience?.description}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.subheader}>Skills</Text>
          <Text style={styles.text}>{skills?.languages}</Text>
          <Text style={styles.text}>{skills?.libraries}</Text>
          <Text style={styles.text}>{skills?.platforms}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.subheader}>Projects</Text>
          <Text style={styles.text}>{project?.projectTitle}</Text>
          <Text style={styles.text}>{project?.technologies}</Text>
          <Text style={styles.text}>{project?.description}</Text>
          <Text style={styles.text}>
            {project?.projectStart} - {project?.projectEnd}
          </Text>
          <Text style={styles.text}>{project?.projectLinks}</Text>
        </View>
      </Page>
    </Document>
  );
}
