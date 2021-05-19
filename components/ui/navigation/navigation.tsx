import React from "react";
import Container from "../container/container";
import Title from "./title";
import Link from "./link";

const Component = () => (
  <div className="h-16 shadow flex items-center">
    <Container>
      <div className="mx-2 flex justify-between">
        <div>
          <Title href="/">Ty Lange-Smith</Title>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
          <Link href="/cv">CV</Link>
        </div>
      </div>
    </Container>
  </div>
);

export default Component;
