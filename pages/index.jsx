import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
