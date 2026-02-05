import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    image?: string;
}

const SEO = ({ title, description, canonical, image }: SEOProps) => {
    const siteTitle = "ZUNO Growth Engine";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const defaultDescription = "ZUNO by Perch - Strategy, Automation, and Investment engines for sustainable business growth.";
    const siteUrl = "https://www.zunobyperch.com";
    const defaultImage = `${siteUrl}/zuno-logo.png`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
