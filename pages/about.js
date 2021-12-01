import AnotherLayout from "@/components/Layout/AnotherLayout";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <AnotherLayout>{page}</AnotherLayout>;
};

export default About;
