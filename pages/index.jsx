import Home from "@components/Home";
import About from "@components/About";
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import Projects from "@components/Projects";
import MainLayout from "../layouts/MainLayout";

export default function Index() {
  return (
    <main id="main">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

Index.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
