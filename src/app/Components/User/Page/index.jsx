import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

const Page = forwardRef(
  ({ children, title = "", meta, keywords, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Salt Montenegro`}</title>
        {Boolean(meta) ? (
          <>
            <meta name="description" content={meta} />
            <meta name="keywords" content={keywords} />
          </>
        ) : null}
      </Helmet>
      {children}
    </>
  )
);

export default Page;
