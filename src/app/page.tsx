import { Header, Todolist, Todolistinput, Done } from "@/components/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Todolist list="Create guest experience" />
      <Todolist list="Document current CI/CD process" />
      <Todolist list="Perform code for final review" />
      <Todolist list="Implement new color palette for design team" />
      <Todolist list="Fix image uploading process for guess check-in" />
      <Todolist list="Provide on boarding process" />
      <hr />
      <Done num="0" />
      <Todolistinput />
    </main>
  );
}
