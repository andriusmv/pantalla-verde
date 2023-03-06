import Link from "next/link";
import supabase from "../../utils/supabase";

export default async function Courses() {
  const { data: course } = await supabase.from("course").select("id, title");

  if (!course) {
    return <p>No posts found.</p>;
  }

  return course.map((course) => (
    <p key={course.id}>
      <Link href={`/courses/${course.id}`}>{course.title}</Link>
    </p>
  ));
}
