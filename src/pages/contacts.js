import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import { Link } from 'gatsby';

const Contacts = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactsJson.title} />
    <Box>
      <h3>Email</h3>
      <div><a href={'mailto:'+data.contactsJson.email}>{data.contactsJson.email}</a></div>
    </Box>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contactsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Contacts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contacts;

export const query = graphql`
  query ContactsQuery {
    contactsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      email
    }
  }
`;
