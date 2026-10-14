import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';

/** Chrome for the docs/catalog site. Lives in a route group so pages like
 *  `/example` can render their own header and footer instead. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </>
  );
}
