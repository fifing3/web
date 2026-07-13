import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  type?: string;
  image?: string;
  schema?: any;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "Bimbel UNHAN, Masuk UNHAN, Tryout UNHAN, Tes UNHAN, Modul UNHAN, Universitas Pertahanan, Seleksi UNHAN",
  url = "",
  type = "website",
  image = "https://bmu.app/logo.png",
  schema
}: SEOProps) {
  const siteUrl = "https://bmu.app"; // Using a placeholder domain for the SEO tags
  const fullUrl = `${siteUrl}${url}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bimbel Masuk Unhan" />
      <html lang="id" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Bimbel Masuk Unhan" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
