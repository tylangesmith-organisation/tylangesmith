import React from "react";
import Container from "../container/container";
import Title from "./title";
import Link from "./link";

const Component = () => (
  <div className="h-16 shadow-md flex items-center flex-shrink-0">
    <Container>
      <div className="flex justify-between">
        <div>
          <Title href="/">Ty Lange-Smith</Title>
        </div>
        <div>
          <Link href="/blog">Blog 💭</Link>
          <Link href="/hire-me">Hire Me 👨‍💻</Link>
        </div>
      </div>
    </Container>
  </div>
);

export default Component;
