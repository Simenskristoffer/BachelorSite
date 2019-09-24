import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import "../components/all.scss";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import FormerClients from "../components/FormerClients";

export const ServicesPageTemplate = ({
  title,
  subtitle,
  forsidebilde,
  seoDescription,
  heading,
  subheading,
  info,
  image
}) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{`Simen Stubsjoen Webdesign - ${title}`}</title>
      <meta name='description' content={seoDescription} />
    </Helmet>
    <Hero title={title} subtitle={subtitle} img={forsidebilde} />
  </>
);

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  seoDescription: PropTypes.string,
  forsidebilde: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  info: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        forsidebilde={frontmatter.forsidebilde}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        seoDescription={frontmatter.seoDescription}
        info={frontmatter.info}
        image={frontmatter.image}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        title
        subtitle
        forsidebilde {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        seoDescription
        heading
        subheading
        info
      }
    }
  }
`;
