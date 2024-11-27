import StudentFeedback from "@/components/organisms/feedbacks/Student";
import TemplateAuth from "@/components/templates/TemplateAuth";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <TemplateAuth>
        <StudentFeedback />
      </TemplateAuth>
    </>
  );
}
