import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Lateprojects = ({ data }) => (
    <Layout>
      <Head pageTitle="Late Projects" />
      <Box>
        <h3>Late Projects</h3>
        <div>When you have a late-running project there can be a temptation to bring more resource onto a project. However, the conventional wisdom is that bringing more people onto a late-running project tends to make it later. Why would that be, and what can be done?</div>
        <h3>Why?</h3>
        <div>In brief, because larger teams have more communication overheads, and because it uses up existing resource to bring a new recruit up to speed.</div>
        <h3>What can be done?</h3>
        <div>Firstly, address resource issues as early as possible so that new recruits have time to become productive. Secondly, hire experience - more senior staff require less time to familiarise themselves with the technologies used and become productive faster.</div>
      </Box>
    </Layout>
  );
  
export default Lateprojects;