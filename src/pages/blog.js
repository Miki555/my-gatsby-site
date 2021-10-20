import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        sourceInstanceName
        absolutePath
      }
    }
  }
`;

export default BlogPage;
