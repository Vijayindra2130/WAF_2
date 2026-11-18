import pageStyles from "./page.module.css";
export default function Student() {
  const passed = true;

  return (
    <div>
      <h2 className={passed ? pageStyles.pass : pageStyles.fail}>
        Student Result
      </h2>
    </div>
  );
}