import React from "react";
import Layout from "../components/common/layout/layout";
import ReactMarkdown from 'react-markdown';

const Instruction = () => {
  const markdown = `
    ### Instruction
      cd ~/dev
      git clone git@github.com:jahskee/gatsby-app1.git gatsby-app01
      cd gatsby-app01
      npm start
  `;
  return (
    <Layout>

      <div style={{ paddingTop: 20, margin: "0: auto" }}>
        <p> <a href="https://developer.github.com/v4/explorer/" target="_blank">Github GraphQL Explorer</a></p>
        <ReactMarkdown source={markdown} style={{ fontSize: 10 }} />
      </div>
    </Layout>
  )
}

export default Instruction;