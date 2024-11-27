import TeacherFeedback from "@/components/organisms/feedbacks/Teacher";
import TemplateAuth from "@/components/templates/TemplateAuth";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <TemplateAuth>
        <TeacherFeedback />
      </TemplateAuth>
    </>
  );
}
