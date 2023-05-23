import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Salt Montenegro`}</title>
      {Boolean(meta) ? <meta name="description" content={meta} /> : null}
    </Helmet>
    {children}
  </>
));

export default Page;

// Usage

